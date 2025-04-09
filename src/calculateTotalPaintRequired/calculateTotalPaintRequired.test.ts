import calculateTotalPaintRequired from './calculateTotalPaintRequired';
describe('convertAreaToSquareFeet', () => {
    test('should calculate correct paint for 1 copy of 3x2 rectangle', () => {
        expect(calculateTotalPaintRequired(3, 2, 1)).toBeCloseTo(7, 2);
      });

});
