/** Diagnostic correction. Grade/status use the unrounded average. */
export function analyseMarks(marks, passMark = 50) {
  if (!Array.isArray(marks) || marks.length === 0 ||
      !Number.isInteger(passMark) || passMark < 0 || passMark > 100) {
    return null;
  }
  let total = 0;
  let highest = 0;
  let lowest = 100;
  let passed = 0;
  let failed = 0;
  let evenCount = 0;
  for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    // Number.isInteger rejects strings, NaN, Infinity and decimals.
    if (!Number.isInteger(mark) || mark < 0 || mark > 100) return null;
    total += mark;
    if (mark > highest) highest = mark;
    if (mark < lowest) lowest = mark;
    if (mark >= passMark) passed++;
    else failed++;
    if (mark % 2 === 0) evenCount++;
  }
  const rawAverage = total / marks.length;
  const average = Number(rawAverage.toFixed(2));
  const range = highest - lowest;
  const passRate = Number(((passed / marks.length) * 100).toFixed(2));
  const status = rawAverage >= passMark ? 'Target met' : 'Needs support';
  let grade;
  switch (true) {
    case rawAverage >= 80: grade = 'A'; break;
    case rawAverage >= 60: grade = 'B'; break;
    case rawAverage >= 50: grade = 'C'; break;
    default: grade = 'D';
  }
  return { total, average, highest, lowest, passed, failed, evenCount,
    range, passRate, status, grade };
}
