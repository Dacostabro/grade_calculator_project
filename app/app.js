const express = require("express");
const path = require("path");
const { calculateAverage, getLetterGrade, getPassStatus } = require("./gradeLogic");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post("/calculate", (req, res) => {
  try {
    const { grades } = req.body;
    const average = calculateAverage(grades);
    const letterGrade = getLetterGrade(average);
    const passStatus = getPassStatus(average);

    res.json({ average, letterGrade, passStatus });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});