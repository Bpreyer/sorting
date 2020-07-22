describe("Split array function", function () {
  it("is able to split an array into two halves", function () {
    expect(split([1, 3, 4, 2])).toEqual([
      [1, 3],
      [4, 2],
    ]);
  });
});
