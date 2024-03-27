// a JavaScript program for reverse the given string

function revStr(string) {
    let tx = [];
    for (let x of string) {
        tx.unshift(x);
    }

    let cnvt = tx.toString();
    let rmComma = cnvt.replaceAll(",", "");
    return rmComma
}

let a = revStr('deepak');
console.log(a);
// console.log(typeof(a));

