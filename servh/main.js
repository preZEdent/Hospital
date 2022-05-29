const express = require('express');
const mysql2 = require('mysql2/promise');
var fs = require('fs');

const pool=mysql2.createPool({
	host:'localhost',
	user:'root',
	database:'users',
	password:'',
});

const app = express();

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/pages'));


app.get('/register',function(req,res){
	
	fs.readFile('./pages/register_page.html', 'utf8', function(err, contents) {
		res.send(contents);                                                                                                                                                                              
	});
});

app.post('/reg',function(req,res){
	console.log(req.body);
	const {polis,password1}= req.body;
	if((req.body.password1 == req.body.password2)&&(req.body.password1.length !=0 )&&(req.body.password2.length !=0))
	{	
		pool.query('INSERT INTO patient SET ?', {
			id_patient:polis, 
			password:password1,
		});
		
		fs.readFile('./pages/authorization_page.html', 'utf8', function(err, contents) {
			res.send(contents);                                                                                                                                                                              
		});
		
	}else{
		res.send("пароли не совпадают");

	}
});

app.listen(3000,function() {
	console.log('start123');
});