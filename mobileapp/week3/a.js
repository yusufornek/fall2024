var compare = document.getElementById("compare");
compare.onclick
document.getElementById("compare").onclick = function() {

let number1 = document.getElementById('number1').value;
let number2 = document.getElementById('number2').value;
if (number1 > number2) {
    document.getElementById('result') = number1 + " is greater than " + number2;
} 
}