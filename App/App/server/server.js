const express = require('express');
const app = express();
const questionController = require('./controllers/questionController')
const tableController = require('./controllers/tableController');
const categoryController = require('./controllers/categoryController');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

///////////////////// Category functions /////////////////////

app.post('/addCategory', categoryController.addCategory);

app.get('/getCategories', categoryController.getCategories);

app.get('/getSubcategories/:category', categoryController.getSubcategories);

///////////////////// Question functions /////////////////////

app.get('/getQuestions/:searchCat', questionController.getQuestions);

app.post('/addQuestion', questionController.addQuestion);

app.get('/getAllQuestions', questionController.getAllQuestions);

///////////////////// Table functions /////////////////////

// app.post('/makeTable', tableController.makeTable);

// app.post('/dropTable', tableController.dropTable);

app.get('/seeTable', tableController.seeTable);

app.listen(3001, () => console.log('app is listening on port 3001'));
