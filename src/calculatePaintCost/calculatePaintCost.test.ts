import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should return 0 if area and costPerUnit are 0', () => {
    expect(calculatePaintCost(0, 0)).toBe(0);
  });
  test('should calculate correct paint cost for valid inputs', () => {
    expect(calculatePaintCost(100, 2)).toBe(200);
  });
  test('should handle fractional area and costPerUnit', () => {
    expect(calculatePaintCost(12.5, 1.2)).toBeCloseTo(15, 1);
  });  
});
