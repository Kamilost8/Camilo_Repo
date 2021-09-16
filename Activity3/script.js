let firstnum
let secondnum
document.getElementById("add").addEventListener("click", addition);
document.getElementById("sub").addEventListener("click", subtract);
document.getElementById("mul").addEventListener("click", multiply);
document.getElementById("divi").addEventListener("click", divide);
document.getElementById("dark").addEventListener("click", dark);


function addition(){
firstnum = document.getElementById("firstnum1").value;
secondnum = document.getElementById("secondnum1").value;
var output = parseFloat(firstnum) + parseFloat(secondnum);
document.getElementById("equal").innerHTML = output;
};
function subtract(){
firstnum = document.getElementById("firstnum1").value;
secondnum = document.getElementById("secondnum1").value;
let output = firstnum - secondnum;
document.getElementById("equal").innerHTML = output;
};      
function multiply(){
firstnum = document.getElementById("firstnum1").value;
secondnum = document.getElementById("secondnum1").value;
let output = firstnum * secondnum;
document.getElementById("equal").innerHTML = output;
};
function divide(){
firstnum = document.getElementById("firstnum1").value;
secondnum = document.getElementById("secondnum1").value;
let output = firstnum / secondnum;
document.getElementById("equal").innerHTML = output;
};

function dark() {
var element = document.body;
element.classList.toggle("dark-mode");
}
