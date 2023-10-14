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

app.listen(3002, () => {
    console.log('Server is listening on port 3002...');
});
