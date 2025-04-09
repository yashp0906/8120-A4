import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should return Infinity if coveragePerHour is 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });
});

