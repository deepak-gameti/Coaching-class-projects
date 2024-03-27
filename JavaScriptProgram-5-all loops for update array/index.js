// //program for applying 20% off an array items

const realPrise = Array(350, 475, 600, 750, 220);

/* for loop*/
// let i = 0;
// for (i; i < realPrise.length; i++) {
//     let off = realPrise[i] * 20 / 100;
//     realPrise[i] -= off;
// }

// console.log(realPrise);




/* for-of  loop*/
// let x;
// for (x of realPrise) {

//     let off = x * 20 / 100;
//     x -= off;

//     console.log(x)
// }

// console.log(realPrise);





/* for-in loop*/
// for (let x in realPrise) {
//     let off = realPrise[x] * 20 / 100;
//     realPrise[x] -= off;
//     // console.log(x)
// }
// console.log(realPrise);





/* while loop*/
// let i = 0;
// while(i < realPrise.length){
//     let off = realPrise[i] * 20/100;
//     realPrise[i] -= off;
//     console.log(realPrise[i])
//     i++;
// }
// console.log(realPrise)




/* do-while loop*/
// let i = 0;
// do{
//     let off = realPrise[i] * 20/100;
//     realPrise[i] -= off
//     // console.log(realPrise[i])
//     i++;
// }
// while(i < realPrise.length);
// console.log(realPrise);





// let num = prompt('enter number');

// if(10 % num === 0){
//     alert(true);
// }else if (10 % num !== 0){
//     alert(false);
// }else{
//     alert("enter valid number");
// }