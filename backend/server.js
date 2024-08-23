const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Gunakan CORS middleware
app.use(cors());

app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
