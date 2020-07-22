function bubbleSort(array) {
  if (array.length === 1 || array.length === 0) return array;
  let counter = array.length;
  counter--;

  for (let i = 0; i < array.length - 1; i++) {
    let j = i + 1;
    if (array[i] < array[j]) {
      continue;
    } else if (array[i] > array[j]) {
      let moveElem = array.splice(i, 1);
      array.splice(j, 0, moveElem[0]);
    }
  }
  if (counter > 0) {
    return bubbleSort(array);
  }
  if (counter === 0) {
    return array;
  }
}

// [8, 2, 5, 7]
