import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should return 0 if area and costPerUnit are 0', () => {
    expect(calculatePaintCost(0, 0)).toBe(0);
  });
  
});
