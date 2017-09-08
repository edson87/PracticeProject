const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: './temp'});
const fs = require('fs');


const db = mysql.createConnection({
    host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'website'
});

db.connect((err) => {
  if(err) {
    throw err;
  }   
  console.log('MySQL Connected');     
});


const app = express();
app.use(bodyParser.json()); 


 app.get("/createdb", (req, res) => {
	let sql = "CREATE DATABASE website";
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Database created...!')
	});
}); 
 
//creating table detail
/*app.post("/tableRequeriments", (req, res) => {
	let sql = "CREATE TABLE requeriments(id int AUTO_INCREMENT, title VARCHAR(100), postulation VARCHAR(100), location VARCHAR(100), time VARCHAR(100), detail VARCHAR(500), PRIMARY KEY (id))";
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Table created...!')
	});
});*/

//adding data table requeriments
app.post("/requeriment", (req, res) => {
	//console.log(req.body);
	let post = {title: req.body.title, postulation: req.body.postulation, location: req.body.location, time: req.body.time, detail: req.body.detail};
	let sql = 'INSERT INTO requeriments SET ?';
	let query = db.query(sql, post, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('The requeriments was added ...!');
	})
});

//Creating table ApplyForm
/*app.post("/tableApplications", (req, res) => {
	let sql = "CREATE TABLE applications(id int AUTO_INCREMENT, username VARCHAR(100), lastname VARCHAR(100), telephone VARCHAR(100), requeriment VARCHAR(100), email VARCHAR(500), filename VARCHAR(200), PRIMARY KEY (id))";
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Table created...!')
	});
});*/

//adding datas table applications
app.post("/application", (req, res) => {
	//console.log(req.body);
	let post = {username: req.body.username, lastname: req.body.lastname, telephone: req.body.telephone, requeriment: req.body.requeriment, email: req.body.email, filename: req.body.filename};
	let sql = 'INSERT INTO applications SET ?';
	let query = db.query(sql, post, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('The applications was added ...!');
	})
});


//Select all from detail table
app.get("/requeriments", (req, res) => {
	let sql = 'SELECT * FROM requeriments';
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send(result);
	})	
});

//Select by id from detail table
app.get("/requeriment/:id", (req, res) => {
	let sql = `SELECT * FROM detail WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Post fetch....!');
	})	
});

//Update detail table
app.get("/requeriment/:id", (req, res) => {
	let newTitle = 'Updated Title'
	let sql =  `UPDATE detail SET title = '${newTitle}' WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Detail Updated.....!');
	})	
});

//Upload File
app.post('/uploadFiles', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any   
   console.log(req.file.originalname);
   console.log(req.file.filename);
   fs.createReadStream('./temp/'+req.file.filename).pipe(fs.createWriteStream('./upload/'+req.file.originalname)); 
       //borramos el archivo temporal creado
   fs.unlink('./temp/'+req.file.filename); 
    res.send('Sending'); 
})

//Delete detail
app.post("/requeriment/:id", (req, res) => {
	//console.log(req.body);
	let id = req.params.id;
	console.log(id);
	let sql =  `DELETE FROM requeriments WHERE id = ${id}`;
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('requeriments deleted...!');
	})	
});


app.listen('3000', () => {
    console.log('The server is running on port 3000');
});

