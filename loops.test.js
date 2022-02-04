const {
  drawVLine,
  drawHLine,
  drawSquare,
  drawLeftTriangle,
  drawTree,
  fillUnoDeck,
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
  expect(console.log.mock.calls[0][0]).toEqual('# # #');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('draw a square with a length of `n`', () => {
  drawSquare(3);
  expect(console.log.mock.calls[0][0]).toEqual('# # #');
  expect(console.log.mock.calls[1][0]).toEqual('# # #');
  expect(console.log.mock.calls[2][0]).toEqual('# # #');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('draw a triangle with a length of `n`', () => {
  drawLeftTriangle(3);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls[1][0]).toEqual('# #');
  expect(console.log.mock.calls[2][0]).toEqual('# # #');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('draw a tree with a length of `n`', () => {
  drawTree(5);
  expect(console.log.mock.calls[0][0]).toEqual('   #   ');
  expect(console.log.mock.calls[1][0]).toEqual('  # #  ');
  expect(console.log.mock.calls[2][0]).toEqual(' # # # ');
  expect(console.log.mock.calls[3][0]).toEqual('# # # #');
  expect(console.log.mock.calls[4][0]).toEqual('   #   ');
  expect(console.log.mock.calls.length).toEqual(5);
});

test('create 4 arrays', () => {
  fillUnoDeck();
  expect(console.log.mock.calls[0][0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(console.log.mock.calls[1][0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(console.log.mock.calls[2][0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(console.log.mock.calls[3][0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(console.log.mock.calls.length).toEqual(4);
});
