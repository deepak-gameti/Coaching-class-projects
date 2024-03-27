// return an array with only even value

function rtnEvenval (arr){
    let base = [];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            base[i] = arr[i]
        }
    }
    return base
}

// const arr1 = Array(23, 34 , 52, 56, 12, 56,11, 64, 3, 55, 100, 2);

// let hello = rtnEvenval(arr1);
// console.log(hello)