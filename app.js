const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const expressSession = require("express-session");
// 挂载自定义的路由
const router = require('./router')
const app = express()


mongoose.connect("mongodb://localhost:27017/myblog");
// 获取连接对象，打印连接是否成功
var db = mongoose.connection;
db.on("error", () => {
    console.log("连接出错");
});
db.once("open", function() {
    console.log("连接成功");
});
app.use(
    expressSession({
        name: "sessionID",
        secret: "secret",
        resave: false,
        rolling: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 3,
        },
    })
);
app.use("/node_modules", express.static("./node_modules"));
app.use("/public", express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine("html", require("express-art-template"));
app.set("views", __dirname + "/views");




// 挂载路由
app.use('/', router);


app.listen(8000, () => {
    console.log('已开启');

})