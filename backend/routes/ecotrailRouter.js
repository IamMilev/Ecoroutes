const Ecotrail = require('../models/ecotrailModel');
const User = require('../models/userModel');
const userRouter = require('../routes/userRouter')

const router = require('express').Router();


router.route('/').get((req, res, next) => {
    const length = req.query.length ? parseInt(req.query.length) : 20
    Ecotrail.find().sort('-created_at').limit(length).populate('author')
        .then((ecotrails) => res.send(ecotrails))
        .catch(next);
})

router.route('/add').post(((req, res, next) => {
        const { description, title, image } = req.body;
        const { _id } = req.user;
        const duration = Number(req.body.duration);
        const date = Date.parse(req.body.date);

        Ecotrail.create({ description, author: _id, title, image, duration, date })
            .then((createdEcotrail) => {
                return Promise.all([
                    User.updateOne({ _id }, { $push: { posts: createdEcotrail } }),
                    Ecotrail.findOne({ _id: createdEcotrail._id })
                ]);
            })
            .then(([modifiedObj, ecotrailObj]) => {
                res.send(ecotrailObj);
            })
            .catch(next);
}))

router.route('/update').put((req, res) => {
        const id = req.params.id;
        const { description } = req.body;
        Ecotrail.updateOne({ _id: id }, { description })
            .then((updatedEcotrail) => res.send(updatedEcotrail))
            .catch(next)
});



module.exports = router;