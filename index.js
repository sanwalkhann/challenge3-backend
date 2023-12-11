const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());

app.get('/api/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ random_number: randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
