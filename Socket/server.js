const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/routes");
const { Server } = require("socket.io");

const app = express();
const port = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO to server
const io = new Server(server);
// Export io for use in routes
module.exports = { app, server, io };


// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/moviesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});

// Routes
app.use("/api/movies", movieRoutes);

// Socket.IO logic
io.on("connection", (socket) => {
  console.log(" Socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log(" Socket disconnected:", socket.id);
  });

  // Example: send random number every 5 sec
  setInterval(() => {
    socket.emit("number", Math.floor(Math.random() * 100));
  }, 5000);
});

// Start server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
