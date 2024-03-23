// // programm for factorial 
// let num = prompt('Enter any number for factorial')
// let base = 1
// for(let i = 1; i <= num; i++){

//     base *= i;
//     console.log("in base", base)
//     console.log("i", i)
// }

// console.log("Factorial of " + num + " is", base)


// =--------------------------------------------------------------

//programm for calculate sum of odd number is given between

let startNum = 1
let endNum = 10
let baseNum = 0;

for(startNum; startNum <= endNum; startNum++){
    if(startNum % 2 !== 0){
        // console.log("startNum", startNum)
        baseNum += startNum;
    }
}
console.log(baseNum);


// ------------------------------------------------------------------


//programm for find area of triangle
//1/2xbxh
// let base = 7;
// let height = 9;
// let areaOfTriangle = 1/2 * base * height;
// console.log(areaOfTriangle)

// -------------------------------------------------------------


//programm for check prime numbers

// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }



//programm for