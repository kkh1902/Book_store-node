var express = require("express");
var router = express.Router();
const bookController = require('../controllers/bookController')
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
var options = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "bookboard",
};
var sessionStore = new MySQLStore(options);

router.use(
    session({
        secret: "asdfasffdas",
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
    })
);

/* GET home page. */
router.get("/", bookController.bookList);

module.exports = router;