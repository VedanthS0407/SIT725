const Movie = require("../models/Movie");

const getAllMovies = () => {
  return Movie.find({});
};

const addMovie = (movieData) => {
  const movie = new Movie(movieData);
  return movie.save();
};

module.exports = {
  getAllMovies,
  addMovie,
};
