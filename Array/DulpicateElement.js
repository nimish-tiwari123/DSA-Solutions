let arr = [1,2,3,4,5];
let contain = false;

for (let i=0; i<arr.length; i++){
    for (let j=i+1; j<arr.length; j++){
       if(arr[i]== arr[j]){
        contain = true;
       }
    }
}
if(contain){
    console.log(true);
}
else{
    console.log(false);
}