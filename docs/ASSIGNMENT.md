# Original diagnostic specification
Write `analyseMarks(marks, passMark = 50)` returning a report.
Reject a non-array, empty array, non-integer marks, marks outside 0–100, or an invalid passMark with null. Numeric strings are invalid. Do not mutate the input.
Use an indexed for or while loop to calculate total, average, highest, lowest, passed, failed, evenCount, range and passRate. Round average and passRate to two decimal places as numbers.
Use if/else for counting, a ternary for status, and switch(true) for average grade A ≥80, B ≥60, C ≥50, otherwise D. Return all eleven report fields including status and grade.
Use functions, indexing, arithmetic, assignment, increment, comparisons and logical operators. Do not replace the processing loop with reduce, filter or sorting.
Test the sample array, [0,50,100], ["70",40], [], and passMark 101. Explain loop termination and strict versus loose equality.
