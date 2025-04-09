import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should return Infinity if coveragePerHour is 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });
  test('should return fractional time if not evenly divisible', () => {
    expect(estimatePaintingTime(150, 40)).toBeCloseTo(3.75, 2);
  });
});

