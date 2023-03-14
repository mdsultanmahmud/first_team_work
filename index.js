// task-1(sultan)
// make a function to find maximum number from an array
const array = [334, 4, 5, 45, 65, 6, 56, 4565];
function maxNum(arr) {
  let max = arr[0];
  for (i = 0; i <= arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxNum(array));

// task-2(Arif vai)
// brother arif, write a function to find the minimum number from this array

function minNum(arr) {
  let min = arr[0];
  for (i = 0; i <= arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minNum(array));

// task-3(Rony vai)
// brother rony, write a function to add all the number of array
