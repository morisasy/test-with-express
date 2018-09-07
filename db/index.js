const { Client } = require("pg");
const db = process.env.NODE_ENV === "test" ? "students-test" : "students";

const connectionString = {
  user: 'postgres',
  host: 'localhost',
  database: db,
  password: 'medi4949',
  port: 5432,
};
//connectionString: `postgresql://localhost/${db}`
const client = new Client(connectionString);

client.connect();

module.exports = client;
