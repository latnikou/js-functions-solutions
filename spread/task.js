/* 
Реализуйте функцию, которая конвертирует даты в массив человеко-читаемых строк на английском языке. Каждая из дат представлена массивом [2001, 10, 18], в котором первый элемент — это год, второй — месяц, и третий — число. Функция на вход должна принимать любое количество параметров. Если в функцию ничего не было передано, она должна вернуть пустой массив. Экспортируйте функцию по умолчанию.

Примеры:
convert();
// []
 
convert([1993, 3, 24]);
// ['Sat Apr 24 1993']
 
convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']
Подсказки
Для работы с датами воспользуйтесь объектом new Date() и его методом toDateString()
*/

// моё
// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export const convert = (...dates) => {
    if (dates.length === 0) {
      return [];
    }
    const result = [];
    for (const date of dates) {
      const newDate = new Date(date[0], date[1], date[2]);
      result.push(newDate.toDateString());
    }
    return result;
  };
  
  export default convert;
  // END


  // его
  /* 
  export default (...coll) => {
  const formattedDates = [];

  for (const item of coll) {
    const date = new Date(...item);
    const formattedDate = date.toDateString();
    formattedDates.push(formattedDate);
  }

  */