const model = require('../models/guestbook');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll(function(){});        
        res.render('index', {
            list: results || []
        });
    },
    deleteform: function(req,res){
        const data = {
            no: req.query.no || ''
        };
    
         res.render('deleteform', data);
    },
    delete: async function(req,res){
           console.log(req.body);
           const result = await model.delete(req.body);
           res.redirect("/");    
        },
    add: async function(req,res){
        console.log(req.body);
        const result = await model.insert(req.body);
        res.redirect("/");
    }
}
