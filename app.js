const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server side!',
    app: 'Natours',
  });
});

app.post('/', (req, res) => {
  res.send('You can POST to this endpoint...');
});

const port = 3000;

app.listen(port, '127.0.0.1', () => {
  console.log(`Starting server on port ${port}... `);
});
