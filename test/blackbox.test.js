const { calculateAverage, getLetterGrade } = require("../app/gradeLogic");

test("BVA: lower valid boundary 0", () => {
  expect(calculateAverage([0, 0, 0])).toBe(0);
});

test("BVA: upper valid boundary 100", () => {
  expect(calculateAverage([100, 100, 100])).toBe(100);
});

test("BVA: just below invalid boundary -1", () => {
  expect(() => calculateAverage([-1, 50, 60])).toThrow();
});

test("BVA: just above invalid boundary 101", () => {
  expect(() => calculateAverage([101, 50, 60])).toThrow();
});

test("ECP: valid grades set gives correct letter", () => {
  expect(getLetterGrade(calculateAverage([90, 90, 90]))).toBe("A");
});

test("ECP: another valid class gives B", () => {
  expect(getLetterGrade(calculateAverage([80, 85, 89]))).toBe("B");
});

test("ECP: invalid empty grades array", () => {
  expect(() => calculateAverage([])).toThrow();
});

test("ECP: invalid data type", () => {
  expect(() => calculateAverage(["A", "B"])).toThrow();
});