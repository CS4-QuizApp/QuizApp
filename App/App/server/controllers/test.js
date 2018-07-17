let testController = {};

testController.checkTime = (req, res, next) => {
  client = res.locals.client;
  console.log('running testController!');
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

module.exports = testController;