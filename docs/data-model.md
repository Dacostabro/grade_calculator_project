# Data Model and Schema

## Overview
This document describes the data model and schema used in the Grade Calculator application.

The application processes a set of numeric grades and produces calculated results including average, letter grade, and pass/fail status.

---

## Entity: GradeSubmission

The main entity in this application is a **GradeSubmission**, which represents a collection of grades entered by a user.

### Attributes

| Attribute | Type | Description |
|----------|------|-------------|
| grades | Array<Number> | List of numeric grades |
| average | Number | Calculated average of grades |
| letterGrade | String | Final letter grade (A–F) |
| passStatus | String | Pass or Fail result |

---

## Input Format

The application accepts input in JSON format:

```json
{
  "grades": [85, 90, 78]
}