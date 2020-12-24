const express = require('express');
const route = require(`./routes`);
const cookieParser = require(`cookie-parser`);
const cors = require('cors');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(cookieParser('aduvipqua'))
app.use(cors({
    origin: true,
    credentials:  true
  }));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.get("/s", (req,res) => {
    res.cookie("bsaSession", req.session.id, {httpOnly:false})
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Credentials','true')
    res.send("set")
})

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,

}));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

route(app);
