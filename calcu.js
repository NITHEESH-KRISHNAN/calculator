//1.display number
function displayNumber(num){
    result.value+=num
}
//2.clear text box
function ClearBox(){
    result.value=""
}
//3.evaluate expression
function evaluateExpression(){
    expression=result.value
    output=eval(expression)
    result.value=output
}
//4 remove last item
function removeLastItem(){
    currentExpression=result.value
    result.value=currentExpression.slice(0,-1)
}