import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('should return 0 when area in square meters is 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });
  test('should correctly convert 10 square meters to square feet', () => {
    expect(convertAreaToSquareFeet(10)).toBeCloseTo(107.639, 3);
  });
  test('should return negative result for negative input (if allowed)', () => {
    expect(convertAreaToSquareFeet(-3)).toBeCloseTo(-32.2917, 4);
  });
});
