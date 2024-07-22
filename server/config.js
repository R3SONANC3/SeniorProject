const mysql = require('mysql2/promise');
require('dotenv').config();

const initMySQL = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    console.log("Connected to the MySQL database.");
    return connection;
  } catch (error) {
    console.error("Failed to connect to the MySQL database:", error);
    throw error;
  }
};

module.exports = { initMySQL };
