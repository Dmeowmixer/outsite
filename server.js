const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
  return res.send('pong')
});

app.get('/locations', (req, res) => {
    // And insert something like this instead:
  return res.json(
    [
      {
        id: 1,
        username: "samsepi0l"
      }, {
        id: 2,
        username: "D0loresH4ze"
      }
    ]
  );
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);