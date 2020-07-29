//1.引入Express
const express = require('express');
const { request, response } = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('Hello,Ajax');
});
app.post('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('Hello,Ajax');
});
app.all('/json-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应数据
    const data = {
        name: 'ZHU',
        age: '28'
    };
    //把对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});
//针对IE缓存
app.get('/ie',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO IE');
});
//延迟响应
app.get('/timeout',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        //设置响应体
        response.send('延迟响应');
    },3000)
});
//jQuery响应
app.all('/jquerySer', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    const data = {name: '尚硅谷Ajax'};
    response.send(JSON.stringify(data));
});
//axios
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data = {name: '尚硅谷Ajax'};
    response.send(JSON.stringify(data));
});
//fetch
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data = {name: '尚硅谷Ajax'};
    response.send(JSON.stringify(data));
});
//jsonp服务
app.all('/jsonp-server',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {
        name: '尚硅谷',
        level: 9
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})
//jsonp例子，检测用户名是否存在
app.all('/check-username',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})
//使用jquery发送jsonp请求
app.all('/jquery-jsonp-server',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {
        name: '请输入正确用户名',
        city: ['北京','上海','南京']
    }
    let str = JSON.stringify(data);
    //接收callback参数
    let cb = request.query.callback;
    response.end(`${cb}(${str})`);
})
//4.监听端口
app.listen(8000,()=>{
    console.log("服务已经启动，端口为8000~~~")
})

/*
    nodemon:自动化构建node
    安装： npm --save-dev nodemon
    启动： npx nodemon 文件名

*/