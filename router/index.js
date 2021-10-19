const express = require('express')
const router = express.Router()
const proto = require("../models/proto")


// 首页
router.get('/', async (req, res) => {
    var result = await proto.find()
    //console.log(result);
    res.render('index.html', { result: result })
})

// 1
router.get('/topic/one', (req, res) => {
    //console.log(111);
    res.render('topic/one.html')
})
// 2
router.get('/topic/one2', (req, res) => {
    //console.log(111);
    res.render('topic/one2.html')
})
// 3
router.get('/topic/one3', (req, res) => {
    //console.log(111);
    res.render('topic/one3.html')
})
// 4
router.get('/topic/one4', (req, res) => {
    //console.log(111);
    res.render('topic/one4.html')
})

//详情
router.get('/topic/article', (req, res) => {
    res.render('topic/01.html')
})

module.exports = router