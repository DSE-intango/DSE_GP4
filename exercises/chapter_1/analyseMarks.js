import test from "node:test";
import assert from "node:assert";


// ==========================================
// MARKS CALCULATION FUNCTION
// ==========================================

const marks = [78, 45, 90, 62, 50, 0, 100, 33];

function analyseMarks(marks, passMark = 50) {

    // Check empty array
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
        if (
            typeof mark !== "number" ||
            mark < 0 ||
            mark > 100
        ) {
            return {
                message: "Invalid mark : " + mark
            };
        }

        // Calculate total
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


// ==========================================
// NORMAL MARKS REPORT
// ==========================================

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


// ==========================================
// AUTOMATED TESTS
// ==========================================


// TEST 1: Normal marks
test("should calculate normal marks correctly", () => {

    const result = analyseMarks([70, 80, 90]);

    assert.strictEqual(result.total, 240);
    assert.strictEqual(result.count, 3);
    assert.strictEqual(result.average, 80);
    assert.strictEqual(result.highest, 90);
    assert.strictEqual(result.lowest, 70);
    assert.strictEqual(result.passed, 3);
    assert.strictEqual(result.failed, 0);
    assert.strictEqual(result.grade, "A");
});


// TEST 2: Boundary mark 0
test("should handle boundary mark 0", () => {

    const result = analyseMarks([0]);

    assert.strictEqual(result.total, 0);
    assert.strictEqual(result.average, 0);
    assert.strictEqual(result.highest, 0);
    assert.strictEqual(result.lowest, 0);
    assert.strictEqual(result.passed, 0);
    assert.strictEqual(result.failed, 1);
    assert.strictEqual(result.passRate, 0);
    assert.strictEqual(result.grade, "D");
});


// TEST 3: Boundary mark 100
test("should handle boundary mark 100", () => {

    const result = analyseMarks([100]);

    assert.strictEqual(result.total, 100);
    assert.strictEqual(result.average, 100);
    assert.strictEqual(result.highest, 100);
    assert.strictEqual(result.lowest, 100);
    assert.strictEqual(result.passed, 1);
    assert.strictEqual(result.failed, 0);
    assert.strictEqual(result.passRate, 100);
    assert.strictEqual(result.status, "Target met");
    assert.strictEqual(result.grade, "A");
});


// TEST 4: Invalid input
test("should reject invalid marks", () => {

    const result = analyseMarks([70, 120, 80]);

    assert.strictEqual(
        result.message,
        "Invalid mark : 120"
    );
});


// TEST 5: Pass and fail calculation
test("should calculate passed and failed marks correctly", () => {

    const result = analyseMarks([40, 50, 60]);

    assert.strictEqual(result.total, 150);
    assert.strictEqual(result.average, 50);
    assert.strictEqual(result.passed, 2);
    assert.strictEqual(result.failed, 1);

    // Avoid floating-point precision problem
    assert.strictEqual(
        Number(result.passRate.toFixed(2)),
        66.67
    );

    assert.strictEqual(result.status, "Target met");
    assert.strictEqual(result.grade, "C");
});


// TEST 6: Empty input
test("should handle an empty marks array", () => {

    const result = analyseMarks([]);

    assert.strictEqual(
        result.message,
        "No marks provided"
    );
});