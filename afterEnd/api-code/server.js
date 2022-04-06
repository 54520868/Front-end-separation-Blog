const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();
const post = 7100;
//导入数据库
const db = require('./DB/db.js')
//挂载渲染页面文件
app.use(express.static(path.join(__dirname, '')))
//渲染body数据
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//模拟表单传输数据
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    next();
})
//将cors 跨域设置为全局中间件
app.use(cors());
//监听数据库是否链接成功
// db.connect(function (err) {
//     // 当数据库信息错误时 连接不成功，则会抛出错误
//     if (err) {
//         console.error("数据库连接失败，请重试");
//     } else {
//         // 如没有抛出错误，则代表连接成功
//         console.log("数据库连接成功！");
//     }
// })

//导入解析token的中间件
const expressJWT = require('express-jwt')
//导入秘钥
const Retail= require('./Retail.js')
// app.use(expressJWT({secret:Retail.jwtSecretKey,algorithms:['HS256']}))

//导入用户模块
const user = require('../api-code/visitRouter/user.js')
app.use(user)

//导入文章模块
const active = require('../api-code/visitRouter/avtive.js')
app.use(active)

//导入用户信息处理模块
const users = require('../api-code/visitRouter/userinfo.js')
app.use(users)

//导入商品处理模块
const goods =  require('../api-code/visitRouter/goods.js')
app.use(goods)

//导入汽车信息管理模块
const cars = require('../api-code/visitRouter/cars.js')
app.use(cars)

//捕获认证失败
// app.use(function(err, req, res, next) {
//     //UnauthorizedError token错误对象
//     console.log(err.name); 
//     if(err.name === 'UnauthorizedError') {
//         res.json({
//             code:401,
//             message: 'UnauthorizedError'
//         })
//     }
// })


app.listen(post, () => {
    console.log(`Port The port number is:${post}`);
})