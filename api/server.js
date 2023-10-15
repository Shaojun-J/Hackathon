const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const report1 = require('./mock_data/report1.json')

app.use(bodyParser.json());
app.use(cors());

const PORT = 9000;

app.post("/data", (req, res) => {
  const receivedData = req.body;
  // process data and prepare report
  const report = report1;

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
