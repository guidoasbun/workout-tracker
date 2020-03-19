const router = require('express').Router();
const { Workout } = require('../models');

// Get all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(e => console.error(e));
});

// GET workouts in range
router.get('/workouts/range', (req, res) => {
  Workout.find()
    .limit(7)
    .then(workout => res.json(workout))
    .catch(e => console.error(e));
  console.log(req.body);
});

// Post a workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(e => console.log(e));
});

// PUT one exercise in workout
router.put('/workouts/:id', (req, res) => {
  Workout.update({ id: req.params.id }, req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e));
});

module.exports = router;
