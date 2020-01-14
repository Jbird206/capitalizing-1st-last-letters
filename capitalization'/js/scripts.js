//$(document).ready(function() {
var add = function(sentance1) {
  return sentance1;
};







var sentance1 =  prompt("enter a sentance");
var result = sentance1;
alert(result);
 //this CAPS the first and 3rd letter in the string
result = result.charAt(0).toUpperCase() + result.charAt(2).toUpperCase();
alert(result);
document.write(result);
