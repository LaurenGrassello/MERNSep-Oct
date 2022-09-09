//ECMA, SCOPE, HOISTING
//hoisting - variable will be hoisted above everything else
//step 1: var nickname
//step 2: run console.log
//step 3: assign nickname to pepper
//step 4: console.log(nickname) = "pepper"
var nickname = "pepper"
console.log(nickname);

function changeNickname(){
    nickname = "bad pepper"
}
changeNickname();
console.log(nickname);
