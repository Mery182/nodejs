// 'use strict';

// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.end('hello world!!!');

// });
// server.listen(8080, () => {
//     console.log('Сервер запущен на 8080 порту'); // это callback функция
// });
// const http = require('http');
// http.createServer((request,response)=>{
//     response.end('hello')}).listen(8080, '127.0.0.1', function(){
// console.log('Прослушиваю!');
//     })
const http = require('http');
    http.createServer((req,res) => {
       // console.log(req.method);
        console.log(req.url);
        console.log(req.httpVersion);
        console.log(req.headers);
        if(req.method == 'GET' && req.url == '/'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(`<html><body><h2>Привет!</h2></body></html>`);
            res.end();
        }
    }).listen(8080);
  