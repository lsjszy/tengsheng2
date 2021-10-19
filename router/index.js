const express = require('express')
const router = express.Router()



// 首页
router.get('/', (req, res) => {

    res.render('index.html')
})

// 1
router.get('/one', (req, res) => {
    //console.log(111);
    res.render('one.html')
})

router.post("/one", (req, res) => {
    res.send("one.html");
});

module.exports = router