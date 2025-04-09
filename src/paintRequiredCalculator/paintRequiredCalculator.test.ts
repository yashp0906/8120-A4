import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test('should return NaN if both area and coveragePerUnit are 0', () => {
    expect(paintRequiredCalculator(0, 0)).toBeNaN();
  });
  test('should return fractional result if area is not evenly divisible', () => {
    expect(paintRequiredCalculator(55, 20)).toBeCloseTo(2.75, 2);
  });
  test('should return correct units required for valid inputs', () => {
    expect(paintRequiredCalculator(100, 20)).toBe(5);
  });  
});
