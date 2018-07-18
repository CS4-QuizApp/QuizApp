const categoryController = {};
const client = require('./../databases/postgres');

categoryController.addCategory = (req, res, next) => {
  const { category, subcategory } = req.body;
  let query = `INSERT INTO Subcategories (Category, Subcategory)
    VALUES ('${category}', '${subcategory}');`;
  client.query(query, (err, result) => {
    if (err) return console.error('error:', err);
    console.log(result);
  });
  res.end();
};

categoryController.getCategories = (req, res, next) => {
  let query = `SELECT DISTINCT Category FROM Subcategories`;
  client.query(query, (err, result) => {
    if (err) return console.error('error:', err);
    res.json(result);
  });
};

categoryController.getSubcategories = (req, res, next) => {
  const { category } = req.params;
  let query = `SELECT Subcategory FROM Subcategories WHERE Category='${category}';`;
  client.query(query, (err, result) => {
    if (err) return console.error('error:', err);
    let subcategoryList = result.rows.map(object => object.subcategory);
    console.log(subcategoryList);
  });
  res.end();
};

module.exports = categoryController;