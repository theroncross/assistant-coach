const express = require('express');
const data = require('./data.json');

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/api', (req, res) => {
  res.json(data);
})

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}.`)
})