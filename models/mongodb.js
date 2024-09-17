const mongoose = require('mongoose');

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true, // Ensures indexes are created with unique constraints
  useFindAndModify: false // Avoids deprecation warnings for findAndModify
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define the schema for your Animal model
const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  images: [String], // Array of image URLs
  habitat: { type: String, required: true },
  views: { type: Number, default: 0 } // Counter for views
});

// Create the Animal model using the schema
const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
