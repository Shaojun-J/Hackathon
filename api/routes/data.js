var express = require("express");
var router = express.Router();

const reports = require("../mock_data/reports.json");

router.post("/", (req, res) => {
  const receivedData = req.body;
  //console.log(receivedData);
  let report = reports[0];
  if (receivedData.post.search("Chuck E. Cheese's") > -1) {
    report = reports[0];
  } else if (receivedData.post.search("XYZ Corporation") > -1) {
    report = reports[1];
  } else if (receivedData.post.search("Elm Street") > -1) {
    report = reports[2];
  } else {
    report = reports[Math.floor(Math.random() * reports.length)];
  }
  res.json({
    message: "Data received!",
    data: { ...receivedData, ...report },
  });
});

module.exports = router;
