// sort an array
let arr = [1, 3, 51, 6, 74, 93];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 1; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

// reverse the arr

let i = 0;
let j = arr.length -1;

while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  i++;
  j--;
}

console.log(arr);

// two sum problem

let arr1 = [1,-3,4,6,-2]
let target = 4

const twoSum = (arr1 , target) => {
    for(let i=0; i< arr1.length; i++){
        if(arr1[i] + arr1[i+1] === target){
            console.log("true")
            console.log("the number is "+ arr1[i] +" and "+ arr1[i+1] )
        }
    }
    return false
}

twoSum(arr1, target)