const db = require(`../db`);
module.exports = {
    create: function (userID, userName, password, callback) {
        const acceptQuery = `INSERT INTO users (userID,userName,password)
            VALUES ("${userID}","${userName}","${password}")
        ;`
        db.query(acceptQuery, (err, decisions, fields) => {
            if (err) {
                console.log("err:" + err.message);
            }
            callback(acceptQuery)
        })
    },
    queryPassword: function (userName, callback) {
        const passWordQuery = `SELECT userID, password FROM users WHERE users.userName LIKE '${userName}'`
        db.query(passWordQuery, (err, userInfo, fields) => {
            if (err) {
                console.log("err" + err.message);
            }
            console.log(userInfo);
            callback(userInfo)
        })
    }
}