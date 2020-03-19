const router = require('express').Router()
const { Workout } = require('../models')

// Get all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
  .then(workouts => res.json(workouts))
  .catch(e => console.error(e))
})

// Post a workout
router.get('/workouts', (req, res) =>{
  Workout.create({ day: new Date() })
  .then((data) => res.json(data))
  .catch(e => console.error(e))
})

module.exports = router