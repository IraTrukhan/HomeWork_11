let num = prompt("Please enter number", "5");
// console.log(num + "    " + typeof(+num));
if (num * 0 == 0){
(checkEven(num) == true) ? alert (num + " - it's even\n" + num + " * 8 = " + num * 8):
alert (num + " - it's otherwise\n" + num + " * 9 = " + num * 9);
}
else
alert("not number");

function checkEven(a){
return (a % 2 == 0)? true : false;
}