const gradeToLetter = require("./gradeToLetter");

describe("calculateGrade", () => {
  test("should return 'A' for a score of 95", () => {
    expect(gradeToLetter(95)).toBe("A");
  });

  test("should return 'A' for a score of 90", () => {
    expect(gradeToLetter(90)).toBe("A");
  });

  test("input is not a number", () => {
    expect(gradeToLetter("not a number")).toBe("Invalid input. Please provide a valid number.");
  });

  // My test cases:

  //  equality / inequality related test cases

  test("should return 'B' for a score of 89", () => {
    expect(gradeToLetter(89)).toBe("B");
  });

  test("should return 'C' for a score of 70", () => {
    expect(gradeToLetter(70)).toBe("C");
  });

  test("should return 'F' for a score of 59", () => {
    expect(gradeToLetter(59)).toBe("F");
  });

  test("should return 'D' for exactly 60", () => {
    expect(gradeToLetter(60)).toBe("D");
  });
  
  test("should return 'B' for exactly 80", () => {
    expect(gradeToLetter(80)).toBe("B");
  });

  // 1 invalid input test case

  test("should return 'Invalid input' for null", () => {
    expect(gradeToLetter(null)).toBe("Invalid input. Please provide a valid number.");
  });

  test("error for grade > 100", () => {
    expect(gradeToLetter(101)).toBe("Score must be between 0 and 100.");
  });
  
  test("should return error for score < 0", () => {
    expect(gradeToLetter(-5)).toBe("Score must be between 0 and 100.");
  });

  test("should return 'F' for score == 0", () => {
    expect(gradeToLetter(0)).toBe("F");
  });

  test("should return 'A' for score == 100", () => {
    expect(gradeToLetter(100)).toBe("A");
  });
  

  // uncovered condition

  test("should return 'B+' when remainder is exactly 7", () => {
    expect(gradeToLetter(87, { usePlusMinus: true })).toBe("B+");
  });

  test("should return 'C-' when remainder is exactly 2", () => {
    expect(gradeToLetter(72, { usePlusMinus: true })).toBe("C-");
  });

  test("should return 'D+' when usePlusMinus is true and remainder >= 7", () => {
    expect(gradeToLetter(67, { usePlusMinus: true })).toBe("D+");
  });

  test("should return 'B-' when remainder <= 2", () => {
    expect(gradeToLetter(82, { usePlusMinus: true })).toBe("B-");
  });

  test("should not add '-' to an A grade", () => {
    expect(gradeToLetter(92, { usePlusMinus: true })).toBe("A");
  });

  test("should not apply plus/minus when false", () => {
    expect(gradeToLetter(87, { usePlusMinus: false })).toBe("B");
  });

  test("should not assign '-' when remainder is greater than 2", () => {
    expect(gradeToLetter(85, { usePlusMinus: true })).toBe("B");
  });

  test("should round score when round option is true", () => {
    expect(gradeToLetter(89.6, { round: true })).toBe("A");
  });

  test("should not round score when round option is false", () => {
    expect(gradeToLetter(79.6, { round: false })).toBe("C");
  });

  test("should not assign plus/minus to F grade", () => {
    expect(gradeToLetter(58, { usePlusMinus: true })).toBe("F");
  });

  test("should not round by default", () => {
    expect(gradeToLetter(89.6)).toBe("B");
  });
});