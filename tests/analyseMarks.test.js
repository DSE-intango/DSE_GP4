import test from 'node:test';
import assert from 'node:assert/strict';
import { analyseMarks } from '../src/analyseMarks.js';

test('supplied diagnostic array returns all eleven correct fields', () => {
  assert.deepEqual(analyseMarks([78,45,90,62,50,0,100,33]), {
    total:458, average:57.25, highest:100, lowest:0, passed:5, failed:3,
    evenCount:6, range:100, passRate:62.5, status:'Target met', grade:'C'
  });
});
test('boundary marks and decimal rounding', () => {
  assert.deepEqual(analyseMarks([0,50,100]), {
    total:150, average:50, highest:100, lowest:0, passed:2, failed:1,
    evenCount:3, range:100, passRate:66.67, status:'Target met', grade:'C'
  });
});
test('rejects invalid arrays and marks, including sparse arrays', () => {
  for (const marks of [null, undefined, {}, '50', [], ['70',40], [-1], [101],
    [1.5], [NaN], [Infinity], [true], [null], new Array(2)]) {
    assert.equal(analyseMarks(marks), null);
  }
});
test('rejects invalid pass marks', () => {
  for (const passMark of [-1,101,50.5,'50',null,NaN,Infinity]) {
    assert.equal(analyseMarks([50], passMark), null);
  }
});
test('threshold is inclusive and configurable', () => {
  const r = analyseMarks([49,50,51], 50);
  assert.equal(r.passed,2);
  assert.equal(r.failed,1);
  assert.equal(analyseMarks([49,50,51],51).passed,1);
});
test('zero and 100 are valid pass marks', () => {
  assert.equal(analyseMarks([0,100],0).passed,2);
  assert.equal(analyseMarks([0,100],100).passed,1);
});
test('grade boundaries and status', () => {
  for (const [mark,grade] of [[0,'D'],[49,'D'],[50,'C'],[59,'C'],[60,'B'],[79,'B'],[80,'A'],[100,'A']]) {
    assert.equal(analyseMarks([mark]).grade,grade);
  }
  assert.equal(analyseMarks([49]).status,'Needs support');
  assert.equal(analyseMarks([50]).status,'Target met');
});
test('never mutates the input array', () => {
  const marks = Object.freeze([90,10,50]);
  analyseMarks(marks);
  assert.deepEqual(marks,[90,10,50]);
});
test('one mark has zero range and an even zero', () => {
  const r=analyseMarks([0]);
  assert.equal(r.range,0);
  assert.equal(r.evenCount,1);
  assert.equal(r.highest,0);
  assert.equal(r.lowest,0);
});
test('grade uses raw average rather than rounded average', () => {
  const marks = Array(201).fill(80);
  marks[0]=79;
  const r=analyseMarks(marks);
  assert.equal(r.average,80);
  assert.equal(r.grade,'B');
});
