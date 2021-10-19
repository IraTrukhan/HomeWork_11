let num = prompt("Please enter number", "5");
if (checkEven(num) == true)
alert (num + " - it's even\n" + num + " * 8 = " + num*8);
else
    alert (num + " - it's otherwise\n" + num + " * 9 = " + num*9);

function checkEven(a){
if (a % 2 == 0)
return true;
else
return false;   
}