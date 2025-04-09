import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test('should return NaN if both area and coveragePerUnit are 0', () => {
    expect(paintRequiredCalculator(0, 0)).toBeNaN();
  });
  
});
