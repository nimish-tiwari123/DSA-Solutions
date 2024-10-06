let arr = [ 4,7,11,1,78,56,11,1,3];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] < arr[j]){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        
    }
}

console.log("Minimum element is: " +arr[arr.length-1]);
console.log("Maximum element is: "+arr[0]);
