const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
