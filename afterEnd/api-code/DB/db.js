//导入mysql
const mysql = require('mysql');
//调用方法 创建数据库
const db = mysql.createConnection({
    host: "101.43.15.245",
    user: "blog",
    password: "m3RkyPM3tyTjMLe6",
    database: "54520868",
    multipleStatements: true, // 支持执行多条 sql 语句
    useConnectionPooling: true
})


//将数据库共享出去使用
module.exports = db