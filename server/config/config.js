require("dotenv").config();

const config = {
  db: {
    host: "localhost", //192.168.137.115", //process.env.DATABASE_HOST,
    user: "root", //process.env.DATABASE_USER,
    password: "Akash.0900", //process.env.DATABASE_PASSWORD,
    database: "collegian", //process.env.DATABASE_NAME,
    multipleStatements: true,
  },
};

module.exports = config;
