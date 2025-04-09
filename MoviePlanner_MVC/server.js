const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/moviesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});

// Routes
app.use("/api/movies", movieRoutes);

// Server
app.listen(port, () => {
  console.log(`Movie Night Planner is running at http://localhost:${port}`);
});
