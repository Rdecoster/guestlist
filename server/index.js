const express = require('express');
const bodyParser = require('body-parser');
const port = 3004;

let app = express();

let db = ['minji', 'billy', 'hello']

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/guests', function (req, res) {
  res.send(db);
})

app.post('/guests', function (req, res) {
  console.log('post hello')
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})