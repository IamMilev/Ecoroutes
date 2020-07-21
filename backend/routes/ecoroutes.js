const router = require('express').Router();
let Ecoroute = require('../models/ecoroute.model');

router.route('/').get((req, res) => {
    Ecoroute.find()
        .then(ecoroutes => res.json(ecoroutes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newEcoroute = new Ecoroute({
        username,
        title,
        description,
        image,
        duration,
        date,
    });

    newEcoroute.save()
        .then(() => res.json('Ecoroute added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Ecoroute.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Ecoroute.findByIdAndDelete(req.params.id)
        .then(() => res.json('Ecoroute deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Ecoroute.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.title = req.body.title;
            exercise.description = req.body.description;
            exercise.image = req.body.image;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Ecoroute updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;