const express = require('express')
const router = express.Router()
const Sabout = require('../models/Sabout')
const Sproject = require('../models/Sproject')


// 首页
router.get('/', async(req, res) => {
    //从数据库中查询关于我们的所有数据
    let result = await Sabout.find()
        //从数据库中查询关于我们的所有数据
    let result2 = await Sproject.find()
        // 渲染模板并传送数据
    res.render('index.html', { result: result, result2: result2 })
})


module.exports = router