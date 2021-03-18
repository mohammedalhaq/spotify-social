const express = require('express');

const app = express();

/*
  app.get('/home', function (req, res) {
    res.send('hello world')
  })
*/

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);