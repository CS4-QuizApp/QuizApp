const pg = require("pg");
const connectionString = "postgres://jcqmqfii:yi4Q5uWPV8Us_NnhdOQ9bMcmxpqa8-vI@stampy.db.elephantsql.com:5432/jcqmqfii";
const client = new pg.Client(connectionString);

client.connect((err) => {
  if(err) return console.error(`Couldn't connect to postgres:`, err);
});

module.exports = client;