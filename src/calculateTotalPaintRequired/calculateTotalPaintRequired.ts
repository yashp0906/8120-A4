export function calculateTotalPaintRequired(
    width: number,
    height: number,
    numberOfCopies: number
  ): number {
    const rectangleArea = width * height;
    const centerTriangleArea = (width * height) / 6; 
    const totalAreaPerCopy = rectangleArea + centerTriangleArea;
    return totalAreaPerCopy * numberOfCopies;
  }
  
  