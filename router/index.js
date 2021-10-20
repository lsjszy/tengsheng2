const express = require('express')
const router = express.Router()
const News = require("../models/news");
const Actives = require("../models/active");
const Imgs = require("../models/img");
const Logs = require("../models/logs");
const { formatArrayToObj } = require("../tools/index");



router.get('/care/:id', async(req, res) => {
    var id = req.params["id"];
    var active = await Actives.find({
        nid: id,
    });
    var img = await Imgs.find({
        nid: id,
    });
    console.log(id);
    var actives = active[0];
    var imgs = img[0];
    console.log(imgs);
    console.log(actives);
    res.render('care.html', { actives, imgs })
})


router.get('/han', function(req, res) {
    // var news = await News.find();
    var data = {
        logs: [],
        // 获取不到page时默认为打开在第一页
        page: Number(req.query.page || 1),
        limit: 4,
        pages: 1,
        count: 0
    }

    News.find({ head: '行业动态', }).then((logs) => {
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

        return News.find({ head: '行业动态', }).limit(data.limit).skip(skip)
    }).then((logs) => {
        data.logs = logs

        console.log(data)
            /**最后渲染 */
        res.render('news.html', {
            logs: data.logs,
            page: data.page,
            limit: data.limit,
            pages: data.pages,
            count: data.count,

        })
    })
})


router.get('/news', function(req, res) {
    // var news = await News.find();
    var data = {
        logs: [],
        // 获取不到page时默认为打开在第一页
        page: Number(req.query.page || 1),
        limit: 4,
        pages: 1,
        count: 0
    }

    News.find().then((logs) => {
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

        return News.find().limit(data.limit).skip(skip)
    }).then((logs) => {
        data.logs = logs

        console.log(data)
            /**最后渲染 */
        res.render('news.html', {
            logs: data.logs,
            page: data.page,
            limit: data.limit,
            pages: data.pages,
            count: data.count,
        })
    })
})




router.get('/mei', function(req, res) {
    // var news = await News.find();
    var data = {
        logs: [],
        // 获取不到page时默认为打开在第一页
        page: Number(req.query.page || 1),
        limit: 4,
        pages: 1,
        count: 0
    }

    News.find({ head: '媒体报道', }).then((logs) => {
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

        return News.find({ head: '媒体报道', }).limit(data.limit).skip(skip)
    }).then((logs) => {
        data.logs = logs

        console.log(data)
            /**最后渲染 */
        res.render('news.html', {
            logs: data.logs,
            page: data.page,
            limit: data.limit,
            pages: data.pages,
            count: data.count,

        })
    })
})

module.exports = router;