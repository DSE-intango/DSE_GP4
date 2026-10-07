# JavaScript Marks Analysis

## 📌 Project Description

This project is a JavaScript program that analyses a list of student marks and generates a marks report.

The program calculates:

- Total marks
- Number of marks
- Average mark
- Highest mark
- Lowest mark
- Number of students who passed
- Number of students who failed
- Pass rate
- Overall status
- Overall grade

The program also validates each mark to make sure it is a number between **0 and 100**.

### Example Input

```javascript
const marks = [78, 45, 90, 62, 50, 0, 100, 33];
```

### Example Output

```text
===== MARKS REPORT =====
Total: 458
Count: 8
Average: 57.25
Highest: 100
Lowest: 0
Passed: 5
Failed: 3
Pass rate: 62.50%
Status: Target met
Grade: C
```

---

## 🛠️ Technologies Used

- JavaScript
- Node.js
- Git
- GitHub

---

## 📁 Project Structure

```text
marks-analysis/
│
├── marks.js
├── test/
│   └── marks.test.js
├── package.json
├── package-lock.json
└── README.md
```

> The file names may be different depending on how your team organized the project.

---

## ⚙️ Installation

### 1. Clone the repository

Open your terminal and run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Then enter the project directory:

```bash
cd marks-analysis
```

### 2. Install dependencies

Run:

```bash
npm install
```

This installs all dependencies listed in `package.json`.

---

## ▶️ How to Run the Project

Make sure Node.js is installed on your computer.

You can check it with:

```bash
node --version
```

Then run the JavaScript program:

```bash
node marks.js
```

The program will process the marks and display the marks report in the terminal.

---

## 🧪 Running the Tests

The project uses automated tests to verify that the marks analysis function works correctly.

First install the project dependencies:

```bash
npm install
```

Then run:

```bash
npm test
```

The tests should verify important cases such as:

- Correct calculation of the total
- Correct calculation of the average
- Correct highest and lowest marks
- Correct pass/fail count
- Correct pass rate
- Correct grade
- Empty marks array
- Invalid marks
- Marks outside the range of 0–100

### Example

```bash
npm test
```

Expected result:

```text
Tests passed
```

---

## 📊 How the Analysis Works

The main function is:

```javascript
analyseMarks(marks, passMark = 50)
```

### Parameters

- `marks` — an array containing student marks.
- `passMark` — the minimum mark required to pass. The default is `50`.

For example:

```javascript
analyseMarks([78, 45, 90, 62, 50]);
```

The function returns an object containing the complete analysis.

---

## 🎓 Grading System

The program assigns grades based on the average mark:

| Average | Grade |
|---:|:---:|
| 80–100 | A |
| 60–79.99 | B |
| 50–59.99 | C |
| Below 50 | D |

The program also determines the status:

- **Target met** — when the average is at least the pass mark.
- **Needs support** — when the average is below the pass mark.

---

## ✅ Input Validation

Every mark is checked before it is processed.

A valid mark must:

- Be a number
- Be at least `0`
- Be at most `100`

For example:

```javascript
[78, 45, 90]
```

is valid.

But:

```javascript
[78, -10, 90]
```

is invalid because `-10` is below `0`.

Similarly:

```javascript
[78, 105, 90]
```

is invalid because `105` is above `100`.

If an invalid mark is found, the function returns an error message.

---

## 👥 Team Members and Roles

| Team Member | Role | Responsibilities |
|---|---|---|
| **[Member 1 Name]** | JavaScript Developer | Developed the `analyseMarks()` function and calculations |
| **[Member 2 Name]** | Testing / QA | Created and ran tests and checked input validation |
| **[Member 3 Name]** | Documentation / GitHub | Maintained the README and managed the GitHub repository |

> Replace the names and roles with your actual team members.

---

## 🌿 Git and GitHub Workflow

Team members should use branches when working on the project.

Example:

```bash
git checkout -b feature/marks-analysis
```

After making changes:

```bash
git add .
git commit -m "Add marks analysis function"
git push origin feature/marks-analysis
```

Then create a Pull Request on GitHub for the team to review.

---

## 📄 License

This project was created as part of a JavaScript and Git/GitHub practical assignment.