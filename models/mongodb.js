const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  images: [String], // Array of image URLs
  habitat: { type: String, required: true },
  views: { type: Number, default: 0 } // Counter for views
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
