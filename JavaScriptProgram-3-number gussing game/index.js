//programm for number gussing game in javascript 

let Num = 20;
let gusse = Number.parseInt(prompt('Gusse number'));

    if (Num === gusse) {
        console.log('win')
    }
    else if (Num !== gusse) {
        console.log('lose')
    }
    else {
        console.log('enter valid number here')
    }