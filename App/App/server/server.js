const express = require('express');
const app = express();
const testController = require('./controllers/controller')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/checkTime', testController.checkTime);

app.get('/test', testController.test);

app.post('/makeTable', testController.makeTable);

app.get('/getQuestions/:searchCat', testController.getQuestions);

app.post('/addQuestion', testController.addQuestion);

app.listen(3001, () => console.log('app is listening on port 3001'));
