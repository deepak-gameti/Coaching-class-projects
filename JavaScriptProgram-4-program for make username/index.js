//programm for make username using users fullname

let fullName = prompt('Enter your full name'); //prompt full name from user 
let userIcon = "@";                            //this is username icon
let l = fullName.length;                       // this method for know length of fullname 
let edit = fullName.replaceAll(" ", "");       // this is for remove space from text
let username = userIcon.concat(edit,l)         // this is for concat all


console.log(username);
alert(`${username} is your username`);