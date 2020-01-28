const rFact = require('./rFact');

test('rFact from 0 to equal 1', () => {
  expect(rFact(0)).toBe(1);
});

test('rFact from 3 to equal 5', () => {
  expect(rFact(3)).toBe(5);
});

test('rFact from 10 to equal 3628800', () => {
  expect(rFact(10)).toBe(3628800);
});