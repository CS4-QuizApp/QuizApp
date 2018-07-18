const express = require('express');
const app = express();
const QC = require('./controllers/questionController')
const TC = require('./controllers/tableController');
const CC = require('./controllers/categoryController');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

///////////////////// Category functions /////////////////////

app.post('/addCategory', CC.addCategory);

app.get('/getCategories', CC.getCategories);

app.get('/getSubcategories/:category', CC.getSubcategories);

///////////////////// Question functions /////////////////////

app.get('/getQuestions/:searchCat', QC.getQuestions);

app.post('/addQuestion', QC.addQuestion);

app.get('/getAllQuestions', QC.getAllQuestions);

///////////////////// Table functions /////////////////////

// app.post('/makeTable', TC.makeTable);

// app.post('/dropTable', TC.dropTable);

app.get('/seeTable', TC.seeTable);

app.listen(3001, () => console.log('app is listening on port 3001'));
