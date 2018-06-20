const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.get('/', (request, response) => {});

app.get('/json', (request, response) => {
  response.status(200).json({ 'name': 'Daniela' })
})


