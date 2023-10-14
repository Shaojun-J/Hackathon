var express = require('express');
var app = express();
app.set('view engine', 'ejs');

//app.use('/public', express.static('public'));
app.use(express.static('public'));

//Home page
app.get('/', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });

    res.render('index', { title: 'Homepage' });
});

//test    
app.get('/test.html', function (req, res) {
    res.sendFile('./views/test.html', { root: __dirname });
})


app.get('/process_get', function (req, res) {
    console.log("process_get receiving");
    console.log("req.query:", req.query);

    // Prepare output in JSON format
    var response = {
        "last_name": req.query.last_name,
        "first_name": req.query.first_name,
        "id": req.query.id
    };
    console.log("res:", response);

    res.end(JSON.stringify(response));

})

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/process_post', function (req, res) {
    console.log("process_post receiving data ....");
    console.log('body is: ', req.body);

    var response = {
        "last_name": req.body.last_name,
        "first_name": req.body.first_name,
        "id": req.body.id
    };

    //Todo:

    console.log("res:", response);
    res.end(JSON.stringify(response));
});


app.use((req, res) => {
    // res.status(404).sendfile('./views/404.html', { root: __dirname });
    res.status(404).render('404');
});


app.listen(5002, () => {
    console.log('Server is listening on port 5002...');
});

