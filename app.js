const express = require('express');
const app = express();
const moment = require('moment');

app.get('/', (req, res) => {
  res.send('give me some times in that url');
});

app.get('/:time', (req, res) => {
  console.log(`req.params.time is ${req.params.time}`);
  console.log('trying to parse natural language');
  let time = moment(req.params.time, 'MMMM D, YYYY', true);
  const json = {
    unix: null,
    natural: null
  };
  if (!time.isValid()) {
    console.log('trying to parse unix')
    time = moment.unix(Number(req.params.time));
  }
  if (time.isValid()) {
    console.log('it\'s a valid input!');
    json.unix = Number(time.format('X'));
    json.natural = time.format('MMMM D, YYYY');
  }
  console.log('sending json\n***************');
  res.json(json);
})

app.listen(8080, () => console.log('Server open on 8080'));
