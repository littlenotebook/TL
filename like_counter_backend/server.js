const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let likeCount = 0; // initial count

// Root route for sanity check
app.get("/", (req, res) => {
  res.send("Like Counter Backend is running");
});

// Get current like count
app.get("/likes", (req, res) => {
  res.json({ count: likeCount });
});

// Increment like count
app.post("/likes/increment", (req, res) => {
  likeCount++;
  res.json({ count: likeCount });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
