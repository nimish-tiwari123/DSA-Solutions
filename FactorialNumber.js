let num = 12;
let result=[];

for(let i=2; i<=num; i++){
    if(num%i==0 && num != i){
     result.push(i);
    }
}
console.log(result);