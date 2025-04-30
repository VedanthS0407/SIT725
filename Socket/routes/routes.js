const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const { io } = require('../server'); // import io

// GET all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new movie
router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();

    // Emit the new movie to all connected clients
    io.emit('movieAdded', savedMovie);

    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
