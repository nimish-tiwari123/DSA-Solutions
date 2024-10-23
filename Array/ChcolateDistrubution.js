const mainArr = [7, 3, 2, 4, 9, 12, 56];
const studentCount = 5;

let minDiff = 0;
let subArray = [];
let diff =0;

// sorting the array
for (let i=0; i<mainArr.length; i++){
    for (let j=i+1; j<mainArr.length; j++){
        if(mainArr[i]> mainArr[j]){
            let temp = mainArr[i];
            mainArr[i] = mainArr[j];
            mainArr[j] = temp;
        }
    }
}

// find minimize difference in all sub array
for(let i=0; i<=mainArr.length-studentCount; i++){

    subArray = mainArr.slice(i, i+studentCount);
    minDiff = subArray[studentCount-1] - subArray[0];
    
    if(i==0){
        diff = minDiff;
    }

    if(diff < minDiff){
        minDiff = diff;
    }

}

console.log(diff);