describe("Bubble Sort", function () {
  it("handles and empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles single item array", function () {
    expect(bubbleSort([1])).toEqual([1]);
  });
  xit("handles multiple item array", function () {
    expect(bubbleSort([8, 2, 5, 100, 3000, 7, 1, 6, 10, 3])).toEqual([
      1,
      2,
      3,
      5,
      6,
      7,
      8,
      10,
      100,
      3000,
    ]);
  });
});
