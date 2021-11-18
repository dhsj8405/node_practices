//const errorRoute = require('./error');

const applicationRouter = {
    setup: function(application){

        // const site = models.Site.findOne();

        application
            .all('*',function(req, res, next){      //필터비슷함 : 주로 인증에서 쓰임
                res.locals.req = req;
                res.locals.res = res;
                next(); //꼭해줘야 다음 라우터로 넘어감 
            })

        .use('/', require('./main'))
        .use('/user', require('./user'))
        
        //.use(errorRoute.error404)
        //.use(errorRoute.error500)
        .siteTitle = 'Mysite';
    }
}

module.exports = { applicationRouter }
