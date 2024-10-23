let arr = [1,0,2,0,3,0];
let leng = 0;

for( let i=0; i<arr.length; i++){
  if(arr[i]==0){
    leng++;
  }
}

for( let i=0; i<leng; i++){
        arr.push(0);

}

