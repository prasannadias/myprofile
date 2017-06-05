var express= require('express');
var reload= require('reload');
var app=express();

app.set('port',process.env.Port||3000);
app.set('view engine','ejs');
app.set('views','app/views');

app.locals.siteTitle='Prasanna Dias Profile';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/skills'));
app.use(require('./routes/contact'));
app.use(require('./routes/projects'));

var server=app.listen(app.get('port'),function(){
	console.log("Listening on port "+app.get('port'));
});

reload(server,app);