const express = require('express');

const app = express();
const PORT = 4000;

app.get('/hello', (req, res) => {
  res.status(200).send('Hello word')
});

app.listen(PORT, () => {
  console.log('Server listening in port:', PORT);
});