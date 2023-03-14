// make a function to find maximum number from an array 
const array = [334,4,5,45,65,6,56,4565]
function maxNum(arr){
    let max = arr[0]
    for(i = 0; i<=arr.length; i++){
        if(max<arr[i]){
            max = arr[i]
        }
    }
    return max
}
console.log(maxNum(array))