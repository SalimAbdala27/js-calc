"use strict";

var display = document.querySelector(".calcBorder__output");
var oneBtn = document.querySelector(".calcBorder__one");
var numberBtns = document.querySelectorAll(".numbers");
var operatorBtns = document.querySelectorAll(".operator"); // oneBtn.addEventListener("click", (event) => {
//   display.innerHTML += event.target.value;
// })
// if (event.target.value === 1 ){
// display.......}
// console.log(numberBtns);

var numbersDisplayed = numberBtns.forEach(function (number) {
  number.addEventListener("click", function (event) {
    display.innerHTML += event.target.value;
  });
});
console.log(sessionStorage.setItem("firstNumber", numbersDisplayed));
alert(sessionStorage.getItem("firstNumber"));