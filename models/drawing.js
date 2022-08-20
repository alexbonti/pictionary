let mongoose = require('mongoose')

let drawingSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  drawing: { type: String, required: true },
})

module.exports = mongoose.model('Drawing', drawingSchema)