const movieService = require("../services/movieService");

const getMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.json({ statusCode: 200, data: movies, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies", error });
  }
};

const createMovie = async (req, res) => {
  try {
    await movieService.addMovie(req.body);
    res.json({ statusCode: 200, message: "Movie added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add movie", error });
  }
};

module.exports = {
  getMovies,
  createMovie,
};
