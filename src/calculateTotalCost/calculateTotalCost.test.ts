import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should return 0 when both paintCost and laborCost are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });
  test('should return correct total for positive paintCost and laborCost', () => {
    expect(calculateTotalCost(150, 200)).toBe(350);
  });
  test('should handle fractional values correctly', () => {
    expect(calculateTotalCost(99.99, 50.55)).toBeCloseTo(150.54, 2);
  });
});
