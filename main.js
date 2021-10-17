const display = document.querySelector(".calcBorder__output");
const oneBtn = document.querySelector(".calcBorder__one");
const numberBtns = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".calcBorder__clr");
const plusBtn = document.querySelector(".calcBorder__plus");
const equalsBtn = document.querySelector(".calcBorder__equal");
const minusBtn = document.querySelector(".calcBorder__minus");
const multiplyBtn = document.querySelector(".calcBorder__multiply");
const divideBtn = document.querySelector(".calcBorder__divide");
const percentageBtn = document.querySelector(".calcBorder__percentage");


// oneBtn.addEventListener("click", (event) => {
//   display.innerHTML += event.target.value;
// })

// if (event.target.value === 1 ){
  // display.......}


  // console.log(numberBtns);
  let firstNumber = "";
  let secondNumber = "";
  numberBtns.forEach(number =>{
    number.addEventListener("click", (event) => {
      display.innerHTML += event.target.value;
      // console.log(firstNumber);
    })
  }); 

  plusBtn.addEventListener("click", (event) => {
    firstNumber = parseFloat(display.innerHTML);
    display.innerHTML = " ";
    operator = "+";
  });

  minusBtn.addEventListener("click", (event) => {
    firstNumber = parseFloat(display.innerHTML);
    display.innerHTML = " ";
    operator = "-";
  })

  multiplyBtn.addEventListener("click", (event) => {
    firstNumber = parseFloat(display.innerHTML)
    display.innerHTML = " ";
    operator = "*";
  })

  divideBtn.addEventListener("click", (event) => {
    firstNumber = parseFloat(display.innerHTML);
    display.innerHTML = " ";
    operator = "/";
  })

  percentageBtn.addEventListener("click", (event) => {
    firstNumber = parseFloat(display.innerHTML)
    display.innerHTML = firstNumber / 100;
    operator = "%";
  });

  equalsBtn.addEventListener("click", () => {
    secondNumber = parseFloat(display.innerHTML);
    if (operator === "+"){
      display.innerHTML = firstNumber + secondNumber;
    } else if (operator === "-") {
      display.innerHTML = firstNumber - secondNumber; 
    } else if (operator === "*"){
      display.innerHTML = firstNumber * secondNumber;
    } else if (operator === "/"){
      display.innerHTML = firstNumber / secondNumber;
    }
  });

  // if statement needed to see if its the first or next number with the operator button being pressed 

  // if user presses operator firstnumber is stored w/operator then typeing second number 
  // if operator button is index value 0 then use divde by 
  clearBtn.addEventListener("click", () => {
    display.innerHTML = " ";
  });
