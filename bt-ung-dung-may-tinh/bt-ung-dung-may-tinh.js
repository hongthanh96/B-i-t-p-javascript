// let num1 = document.getElementById("core1").value;
// let num2 = document.getElementById("core2").value;
// let result;
function addi(){
    let num1 = parseInt(document.getElementById("core1").value) ;
    let num2 = parseInt( document.getElementById("core2").value);
    let result;
    result = num1 + num2;
    document.getElementById("demo").innerHTML= 'Result Division: '+result;
}

function subtrac(){
    let num1 = parseInt(document.getElementById("core1").value) ;
    let num2 = parseInt( document.getElementById("core2").value);
    let result;
    if (num1 < num2){
        result = num2 - num1
    }
    else{
        result = num1 - num2
    }
    document.getElementById("demo").innerHTML= "Result Division: "+result;
}

function multi(){
    let num1 = parseInt(document.getElementById("core1").value) ;
    let num2 = parseInt( document.getElementById("core2").value);
    let result;
    result = num1 * num2;
    document.getElementById("demo").innerHTML= "Result Division: "+ result;
}
function divi(){
    let num1 = parseInt(document.getElementById("core1").value) ;
    let num2 = parseInt( document.getElementById("core2").value);
    let result;
    result = num1/num2;
    document.getElementById("demo").innerHTML= "Result Division: "+result;
}
