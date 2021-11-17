const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
  
    // 4. request router 
   .all('*',function(req, res, next){      //필터비슷함 : 주로 인증에서 쓰임
    res.locals.req = req;
    res.locals.res = res;
    next(); //꼭해줘야 다음 라우터로 넘어감 
})

//.use('/', mainRouter)
//.use('/user', userRouter);