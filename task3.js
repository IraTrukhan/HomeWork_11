let text = prompt("Please enter text", "rar");
checkPalindrom(text) == true ? alert(text + " - palindrom") : alert(text + " - not palindrom");

function checkPalindrom(text){
return (text.toLowerCase() == text.toLowerCase().split("").reverse("").join(""))? true : false;
// {
   
//     return true;
// }
// else{
//    return false
// }
}


