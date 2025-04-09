import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal(0,0)).toBe(0);
  });
});
