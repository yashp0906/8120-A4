import calculateTotalPaintRequired from './calculateTotalPaintRequired';
describe('convertAreaToSquareFeet', () => {
    test('should calculate correct paint for 1 copy of 3x2 rectangle', () => {
        expect(calculateTotalPaintRequired(3, 2, 1)).toBeCloseTo(7, 2);
      });
      test('should return 0 if number of copies is 0', () => {
        expect(calculateTotalPaintRequired(3, 2, 0)).toBe(0);
      });
      test('should handle fractional dimensions', () => {
        expect(calculateTotalPaintRequired(2.5, 1.5, 10)).toBeCloseTo(43.75, 2);
      });
      test('should return correct value for negative width/height', () => {
        expect(calculateTotalPaintRequired(-3, 2, 1)).toBeCloseTo(-7, 2);
      });
      test('should calculate correct paint for 5000 copies of 3x2 rectangle', () => {
        expect(calculateTotalPaintRequired(3, 2, 5000)).toBeCloseTo(35000, 2);
      });
      test('should return NaN if width, height, or copies are NaN', () => {
        expect(calculateTotalPaintRequired(NaN, 2, 1)).toBeNaN();
        expect(calculateTotalPaintRequired(2, NaN, 1)).toBeNaN();
        expect(calculateTotalPaintRequired(2, 2, NaN)).toBeNaN();
      });
});
