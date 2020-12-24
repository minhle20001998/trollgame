const mysql = require(`mysql`);
let instance = null;

const db = mysql.createPool({
    database: 'trollgame',
    host: "localhost",
    user: "root",
    password: "",
    multipleStatements: true
});
module.exports = db;