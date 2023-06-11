/* 
math.js
Реализуйте и экспортируйте по умолчанию функцию, которая возвращает среднее арифметическое всех переданных аргументов. Если функции не передать ни одного аргумента, то она должна вернуть null.

Примеры
average(0); // 0
average(0, 10); // 5
average(-3, 4, 2, 10); // 3.25
average(); // null
Подсказки
Используйте функцию sum из библиотеки lodash.
*/

// моё решение 
export const average = (...args) => {
    if (args.length === 0) {
      return null
    }
    let result = 0;
    for (const item of args) {
      result += item
    }
    return (result/args.length)
  }


// тичерское 

// @ts-check

import _ from 'lodash';

// BEGIN
const average = (...numbers) => {
  const count = numbers.length;

  if (count === 0) {
    return null;
  }

  return _.sum(numbers) / count;
};

export default average;
// END