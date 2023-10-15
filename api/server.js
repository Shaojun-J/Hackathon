const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 9000;

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello!",
  });
});

app.post("/data", (req, res) => {
  const receivedData = req.body;
  // process data and prepare report
  const report = {
    "safe-rating": "Low Risk",
    "assessment": "Your post has been rated as low risk, but there are aspects that could be leveraged for cyberattacks.",
    "recommendation": "Generalize Time References"
  }
  res.json({
    message: "Data received!",
    data: { ...receivedData, ...report },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
