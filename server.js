const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('VeriNews Backend is running!');
});

// Added /currents route
app.get('/currents', (req, res) => {
    res.json({ message: "Currents news data should appear here" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
