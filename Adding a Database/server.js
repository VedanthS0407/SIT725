const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/moviesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});

// Define Mongoose Schema & Model
const MovieSchema = new mongoose.Schema({
  title: String,
  poster: String,
  trailer: String,
  description: String,
});

const Movie = mongoose.model("Movie", MovieSchema);

// API Endpoint to Get Movies
app.get("/api/movies", async (req, res) => {
  const movies = await Movie.find({});
  res.json({ statusCode: 200, data: movies, message: "Success" });
});

// API Endpoint to Add a Movie
app.post("/api/movies", async (req, res) => {
  const newMovie = new Movie(req.body);
  await newMovie.save();
  res.json({ statusCode: 200, message: "Movie added successfully!" });
});

// Start Server
app.listen(port, () => {
  console.log(`Movie Night Planner is running at http://localhost:${port}`);
});

// ✅ Ensure export happens AFTER defining Movie
module.exports = { Movie };
