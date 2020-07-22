function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  let midPoint = Math.floor(wholeArray.length / 2);
  let i = 0;

  while (i < midPoint) {
    firstHalf.push(wholeArray[i]);
    i++;
  }
  while (i >= midPoint && i < wholeArray.length) {
    secondHalf.push(wholeArray[i]);
    i++;
  }

  console.log([firstHalf, secondHalf]);
  return [firstHalf, secondHalf];
}
