const express = require('express');
const mysql2 = require('mysql2/promise');


const pool=mysql2.createPool({
	host:'localhost',
	user:'root',
	database:'users',
	password:'',
});

const app = express();
app.get('/',function(req,res){
	pool.query('SELECT * FROM patient').then(function(data) {
		const patient= data[0];
		res.send(`<DOCTYPE html>
		<html>
			<body>
				<ul>
					${patient.map(patien => `<li>${patien.id_patient}</li>`).join('')}
				</ul>
			</body>
		</html>`);
	});

});
app.listen(3000,function() {
	console.log('start123');
});