function calculateAverage(grades) {
  if (!Array.isArray(grades) || grades.length === 0) {
    throw new Error("Grades must be a non-empty array");
  }

  for (const grade of grades) {
    if (typeof grade !== "number" || grade < 0 || grade > 100) {
      throw new Error("Each grade must be a number between 0 and 100");
    }
  }

  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

function getLetterGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}

function getPassStatus(avg) {
  return avg >= 60 ? "Pass" : "Fail";
}

module.exports = { calculateAverage, getLetterGrade, getPassStatus };