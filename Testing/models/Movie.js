const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  poster: { type: String, required: true, trim: true },
  trailer: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Movie', movieSchema);
