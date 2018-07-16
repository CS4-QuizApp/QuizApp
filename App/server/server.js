const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  console.log('made correct get test request!');
  res.json([{
  	id: 1,
  	username: "user1 test"
  }, {
  	id: 2,
  	username: "user2"
  }]);
})

app.listen(3001, () => console.log('app is listening on port 3001'));