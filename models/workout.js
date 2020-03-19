const { model, Schema } = require('mongoose')

module.exports = model('workout', new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      name: {
        type: String
      },
      type: {
        type: String
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
      duration: {
        type: Number
      }
    }
  ]
}))