const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const report1 = require('./mock_data/report1.json')
const reports = require('./mock_data/reports.json')


let dataRouter = require("./routes/data");

app.use(bodyParser.json());
app.use(cors());

const PORT = 9000;
app.use("/data", dataRouter);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
