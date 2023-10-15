var express = require('express');
var router = express.Router();

const reports = require('../mock_data/reports.json')

router.post("/", (req, res) => {
    const receivedData = req.body;   
    //console.log(receivedData);
    let index = Math.floor(Math.random() * reports.length);
    const report = reports[index];
    res.json(
        {
            message: "Data received!",
            data: { ...receivedData, ...report },
        }
    );
});

module.exports = router;
