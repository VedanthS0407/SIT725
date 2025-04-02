const mongoose = require("mongoose");
const { Movie } = require("./server"); // ✅ Importing correctly

mongoose.connect("mongodb://localhost:27017/moviesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");

  const sampleMovies = [
    {
      title: "Bahubali",
      poster: "images/bahubali.jpg",
      trailer: "https://youtu.be/sOEg_YZQsTI",
      description: "The Beginning is a 2015 Indian epic period action film..."
    },
    {
      title: "Interstellar",
      poster: "images/interstellar.jpg",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      description: "Interstellar is a 2014 epic science fiction film directed by Christopher Nolan..."
    },
    {
      title: "Pushpa: The Rise",
      poster: "images/pushpa.jpg",
      trailer: "https://youtu.be/Q1NKMPhP8PY",
      description: "The Rise is a 2021 Indian Telugu-language period action drama film..."
    }
  ];

  return Movie.insertMany(sampleMovies);
}).then(() => {
  console.log("Sample movies inserted!");
  mongoose.connection.close();
}).catch(err => {
  console.error("Error inserting movies:", err);
});
