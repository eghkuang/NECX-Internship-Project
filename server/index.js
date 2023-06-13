const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use(express.json());

app.use('/', staticMiddleware);
// app.use('/database', databese);

app.get('/help', (req, res) => {
  res.send(`Your server is running at http://localhost:${port}`);
});

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
