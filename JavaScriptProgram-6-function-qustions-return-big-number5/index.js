// a JavaScript program to find the maximum number in an array. 


function findMax(arr){
    let max = arr[0];
    for(let x in arr){
        if (arr[x] > max){
            max = arr[x];
        }
    }
    return max
}

const numVals = [12, 11, 23, 22, 71, 98, 92, 35, 73, 29];

let a = findMax(numVals);
console.log(a)