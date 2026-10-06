# Diagnostic correction and expected results
Trainer: Fidèle NDAYISHIMIYE — INTANGO TSS, DSE Cohort 2.

The full solution is `src/analyseMarks.js`. Run `npm start` and `npm test`.

| Input | Expected result |
| --- | --- |
| [78,45,90,62,50,0,100,33], passMark 50 | total 458; average 57.25; highest 100; lowest 0; passed 5; failed 3; evenCount 6; range 100; passRate 62.5; status Target met; grade C |
| [0,50,100], passMark 50 | total 150; average 50; highest 100; lowest 0; passed 2; failed 1; evenCount 3; range 100; passRate 66.67; status Target met; grade C |
| ["70",40] | null |
| [] | null |
| valid marks, passMark 101 | null |

`Number.isInteger` checks type and whole-number validity. Logical OR rejects any invalid condition. The loop's index starts at zero, advances with `++`, and stops at the array length. `+=` accumulates the total. `%` finds even marks, including zero. `===` compares without coercion: `50 === '50'` is false, whereas `50 == '50'` is true. If/else counts pass/fail; the ternary selects status; switch(true) selects the first matching grade and break prevents fall-through.

The original array is read without mutation. Grade and status use the raw average; only display/report average and passRate are rounded. These are exercise bands, not an official qualification grading system.

## Teaching checkpoints
Ask a learner to change the threshold from 50 to 60 and explain the new result. Ask why zero is even and why a numeric string is rejected. Ask how empty-array validation prevents division by zero.
