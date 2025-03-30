require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow frontend to access backend

console.log("Currents API Key:", process.env.CURRENTS_API_KEY);

app.get("/currents", async (req, res) => {
  try {
    if (!process.env.CURRENTS_API_KEY) {
      return res.status(500).json({ error: "Missing API key" });
    }

    const response = await axios.get(
      `https://api.currentsapi.services/v1/latest-news?apiKey=${process.env.CURRENTS_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
