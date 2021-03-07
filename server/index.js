const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', function(req, res) {
  var scopes = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + process.env.client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent("http://localhost:3000/callback/  "));
  });

  app.get('/home', function (req, res) {
    res.send('hello world')
  })

  app.get('/callback', function (req, res) {
    res.render('../src/App')
  })

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);