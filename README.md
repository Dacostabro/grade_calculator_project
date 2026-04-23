# Grade Calculator Project

## Overview
This project is a mini web application that calculates the average grade, letter grade, and pass/fail status for a student.

## Features
- Input grades
- Calculate average
- Assign letter grade
- Determine pass/fail
- Input validation
- Automated testing through GitHub Actions

## How to Run
1. npm install
2. npm start
3. Open http://localhost:3000

## How to Test
npm test

## CI/CD
GitHub Actions automatically runs tests on push and pull requests.

## Deployment
Live application link: [your deployed link here]

# Data Model and Schema

## Entity: GradeSubmission
Represents a group of grades entered by the user.

### Attributes
- studentName: string (optional)
- grades: array<number>
- average: number
- letterGrade: string
- passStatus: string

## Relationships
- One GradeSubmission contains multiple grade values
- One GradeSubmission produces one average, one letter grade, and one pass/fail result

## Input Format
{
  "grades": [85, 90, 78]
}

## Output Format
{
  "average": 84.33,
  "letterGrade": "B",
  "passStatus": "Pass"
}