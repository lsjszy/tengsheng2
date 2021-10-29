const express = require('express')
const router = express.Router()
const Sabout = require('../models/Sabout')
const Sproject = require('../models/Sproject')
const Sagency = require('../models/Sagency')
const Snew = require('../models/Snew')
const Spartner = require('../models/Spartner')
const Sproj = require('../models/Sproj')
const Spro = require('../models/Spro')


// 首页
router.get('/', async(req, res) => {
    //从数据库中查询关于我们的所有数据
    let result = await Sabout.find()
        //从数据库中查询产业领域的所有数据
    let result2 = await Sproject.find()
        //从数据库中查询工程案例的所有数据
    let result3 = await Sagency.find()
        //从数据库中查询新闻资讯的所有数据
    let result4 = await Snew.find()
        //从数据库中查询合作客户的所有数据
    let result5 = await Spartner.find()

    // 渲染模板并传送数据
    res.render('index.html', { result: result, result2: result2, result3: result3, result4: result4, result5: result5 })
})

// 产业领域
router.get('/project', async(req, res) => {
    var result = await Sproj.find()
    res.render('project.html', { result: result })
})

// 产业领域二级页面
router.get('/pro', async(req, res) => {
    var result = await Spro.find()
    res.render('pr.html', { result: result })
})

module.exports = router