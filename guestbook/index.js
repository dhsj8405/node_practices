const http = require('http');
const path = require('path');       //디렉토리관련된것들 
const express = require('express');

const guestbookRouter = require('./routes/guestbook');
const port = 8080;

// Application Setup
const application = express()
    //1. static resources
    .use(express.static(path.join(__dirname, 'public')))
    //2. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded
    .use(express.json())                      // application/json
    //3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    //4. request router 
    .all('*',function(req, res, next){      //필터비슷함 : 주로 인증에서 쓰임
        res.locals.req = req;
        res.locals.res = res;
        next(); //꼭해줘야 다음 라우터로 넘어감 
    })
    .use('/', guestbookRouter)
 

// Server Setup
http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port}`)
    })
    .on('error', function(error){
        switch(error.code){
            case 'EACCESS':
                console.error(`${port} requires privileges`);
                process.exit(1);        //1: 비정상종료일때, 0: 정상종료
                break;
            case 'EADDRINUSE':
                console.error(`${port} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    })
    .listen(port);