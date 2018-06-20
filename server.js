const express = require('express');
const app = express();
const mockData = require('./mockData.js');


const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

const errorLogger = (request, response, next) => {
  response.status(404).send('Womp womp! It broke!');
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.get('/', (request, response) => {});

app.get('/json', (request, response) => {
  response.status(200).json(mockData)
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use(errorLogger);


