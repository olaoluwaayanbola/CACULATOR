const UserInput = document.getElementById('UserInput')
var expression = "";
function pres(num){
    expression += num;
    UserInput.value = expression
}
 function evalute(){
    UserInput.value = eval(expression);
    expression = '';
}
function erase(){
    expression = '';
    UserInput.value =expression;
}
