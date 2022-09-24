// Get The DOM
const result = document.querySelector('#result');
const history = document.querySelector('#history');
let userHistory = document.querySelector('#user-history');
const current = document.querySelector('#current');
let userInput = document.querySelector('#user-input');
const buttonContainer = document.querySelector('#botton-container');
const clear = document.querySelector('[data-clear]');
const allClear = document.querySelector('[data-all-clear]');
const del = document.querySelector('#del');
const equal = document.querySelector('[data-equal]');
const buttons = document.querySelectorAll('[data-numbers]');
const symbols = document.querySelectorAll('[data-symbols]');




function addFn(prev, next) {
  // prev = prevValue;
  // next = nextValue;
  return prev + next;
}
function subFn(prev, next) {
  // prev = prevValue;
  // next = nextValue;
  return prev - next;
}
function divideFn(prev, next) {
  // prev = prevValue;
  // next = nextValue;
  return prev / next;
}
function multiFn(prev, next) {
  // prev = prevValue;
  // next = nextValue;
  return prev * next;
}

function operate(operator, prev, next) {
  operator = signValue;
  prev = prevValue;
  next = nextValue;
}

let userValue = null;
let prevValue = null;
let nextValue = null;
let operatorValue = null;
userInput.value = null;
userHistory.value = null;


for (const button of buttons) {
  button.addEventListener('click', (e) => {
    const setValue = userInput.value += e.currentTarget.textContent;
    userValue = setValue;
    // console.log(userValue)
    return setValue;
  })
}
// console.log(this.operatorValue)

for (const sign of symbols) {
  sign.addEventListener('click', (e) => {
    const getValue = e.currentTarget.textContent;
    if (userValue === null && this.prevValue === null) {
      e.stopPropagation
    } else if (userValue && prevValue === null) {
      prevValue = userValue;
      userInput.value += ` ${getValue}`;
      if (userInput.value.includes(getValue)) {
        operatorValue = getValue;
        console.log(operatorValue)
        userHistory.value = userInput.value;
        userInput.value = null;
      };
    } else if (prevValue && userInput.value) {
      // console.log(prevValue);
      nextValue = userInput.value;
      switch (getValue) {
        case '+':
          prevValue = addFn(parseInt(prevValue), parseInt(nextValue));
          userInput.value = null;
          userHistory.value = prevValue + ' ' + getValue;
          // nextValue = userInput.value;
          break;
        case '-':
          prevValue = subFn(parseInt(prevValue), parseInt(nextValue));
          userInput.value = null;
          userHistory.value = prevValue + ' ' + getValue;
          break;
        case '/':
          prevValue = divideFn(parseInt(prevValue), parseInt(nextValue));
          userInput.value = null;
          userHistory.value = prevValue + ' ' + getValue;
          break;
        case '*':
          prevValue = multiFn(parseInt(prevValue), parseInt(nextValue));
          userInput.value = null;
          userHistory.value = prevValue + ' ' + getValue;
          break;
      }
    }
  })
}