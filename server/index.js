const express = require('express');
let app = express();
const parser = require('body-parser');
const database = require('./db/index.js');
const models = require('./models');


app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }))
let port = process.env.PORT || 1128;

app.get('/', (req, res) => {
  res.send(200);
})

app.get('/reviews/:id', (req, res) => {
  models.reviews.get(req.params.id, response => {
    res.status(200).send(response)
  })
});

app.post('/reviews/:id', (req, res) => {
  console.log(req.body, 'post method id');
  models.reviews.post(req.body, response => {
  console.log(response)
  })
  res.send(201);
})




app.listen(port, function () {
  console.log(`listening on port ${port}`);
});