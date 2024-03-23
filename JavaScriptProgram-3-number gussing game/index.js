//programm for number gussing game in javascript 

let mainNum = 12;
let gusseNum = prompt('gusse the right number for win')

while(mainNum != gusseNum){
    gusseNum = prompt('wrong number try again')
}
console.log('yey! Congrats you win')