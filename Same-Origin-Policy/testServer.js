const express = require('express');
const { request, response } = require('express');

const app = express();

app.get('/home',(request, response)=>{
    //响应页面路径，打开127.0.0.1:9000/home
    response.sendFile(__dirname + '/1test.html');
});
app.get('/data',(request, response)=>{
    response.send('用户数据');
});

app.listen(9000,()=>{
    console.log('服务已经启动...');
});