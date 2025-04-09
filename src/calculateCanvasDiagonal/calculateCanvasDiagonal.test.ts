import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal(0,0)).toBe(0);
  });
  test('should return 5 for width 3 and height 4 (3-4-5 triangle)', () => {
    expect(calculateCanvasDiagonal(3, 4)).toBe(5);
  });
});
