var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/", (req, res) => {
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

module.exports = router;
