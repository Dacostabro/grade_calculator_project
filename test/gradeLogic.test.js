const { calculateAverage, getLetterGrade, getPassStatus } = require("../app/gradeLogic");

test("calculates average correctly", () => {
  expect(calculateAverage([80, 90, 100])).toBe(90);
});

test("returns A for 95", () => {
  expect(getLetterGrade(95)).toBe("A");
});

test("returns B for 85", () => {
  expect(getLetterGrade(85)).toBe("B");
});

test("returns C for 75", () => {
  expect(getLetterGrade(75)).toBe("C");
});

test("returns D for 65", () => {
  expect(getLetterGrade(65)).toBe("D");
});

test("returns F for 40", () => {
  expect(getLetterGrade(40)).toBe("F");
});

test("returns Pass for 60", () => {
  expect(getPassStatus(60)).toBe("Pass");
});

test("returns Fail for 59", () => {
  expect(getPassStatus(59)).toBe("Fail");
});

test("throws error for empty array", () => {
  expect(() => calculateAverage([])).toThrow();
});

test("throws error for grade above 100", () => {
  expect(() => calculateAverage([95, 101])).toThrow();
});

test("throws error for grade below 0", () => {
  expect(() => calculateAverage([95, -1])).toThrow();
});