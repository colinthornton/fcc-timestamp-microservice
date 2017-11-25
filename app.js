const express = require('express');
const app = express();
const moment = require('moment');

app.get('/', (req, res) => {
  res.send('give me some times in that url');
});

app.get('/:time', (req, res) => {
  const time = moment(req.params.time);
  const json = {
    unix: null,
    natural: null
  };
  if (time.isValid()) {
    json.unix = time.format('X')
    json.natural = time.format('MMMM D, YYYY');
  }
  res.json(json);
})

app.listen(8080, () => console.log('Server open on 8080'));
