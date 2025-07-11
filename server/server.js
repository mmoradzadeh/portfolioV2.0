const express = require("express");
const path = require("path");
const cors = require("cors");
const compression = require("compression");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable gzip compression
app.use(compression());

// Enable CORS
app.use(cors());

// Serve static frontend build from root/dist
app.use(express.static(path.join(__dirname, "../dist")));

// Health check endpoint
app.get("/health", (req, res) => {
  res.send("OK");
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// For all other routes, serve index.html (React Router support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} use the following link: http://localhost:${PORT}`);
});
