const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const report1 = require('./mock_data/report1.json')
const reports = require('./mock_data/reports.json')

app.use(bodyParser.json());
app.use(cors());

const PORT = 9000;

app.post("/data", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
