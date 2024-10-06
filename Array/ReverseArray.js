let arr = [ 4,7,11,1,78,56,11,1,3];

let temp = [];
for(let i=0; i<arr.length; i++){
  temp[i] = arr[arr.length-i-1]
}

console.log("Reverse Array: " +temp);
