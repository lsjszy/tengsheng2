const express = require('express')
const router = express.Router()
const design = require('../models/design');
const construction = require('../models/construction');
const service = require('../models/service');
const project = require('../models/project');
const estate  = require('../models/estate');
const picture  = require('../models/picture');
const pict  = require('../models/pict');
const photo = require('../models/photo');
const admin = require('../models/admin');
const Pic = require('../models/picture');
const phot = require('../models/phot');
const pho = require('../models/pho');
// 装修设计
router.get('/design', function(req, res) {
    // var news = await News.find();
    var data = {
        logs: [],
        // 获取不到page时默认为打开在第一页
        page: Number(req.query.page || 1),
        limit: 6,
        pages: 1,
        count: 0
    }

    design.find({ head: '装修设计', }).then((logs) => {
        // data.logs = logs;
        // 获取读取内容的总记录
        return logs.length
    }).then((count) => {
        //为了方便,将总记录数存入data对象中
        data.count = count

        //计算总页数，向上取整数, 取最大值
        data.pages = Math.ceil(data.count / data.limit)
            // 页数取值不能超过总页数的值或小于1
            // Math.min(),Math.max()限制最小值最大值
        data.page = Math.min(data.page, data.pages) //2
        data.page = Math.max(data.page, 1) //2

        var skip = (data.page - 1) * data.limit

        return design.find().limit(data.limit).skip(skip)
    }).then((logs) => {
        data.logs = logs

/*         console.log(data)
 */            /**最后渲染 */
        res.render('design.html', {
            logs: data.logs,
            page: data.page,
            limit: data.limit,
            pages: data.pages,
            count: data.count,

        })
    })
})
//
router.get('/construction', function(req, res) {
    // var news = await News.find();
    var data = {
        logs: [],
        // 获取不到page时默认为打开在第一页
        page: Number(req.query.page || 1),
        limit: 6,
        pages: 1,
        count: 0
    }

construction.find({ head: '装修施工', }).then((logs) => {
        // data.logs = logs;
        // 获取读取内容的总记录
        return logs.length
    }).then((count) => {
        //为了方便,将总记录数存入data对象中
        data.count = count

        //计算总页数，向上取整数, 取最大值
        data.pages = Math.ceil(data.count / data.limit)
            // 页数取值不能超过总页数的值或小于1
            // Math.min(),Math.max()限制最小值最大值
        data.page = Math.min(data.page, data.pages) //2
        data.page = Math.max(data.page, 1) //2

        var skip = (data.page - 1) * data.limit

        return construction.find().limit(data.limit).skip(skip)
    }).then((logs) => {
        data.logs = logs
        res.render('design.html', {
            logs: data.logs,
            page: data.page,
            limit: data.limit,
            pages: data.pages,
            count: data.count,
        })
    })
})

//
router.get('/estate', function(req, res) {
    // var news = await News.find();
    var data = {
        logs: [],
        // 获取不到page时默认为打开在第一页
        page: Number(req.query.page || 1),
        limit: 6,
        pages: 1,
        count: 0
    }

estate.find({ head: '地产类', }).then((logs) => {
        // data.logs = logs;
        // 获取读取内容的总记录
        return logs.length
    }).then((count) => {
        //为了方便,将总记录数存入data对象中
        data.count = count

        //计算总页数，向上取整数, 取最大值
        data.pages = Math.ceil(data.count / data.limit)
            // 页数取值不能超过总页数的值或小于1
            // Math.min(),Math.max()限制最小值最大值
        data.page = Math.min(data.page, data.pages) //2
        data.page = Math.max(data.page, 1) //2

        var skip = (data.page - 1) * data.limit

        return  estate.find().limit(data.limit).skip(skip)
    }).then((logs) => {
        data.logs = logs
        res.render('design.html', {
            logs: data.logs,
            page: data.page,
            limit: data.limit,
            pages: data.pages,
            count: data.count,
        })
    })
})


//装修设计的二级页面
router.get('/views/', async(req, res) => {
    var result = await picture.find()
    console.log(result);
    res.render('secondpage1.html',{result : result})
})


// 办公类
router.get('/admin', function(req, res) {
    // var news = await News.find();
    var data = {
        logs: [],
        // 获取不到page时默认为打开在第一页
        page: Number(req.query.page || 1),
        limit: 5,
        pages: 1,
        count: 0
    }

    admin.find({ head: '行业动态', }).then((logs) => {
        // data.logs = logs;
        // 获取读取内容的总记录
        return logs.length
    }).then((count) => {
        //为了方便,将总记录数存入data对象中
        data.count = count

        //计算总页数，向上取整数, 取最大值
        data.pages = Math.ceil(data.count / data.limit)
            // 页数取值不能超过总页数的值或小于1
            // Math.min(),Math.max()限制最小值最大值
        data.page = Math.min(data.page, data.pages) //2
        data.page = Math.max(data.page, 1) //2

        var skip = (data.page - 1) * data.limit

        return admin.find({ head: '行业动态', }).limit(data.limit).skip(skip)
    }).then((logs) => {
        data.logs = logs
        res.render('admin.html', {
            logs: data.logs,
            page: data.page,
            limit: data.limit,
            pages: data.pages,
            count: data.count,

        })
    })
})
//软装服务
router.get('/service', async(req, res) => {
    var result = await service.find()
    res.render('service.html',{result : result})
})
//墙幕工程
router.get('/project', async(req, res) => {
    var result = await project.find()
    res.render('service.html',{result : result})
})
//软装服务和墙幕工程的二级页面处理
router.get('/secondlevel1', async(req, res) => {
    var result = await photo.find()
    res.render('secondpage2.html',{result : result})
})
router.get('/secondlevel2', async(req, res) => {
    var result = await phot.find()
    res.render('secondpage2.html',{result : result})
})
router.get('/secondlevel3', async(req, res) => {
    var result = await pho.find()
    res.render('secondpage2.html',{result : result})
})
//办公类的二级页面
router.get('/secondpage1', async(req, res) => {
    var result = await picture.find()
    console.log(result);
    res.render('secondpage1.html',{result : result})
})
//办公类的二级页面
router.get('/secondpage2', async(req, res) => {
    var result = await pict.find()
    res.render('secondpage1.html',{result : result})
 
})
//办公类的二级页面
router.get('/secondpage3', async(req, res) => {
    var result = await picture.find()
    res.render('secondpage1.html',{result : result})
})
//办公类的二级页面
router.get('/secondpage4', async(req, res) => {
    var result = await pict.find()
    res.render('secondpage1.html',{result : result})
})
//办公类的二级页面
router.get('/secondpage5', async(req, res) => {
    var result = await photo.find()
    res.render('secondpage1.html',{result : result})
})
//办公类的二级页面
router.get('/secondpage6', async(req, res) => {
    var result = await pict.find()
    res.render('secondpage1.html',{result : result})
})
// //软装服务和墙幕工程的二级页面
// router.get('/secondlevel', async(req, res) => {
//     var result = await photo.find()
//     res.render('secondpage2.html',{result : result})
// })
// //软装服务和墙幕工程的二级页面
// router.get('/secondlevel', async(req, res) => {
//     var result = await photo.find()
//     res.render('secondpage2.html',{result : result})
// })

// //软装服务和墙幕工程的二级页面
// router.get('/secondlevel1', async(req, res) => {
//     var result = await photo.find()
//     res.render('secondpage2.html',{result : result})
// })

// //软装服务和墙幕工程的二级页面
// router.get('/secondlevel2', async(req, res) => {
//     var result = await photo.find()
//     res.render('secondpage2.html',{result : result})
// })
//



module.exports = router