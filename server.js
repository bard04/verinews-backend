const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('VeriNews Backend is running!');
});

// Fetch news from CurrentsAPI
app.get('/currents', async (req, res) => {
    try {
        const response = await axios.get('https://api.currentsapi.services/v1/latest-news', {
            params: {
                apiKey: process.env.CURRENTS_API_KEY // Use your API key
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
