# CI/CD Pipeline

## Overview
This project implements a **CI/CD (Continuous Integration and Continuous Deployment) pipeline** to automate testing and deployment of the Grade Calculator application.

The pipeline ensures that:
- code is automatically tested on every change
- errors are caught early
- the latest version of the application can be deployed consistently

---

## Continuous Integration (CI)

Continuous Integration is implemented using **GitHub Actions**.

### When does it run?
The pipeline runs automatically when:
- code is pushed to the `main` branch
- a pull request is created or updated

### What does it do?

The CI pipeline performs the following steps:

1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies using `npm install`
4. Runs all tests using `npm test`

### Workflow File Location

The CI configuration is stored in:

```text
.github/workflows/ci.yml