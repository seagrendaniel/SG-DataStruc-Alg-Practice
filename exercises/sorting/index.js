// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < (arr.length - i - 1); j++) {
      if(arr[j] > arr[j+1]) {
        let greater
        greater = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = greater
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let indexOfMin = i
    for(j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }
    if(indexOfMin !== i) {
      let lesser = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lesser
    }
  }
  return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
