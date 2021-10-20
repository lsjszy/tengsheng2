const express = require('express')
const router = express.Router()
const proto = require("../models/proto")
const erji = require("../models/erji")
const erji1 = require("../models/erji1")
const erji2 = require("../models/erji2")
const erji3 = require("../models/erji3")
const erji4 = require("../models/erji4")
const erji5 = require("../models/erji5")
//导入分页模块：
const paginaiton = require("mongoose-sex-page");//返回一个方法，调用方法实现分页


// 首页
router.get('/', async (req, res) => {
    const page = req.query.page;//接收客户端传过来的代码
    var result = await paginaiton(proto).page(page).size(6).display(5).find().exec();
    //var result = await proto.find();
    //console.log(result);
    res.render('hezuo.html', { result: result })

    return;
})

// 1
router.get('/topic/one', async (req, res) => {
    const page = req.query.page;//接收客户端传过来的代码
    var result = await paginaiton(proto).page(page).size(6).display(5).find().exec();
    //console.log(111);
    //console.log(result);
    res.render('topic/one.html', { result: result })
})
// 2
router.get('/topic/one2', (req, res) => {
    //console.log(111);
    res.render('topic/one.html')
})
// 3
router.get('/topic/one3', (req, res) => {
    //console.log(111);
    res.render('topic/one.html')
})
// 4
router.get('/topic/one4', (req, res) => {
    //console.log(111);
    res.render('topic/one.html')
})

//详情
router.get('/topic/article', async (req, res) => {
    var result = await erji.find();
    //console.log(result);
    res.render('topic/01.html', { result: result })
})
//详情2
router.get('/topic/article2', async (req, res) => {
    var result = await erji1.find();
    //console.log(result);
    res.render('topic/01.html', { result: result })
})
//详情3
router.get('/topic/article3', async (req, res) => {
    var result = await erji2.find();
    res.render('topic/01.html', { result: result })
})
//详情4
router.get('/topic/article4', async (req, res) => {
    var result = await erji3.find();
    res.render('topic/01.html', { result: result })
})
//详情5
router.get('/topic/article5', async (req, res) => {
    var result = await erji4.find();
    res.render('topic/01.html', { result: result })
})
//详情6
router.get('/topic/article6', async (req, res) => {
    var result = await erji5.find();
    res.render('topic/01.html', { result: result })
})

module.exports = router