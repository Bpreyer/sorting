function split(wholeArray) {
  let midPoint = Math.floor(wholeArray.length / 2);
  if (wholeArray.length <= 1) {
    return wholeArray;
  }
  const firstHalf = wholeArray.slice(0, midPoint);
  const secondHalf = wholeArray.slice(midPoint);

  return [firstHalf, secondHalf];
}

//[[1,3],[4,2]]
function merge(firstHalf, secondHalf) {
  let sortedArr = [];

  console.log(firstHalf, secondHalf);
  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] < secondHalf[0]) {
      const first = firstHalf.shift();
      sortedArr.push(first);
    }
    if (firstHalf[0] > secondHalf[0]) {
      const second = secondHalf.shift();
      sortedArr.push(second);
    }
    if (firstHalf.length === 0 && secondHalf.length === 1) {
      const second = secondHalf.shift();
      sortedArr.push(second);
    }
    if (firstHalf.length === 1 && secondHalf.length === 0) {
      const first = firstHalf.shift();
      sortedArr.push(first);
    }
  }
  return sortedArr;
}

function mergeSort(arr) {
  let newArr = [];
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    let splitArr = [];
    if (splitArr[i].length > 1) {
      let splitArr = split(arr);
      console.log("are you there");
      mergeSort(splitArr[i]);
    } else {
      newArr.push(splitArr[i]);
    }
  }
  return newArr;
  //[ [ 9, 7, 4, 0 ], [ 14, 55, 1, 3 ] ]
}
