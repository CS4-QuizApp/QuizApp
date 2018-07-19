const questionController = {};
const client = require('./../databases/postgres');

questionController.addQuestion = (req, res, next) => {
  const { question, answer, subcategory } = req.body;
  date = Date.parse(new Date());
  let query = `INSERT INTO Questions (Question, Answer, Add_Date, Subcategory)
  VALUES ('${question}', '${answer}', '${date}', '${subcategory}');`;
  client.query(query, (err, result) => {
    if (err) return console.error('error:', err);
    console.log(result);
  });
  res.end();
}

questionController.getAllQuestions = (req, res, next) => {
  let query = `SELECT * FROM Questions;`;
  client.query(query, (err, result) => {
    if (err) return console.error('error:', err);
    console.log(result.rows);
    // res.json(result.rows);
  });
  res.end();
}

questionController.getQuestions = (req, res, next) => {
  const { searchCat } = req.params;
  let query = `SELECT * FROM Questions WHERE Subcategory='${searchCat}';`;
  client.query(query, (err, result) => {
    if (err) return console.error('error:', err);
    console.log(result.rows);
    res.json(result.rows);
  });
}

module.exports = questionController;