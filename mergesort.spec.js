describe("Split array function", function () {
  it("is able to split an array into two halves", function () {
    expect(split([1, 3, 4, 2])).toEqual([
      [1, 3],
      [4, 2],
    ]);
  });
});

describe("Merge function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe("mergeSort function", function () {
  it("should be able to sort an arry that it is given", function () {
    expect(mergeSort([9])).toEqual([9]);
    expect(mergeSort([9, 7, 4, 0, 14, 55, 1, 3])).toEqual([
      0,
      1,
      3,
      4,
      7,
      9,
      14,
      55,
    ]);
  });
});
