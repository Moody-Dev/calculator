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

let signValue;
let prevValue;
let nextValue;


function addFn(prev, next) {
  prev = prevValue;
  next = nextValue;
  return prev + next;
}
function subFn(prev, next) {
  prev = prevValue;
  next = nextValue;
  return prev - next;
}
function divideFn(prev, next) {
  prev = prevValue;
  next = nextValue;
  return prev / next;
}
function multiFn(prev, next) {
  prev = prevValue;
  next = nextValue;
  return prev * next;
}

function operate(operator, prev, next) {
  operator = signValue;
  prev = prevValue;
  next = nextValue;
}






// Get The Input
userInput.value = null;
userHistory.value = null;
let userValue = [];

allClear.addEventListener('click', () => {
  userHistory.value = null;
  userInput.value = null;
})

clear.addEventListener('click', () => {
  return userInput.value = null;
})

// del.addEventListener('click', () => {
//   // const getArr = Array.from(userInput.value);
//   return userInput.value.pop();
//   // return userInput.value;
// })

for (const button of buttons) {
  button.addEventListener('click', (e) => {
    const setValue = userInput.value += e.currentTarget.textContent;
    userValue = setValue;
    // console.log(userValue.indexOf(/[\d]/) === '0');
    return setValue;
  })
}
// console.log(userValue)

// add.addEventListener('click', addFn);
// sub.addEventListener('click', subFn);
// divide.addEventListener('click', divideFn);
// multi.addEventListener('click', multiFn);



for (const sign of symbols) {
  sign.addEventListener('click', (e) => {
    const getValue = e.currentTarget.textContent;
    // console.log(getValue)
    // const getValue = userHistory.value += userInput.value + e.currentTarget.textContent;
    // userInput.value = '';
    // console.log(sign.textContent);
    switch (true) {
      case getValue === '+':
        console.log('Sign Value is: ' + getValue + '+');
        return addFn(getValue);
      // break;
      case getValue === '-':
        console.log('Sign Value is: ' + sign.textContent + '-');
        return subFn(getValue);
      case getValue === '/':
        console.log('Sign Value is: ' + sign.textContent + '/');
        return divideFn(getValue);
      case getValue === '*':
        console.log('Sign Value is: ' + sign.textContent + '*');
        return multiFn(getValue);
    }
    // return getValue;
  })
}



// equal.addEventListener('click', (sign, prev, next) => {
  //   const getUserValue = userHistory.value;
//   // console.log(getUserValue)
//   const getPrev = getUserValue.split(/['+'|'-'|'/'|'*']/);
//   prev = parseInt(getPrev);
//   prevValue = prev;
//   // console.log(prev)
//   const getSign = getUserValue.split(/\d/);
//   sign = getSign;
//   signValue = sign;
//   // console.log(sign)
//   const getNext = userInput.value;
//   next = getNext;
//   nextValue = next;

//   let result;

//   switch (sign) {
//     case sign.includes('+'):
//       result = prev + next;
//       break;
//     case sign.includes('-'):
//       result = prev - next;
//       break;
//     case sign.includes('/'):
//       result = prev / next;
//       break;
//     case sign.includes('+'):
//       result = prev * next;
//       break;
//   }

//   userHistory = `${result} + ${sign}`
//   // console.log(next)
//   // console.log(getSign)
//   //  = Array.from(userHistory.value);
//   // return console.log(makeArr.)
// })
// symbols == false;


// dot.addEventListener('click', (e) => {
//   if (userInput.value.match(/[.]/)) {
//     e.preventDefault
//   } else {
//     return userInput.value += '.';
//   }
// });

// dblZero.addEventListener('click', (e) => {
//   if (userInput.value.test(/^[0]/)) {
//     e.preventDefault;
//   } else {
//     return userInput.value += '00';
//   }
// });

// zero.addEventListener('click', (e) => {
//   if (userInput.value.test(/^[0]/)) {
//     e.preventDefault;
//   } else {
//     return userInput.value += '0';
//   }
// });

// zero.addEventListener('click', (e) => {
//   // const getZero = /^0/;
//   // if (getZero.exec(userInput.value))
//   console.log(userInput.value.charCodeAt(0));
//   if (userInput.value.charCodeAt(0) === 48) {
//     e.target.value = '';
//     e.stopPropagation
//     userInput.value = null;
//   } else {
//     return userInput.value += 0;
//   }
// });


// add.addEventListener('click', (e) => {
//   const getValue = userHistory.value += +userInput.value + ' + ';
//   userInput.value = '';
//   return getValue;
// });

// sub.addEventListener('click', (e) => {
//   const getValue = userHistory.value += +userInput.value + ' - ';
//   userInput.value = '';
//   return getValue;
// });

// divide.addEventListener('click', (e) => {
//   const getValue = userHistory.value += +userInput.value + ' / ';
//   userInput.value = '';
//   return getValue;
// });

// multi.addEventListener('click', (e) => {
//   const getValue = userHistory.value += +userInput.value + ' * ';
//   userInput.value = '';
//   return getValue;
// });

// equal.addEventListener('click', (prev, next) => {
//   const userValue = userHistory.value;
//   const regEx = /[\'+'|\'-'|\'/'|\'*']/;
//   const getSum = userValue.match(regEx)
//   if (getSum === '+') {
//     addFn(prev, next)
//   } else if (getSum === '-') {
//     subFn(prev, next)
//   } else if (getSum === '/') {
//     divideFn(prev, next)
//   } else if (getSum === '*') {
//     multiFn(prev, next)
//   }
//   function addFn(a, b) {
//     return userHistory += a + b;
//   }
//   function subFn(a, b) {
//     return userHistory += a - b;
//   }
//   function divideFn(a, b) {
//     return userHistory += a / b;
//   }
//   function multiFn(a, b) {
//     return userHistory += a * b;
//   }
//   // const userValue = Array.from(userHistory.value);
//   // const getSum = userValue.split('');
//   // const 
//   console.log(getSum);
//   // return getSum.reduce((a, b) => {
//   //   const getSign = userHistory.value.splice(1, -1);
//   //   console.log(getSign)
//   // })
// })