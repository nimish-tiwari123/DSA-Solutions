const arr = [4,5,6,7,0,1,2];
let target = 0;

let left = 0;
let right = arr.length-1;

function calculateArrSort(arr, target){
    while(left <= right){
        mid = Math.floor((left+right)/2);
   
        if(arr[mid]== target){
           return mid;
        }
        else if(arr[left] <= arr[mid]){
              
           if(arr[left]<= target && target < arr[mid]){
               right = mid-1;
           }
           else{
               left = mid+1;
           }
        }
        else {
           if(arr[mid]< target && target <= arr[right]){
               left = mid+1;
           }
           else{
               right = mid-1;
           }
        }
   
   }
   return -1;

}

console.log(calculateArrSort(arr, target));

