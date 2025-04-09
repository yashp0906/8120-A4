import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should return 0 when both paintCost and laborCost are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });
});
