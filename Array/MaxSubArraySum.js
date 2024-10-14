let arr = [5,4,-1,7,8];

let maxCurrent = arr[0];
let maxGlobal = arr[0];

for (let i=1; i<arr.length; i++){
    maxCurrent = Math.max(arr[i], arr[i]+maxCurrent);

    if(maxCurrent>maxGlobal){
        maxGlobal = maxCurrent;
    }
}

console.log(maxGlobal);