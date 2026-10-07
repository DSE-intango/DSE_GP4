const marks = [78, 45, 90, 62, 50, 0, 100, 33];

function analyseMarks(marks, passMark = 50) {

    // empty array
    if (marks.length === 0) {
        return {
            message: "No marks provided"
        };
    }

    let total = 0;
    let highest = marks[0];
    let lowest = marks[0];
    let passed = 0;
    let failed = 0;

    // Process every mark
    for (let mark of marks) {

        // Validate mark
        if (typeof mark !== "number" || mark < 0 || mark > 100) {
            return {
                message: "Invalid mark : " + mark
            };
        }

        // Total
        total = total + mark;

        // Highest
        if (mark > highest) {
            highest = mark;
        }

        // Lowest
        if (mark < lowest) {
            lowest = mark;
        }

        // Pass / fail
        if (mark >= passMark) {
            passed++;
        } else {
            failed++;
        }
    }

    // Average
    let average = total / marks.length;

    // Pass rate
    let passRate = (passed / marks.length) * 100;

    // Status
    let status;

    if (average >= passMark) {
        status = "Target met";
    } else {
        status = "Needs support";
    }

    // Grade
   // Grade
let grade;

switch (true) {
    case average >= 80:
        grade = "A";
        break;

    case average >= 60:
        grade = "B";
        break;

    case average >= 50:
        grade = "C";
        break;

    default:
        grade = "D";
}
    return {
        total: total,
        count: marks.length,
        average: average,
        highest: highest,
        lowest: lowest,
        passed: passed,
        failed: failed,
        passRate: passRate,
        status: status,
        grade: grade
    };
}

const report = analyseMarks(marks);

console.log("===== MARKS REPORT =====");
console.log("Total: " + report.total);
console.log("Count: " + report.count);
console.log("Average: " + report.average.toFixed(2));
console.log("Highest: " + report.highest);
console.log("Lowest: " + report.lowest);
console.log("Passed: " + report.passed);
console.log("Failed: " + report.failed);
console.log("Pass rate: " + report.passRate.toFixed(2) + "%");
console.log("Status: " + report.status);
console.log("Grade: " + report.grade);