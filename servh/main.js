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
app.get('/style.css',function(req,res){
	fs.readFile('./pages/style.css', function(err, contents) {
		res.send(contents);
		
	});
});
app.get('/register',function(req,res){
	
	fs.readFile('./pages/register_page.html', 'utf8', function(err, contents) {
		res.send(contents);
		
	});

	console.log('after calling readFile');
});

app.listen(3000,function() {
	console.log('start123');
});