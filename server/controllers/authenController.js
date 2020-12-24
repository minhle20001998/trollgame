const timeOut = 10000000;
const db = require(`../models/db`);
const user_model = require(`../models/users/users`);
const randomID = require("../scripts/ranUserID");
var http = require('http');

/*
    SignedCookie return userID
*/
class AuthenController {
    login(req, res) {
        const username = req.body.username;
        const userPassword = req.body.password;
        console.log("aaa");
        user_model.queryPassword(req.body.username, (userInfo) => {
            if (userInfo[0].password == userPassword) {
                res.status(200);
                res.cookie('login', userInfo[0].userID, { expires: new Date(Date.now() + timeOut), signed: true });
                res.json({
                    "login": "true"
                })
            } else {
                res.status(400);
                res.json({
                    "login": "false"
                })
            }
        })
       
    }
    register(req, res) {
        console.log("reeeegister");
        const randomUserID = randomID();

        user_model.create(randomUserID, req.body.username, req.body.password, (result) => {
            res.json({
                "register": "success"
            })
        })
    }
}



module.exports = new AuthenController;