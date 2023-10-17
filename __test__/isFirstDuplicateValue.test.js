const isFirstDuplicateValue = require("./isFirstDuplicateValue.js");

describe("is first duplicate value", () => {
  it("Should return the value of the first duplicate value", () => {
    const array = [9, 13, 6, 2, 3, 5, 5, 5, 3, 2, 2, 2, 2, 4, 3];
    expect(isFirstDuplicateValue(array).toBe(5));
  });

  it("Should return the value of the first duplicate value", () => {
    const array = [7, 6, 5, 3, 6, 4, 3, 5, 2];
    expect(isFirstDuplicateValue(array).toBe(6));
  });

  it("Should return the -1 if no duplicate values", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(isFirstDuplicateValue(array).toBe(-1));
  });

  it("Should return the -1 if no duplicate values", () => {
    const array = [1];
    expect(isFirstDuplicateValue(array).toBe(-1));
  });
});
