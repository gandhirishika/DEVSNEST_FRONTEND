window.onload = ()=>{           
var num1= document.getElementById("num1");
var num2= document.getElementById("num2");
var btns = document.querySelectorAll("button");
var result = document.querySelector("h2");
for(var i=0;i<btns.length;i++){
    var btn = btns[i].addEventListener("click" , function(){
        var btninner = this.innerHTML;
        x(btninner);
    }
    )
} 
function x(btninner){
switch (btninner){
    case "Multiply":
        var m = parseInt(num1.value)*parseInt(num2.value);
        result.innerHTML = "your output is" + m;
    break;
    case "Add":
    var m = parseInt(num1.value)+parseInt(num2.value);
    result.innerHTML = "your output is" + m;   
    break;     
    case "Divide":
    var m = parseInt(num1.value)/parseInt(num2.value);
    result.innerHTML = "your output is" + m;
    break;
    case "Sub":
    var m = parseInt(num1.value)-parseInt(num2.value);
    result.innerHTML = "your output is" + m;
    break;
    default :
    console.log("invaid output");
    break;
}   
}
}



 