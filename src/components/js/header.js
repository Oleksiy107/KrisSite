// let arr = [];
// for (let i = 0; i < moveZeros.length; i++) {
//   moveZeros.push(arr[i]);
// }
// console.log(arr);

  


    
   

function moveZeros(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[i++] = arr[j];
    }
  }
  for (; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
