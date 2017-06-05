
var express= require('express');
var router= express.Router();

router.get('/skills',function(req,res){
	res.render('skills',{
		pageTitle:'Skills',
		pageID:'skills'	
	});
});

module.exports=router;