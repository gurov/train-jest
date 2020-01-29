const sum = require('./sum');

test('sum from -1 to 2', () => {
  expect(sum(-1,2)).toBe(1);
});

test('sum from 0 to 0', () => {
  expect(sum(0,0)).toBe(0);
});
test('sum from 0 to 6', () => {
  expect(sum(1,5)).toBe(6);
});


