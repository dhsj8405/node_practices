const model = require('../models/emaillist');

module.exports ={
    index: function(req,res){
        const results = model.findAll(function(){});
        console.log(results);
        res.render('index', {
            
            list:results || []
       });
    }
}