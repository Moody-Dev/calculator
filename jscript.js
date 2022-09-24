const buttons = document.querySelectorAll('[data-numbers]');
const symbols = document.querySelectorAll('[data-symbols]');
const dot = document.querySelector('[data-dot]');
const userInput = document.querySelector('[data-current]');
const userHistory = document.querySelector('[data-history]');
const equal = document.querySelector('[data-equal]');

// console.log(typeof(Math.floor(Number(userInput.value))));
let operator = null;
let prevValue = null;
let nextValue = null;
userInput.value = null;
userHistory.value = null;

// Use Buttons
for (const button of buttons) {
  button.addEventListener('click', getBotton);
}
function getBotton(e) {
  const btnTap = e.currentTarget.textContent;
  userInput.value += btnTap;
}

// Use Operators
for (const sign of symbols) {
  sign.addEventListener('click', getSign)
}
function getSign(e) {
  const getSym = e.currentTarget.textContent;
  operator = getSym;
  const userNum = Number(userInput.value);
  // if (userNum === 0 && e.target.textContent === '/') {
  //   alert("You Can't divide by Zero")
  // } else 
  if (!prevValue) {
    prevValue = userNum;
    userHistory.value = `${userNum} ${getSym}`;
    clearInput();
  } else if (userNum && prevValue) {
    nextValue = userNum;
    switch (true) {
      case getSym === '+':
        add(prevValue, nextValue);
        prevValue = add();
        userHistory.value = add();
        break;
      case getSym === '-':
        subtract(prevValue, nextValue);
        prevValue = subtract();
        userHistory.value = subtract();
        break;
      case getSym === '*':
        multiply(prevValue, nextValue);
        prevValue = multiply();
        userHistory.value = multiply();
        break;
      case getSym === '/':
        if (nextValue === 0) {
          userInput.textContent = "You can't divide by Zero"
        } else {
          divide(prevValue, nextValue);
          prevValue = divide();
          userHistory.value = divide();
          break;
        }
    }
  }
}



function clearInput() {
  userInput.value = null;
}

function add(prev, next) {
  const sum = prev + next;
  prevValue = sum;
  clearInput();
}
function subtract(prev, next) {
  const sum = prev - next;
  prevValue = sum;
  clearInput();
}
function divide(prev, next) {
  const sum = prev / next;
  prevValue = sum;
  clearInput();
}
function multiply(prev, next) {
  const sum = prev * next;
  prevValue = sum;
  clearInput();
}