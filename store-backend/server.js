import data from './data.js';
import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
