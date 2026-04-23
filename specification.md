# Grade Calculator Specification

## Inputs
- studentName: string
- grades: array of numbers from 0 to 100

## Outputs
- average: number
- letterGrade: A, B, C, D, or F
- passStatus: Pass or Fail

## Rules
- Average is the sum of grades divided by number of grades
- A = 90-100
- B = 80-89
- C = 70-79
- D = 60-69
- F = below 60
- Invalid input if:
  - grades array is empty
  - any grade is below 0
  - any grade is above 100