const testController = {};
const client = require('./../databases/postgres')

testController.checkTime = (req, res, next) => {
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
  res.end();
};

testController.test = (req, res, next) => {
  console.log('running middleware');
  client.query(`SELECT * FROM questions WHERE category='category test 3'`, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    client.end();
  });
  res.end();
}

testController.makeTable = (req, res, next) => {
  client.query(`CREATE TABLE questions_test (
    question varchar(255),
    answer varchar(255),
    category varchar(255)
  )`, (err, result) => {
    if (err) return console.error('error making table:', err);
    console.log(result);
  });
  res.end();
}

testController.addQuestion = (req, res, next) => {
  const { question, answer, category } = req.body;
  console.log(question);
  console.log(answer);
  console.log(category);
  client.query(`INSERT INTO questions_test (question, answer, category)
  VALUES ('${question}', '${answer}', '${category}');`, (err, result) => {
    if (err) return console.log('error:', err);
    console.log(result);
  });
  res.end();
}

testController.getQuestions = (req, res, next) => {
  const { searchCat } = req.params;
  client.query(`SELECT * FROM questions_test WHERE category='${searchCat}';`, (err, result) => {
    if (err) return console.log('error:', err);
    console.log(result.rows);
  });
  res.end();
}

module.exports = testController;