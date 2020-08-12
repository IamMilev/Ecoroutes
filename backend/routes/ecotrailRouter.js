const router = require('express').Router();
let Ecotrail = require('../models/ecotrailModel');


router.route('/').get((req, res) => {
    Ecotrail.find()
        .then(ecotrails => res.json(ecotrails))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const author_id = req.body.author_id;
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newEcotrail = new Ecotrail({
        author_id,
        author,
        title,
        description,
        image,
        duration,
        date,
    });

    Ecotrail.create(newEcotrail)
        .then(() => res.json('Ecotrail added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//     Ecotrail.findById(req.params.id)
//         .then(ecotrails => res.json(ecotrails))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//     Ecotrail.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Ecotrail deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//     Ecotrail.findById(req.params.id)
//         .then(ecotrails => {
//             ecotrails.id = req.body.id
//             ecotrails.author = req.body.displayName;
//             ecotrails.title = req.body.title;
//             ecotrails.description = req.body.description;
//             ecotrails.image = req.body.image;
//             ecotrails.duration = Number(req.body.duration);
//             ecotrails.date = Date.parse(req.body.date);
//
//             ecotrails.save()
//                 .then(() => res.json('Ecotrail updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;