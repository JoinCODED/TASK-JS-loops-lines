const {
  drawVLine,
  drawHLine,
  drawSquare,
  drawLeftTriangle,
} = require('./loops');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('draw a vertical line with `n` length', () => {
  drawVLine(3);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls[1][0]).toEqual('#');
  expect(console.log.mock.calls[2][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('draw a horizontal line with `n` length', () => {
  drawHLine(3);
  expect(console.log.mock.calls[0][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('draw a square with a length of `n`', () => {
  drawSquare(3);
  expect(console.log.mock.calls[0][0]).toEqual('###');
  expect(console.log.mock.calls[1][0]).toEqual('###');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('draw a triangle with a length of `n`', () => {
  drawLeftTriangle(3);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(3);
});
