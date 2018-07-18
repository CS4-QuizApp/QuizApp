const tableController = {};
const client = require('./../databases/postgres');


tableController.dropTable = (req, res, next) => {
  let query = `DROP TABLE Questions`;
  client.query(query, (err, result) => {
    if (err) return console.error('error making table:', err);
    console.log(result);
  });
  res.end();
};

tableController.seeTable = (req, res, next) => {
  let query = `SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name='Questions';`;
  client.query(query, (err, result) => {
    if (err) return console.error('error making table:', err);
    console.log(result);
  });
  res.end();
}

tableController.makeTable = (req, res, next) => {
  let subcatQuery = `CREATE TABLE Subcategories (
    Subcategory varchar(255),
    Category varchar(255),
    PRIMARY KEY (Subcategory)
  );`;
  let questionsQuery = `CREATE TABLE Questions (
    Question varchar(255),
    Answer varchar(255),
    Add_Date bigint,
    Subcategory varchar(255),
    PRIMARY KEY (Question),
    FOREIGN KEY (Subcategory) REFERENCES Subcategories(Subcategory)
  );`;
  client.query(questionsQuery, (err, result) => {
    if (err) return console.error('error making table:', err);
    console.log(result);
  });
  res.end();
}

// let deleteQuery = `DELETE FROM Subcategories WHERE Category='Non-technical';`;
// client.query(deleteQuery, (err, result) => {
//   if (err) return console.error('error making table:', err);
//   console.log(result);
// });

// let primaryQuery = `ALTER TABLE Questions ADD PRIMARY KEY (Question)`;
// client.query(primaryQuery, (err, result) => {
//   if (err) return console.error('error making table:', err);
//   console.log(result);
// });

module.exports = tableController;