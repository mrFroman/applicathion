//type error.

// const number = 5;
// const num = number(12);
    

//reference error.

// const number = (aNumber) => {
//     if ('aNumber') {
//         return 0;
//     }
// };

// console.log('Сумма чисел: ', snumber (15));

//syntax error.

// const number = (aNumber) => {
//     if ('aNumber';) {
//         return 0;
//     }
// };

// console.log('Сумма чисел: ', number (15));

//logic error

const fahrToCelsius = (fahr) => {
    return fahr - 32 * 5/9;
  }

console.log('градусов цельсия ', fahrToCelsius(20));