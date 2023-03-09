let arr=[2,4,6,8,10,1,3,5];
let max=arr[0];

for(let i=0 ;i<=arr.length-1;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max)