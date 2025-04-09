import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('should return 0 when area in square meters is 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });
});
