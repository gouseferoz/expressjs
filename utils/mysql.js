const mysql      = require('mysql');
require('dotenv').config()

const connection = mysql.createPool({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB,
  connectionLimit: 3000,
});

let getConnection = function(callback) {
    connection.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

module.exports = connection