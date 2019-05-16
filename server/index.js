const express = require('express');
let app = express();
const parser = require('body-parser');
const database = require('./db/index.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }))
let port = process.env.PORT || 1128;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
