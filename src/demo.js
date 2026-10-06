import { analyseMarks } from './analyseMarks.js';
import { marks } from '../data/marks.js';
for (const [label, input, passMark] of [
  ['Supplied array', marks, 50],
  ['Boundary marks', [0, 50, 100], 50],
  ['Numeric string', ['70', 40], 50],
  ['Empty array', [], 50],
  ['Invalid pass mark', marks, 101],
]) {
  console.log(label, analyseMarks(input, passMark));
}
