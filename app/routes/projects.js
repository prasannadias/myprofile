
var express= require('express');
var router= express.Router();

router.get('/projects',function(req,res){
	res.render('projects',{
		pageTitle:'Projects',
		pageID:'projects'	
	});
});

router.get('/projects/:projectid',function(req,res){
	
	var data = req.app.get('appData');
	var pagePhotos=[];
	var pageSpeakers= [];

	data.speakers.forEach(function(item){
		if (item.shortname == req.params.speakerid){
		pageSpeakers.push(item);
		pagePhotos=pagePhotos.concat(item.artwork);
		}
		
	});
	res.render('speakers',{
		pageTitle:'Speakers Info',
		artwork:pagePhotos,
		speakers:pageSpeakers,
		pageID:'speakerDetail'
	});
});

module.exports=router;