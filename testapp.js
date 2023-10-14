const express = require('express'); //import express module
// const path = require('path'); //import path module


const app = express(); //create an express app

app.set('view engine', 'ejs'); //set view engine to ejs
//app.set("views", "otherDir"); //set views directory to otherDir,if not set then default views directory will be /views

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html', { root: __dirname });

    
    const blogs = [
        {title: "Blog 1", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "Blog 2", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "Blog 3", snippet: "Lorem ipsum dolor sit amet consectetur"},
    ];

     res.render('index', { title: 'Homepage', blogs }); //title is a variable that can be used in index.ejs
});

app.get('/about', (req, res) => {
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    const blogs = [
        {title: "Blog 1", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "Blog 2", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "Blog 3", snippet: "Lorem ipsum dolor sit amet consectetur"},
    ];
    res.render('about',blogs);
});

app.use((req, res) => {
    // res.status(404).sendfile('./views/404.html', { root: __dirname });
    res.status(404).render('404');
});


//get current time in milliseconds
const start = Date.now();
console.log(start.toString());


// sha256 hash
const { createHash } = require('crypto');
function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}
console.log(hash('foo'));

//connect to postgresql
const dotenv= require('dotenv').config();
console.log("PG_HOST:", process.env.PG_HOST);
console.log("PG_USER:", process.env.PG_USER);
const { Client } = require('pg')
const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
})
client.connect(function(err) {
  if (err){
        console.error('connection error', err.stack);
        throw err;
  } 
  console.log("Connected!!");
});

//insert data into postgresql
// function insert(table, user_name, , value){
//     var query = "INSERT INTO "+ table +" ("+ pkey +", "+ field +") VALUES ('"+ value +"')"
//     client.query(query, (err, res) => {
//   console.log(err, res)
//   client.end()
// })

var query = Client.query("SELECT id from user where name = 'user1'");
query.on("row", function(row,result){
    console.log(row);
    result.addRow(row);
    
    });

query.on("end", function(result){   
    console.log(JSON.stringify(result.rows, null, " 123   ")); 
    client.end(); 
    });
    

app.listen(3002, () => {
    console.log('Server is listening on port 3002...');
});
