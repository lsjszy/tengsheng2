const express = require('express')
const router = express.Router()
const Intro=require("../modules/Intro")



// 首页
router.get('/', (req, res) => {

    res.render('index.html')
})
// 公司地址
router.get('/address', (req, res) => {
    res.render('address.html')
})
// 企业简介
router.get('/introduction', async(req, res) => {
    let result = await Intro.find();
    console.log(result);
    res.render('introduction.html', { result: result })
})
// 企业荣誉
router.get('/honor', (req, res) => {
    res.render('honor.html')
})
// 企业文化
router.get('/culture', (req, res) => {
    res.render('culture.html')
})
// 人才招聘
router.get('/recruitment', (req, res) => {
    res.render('recruitment.html')
})

module.exports = router