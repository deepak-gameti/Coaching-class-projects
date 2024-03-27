// return given string reverse

function revString(str){
    let firstLtr = str.charAt(0).toUpperCase();
    let rmnLtr = str.slice(1);
    let fnlLtr = firstLtr + rmnLtr;

    return fnlLtr
}

// let hello = revString('raj');
// console.log(hello);

