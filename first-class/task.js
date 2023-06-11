// @ts-check

const run = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (str, n) => {
    if (str.length === 0 || n > str.length) {
      return null;
    }
    return str.split('').reverse().slice(0, n).join('');
  };
  // END

  return takeLast(text, 4);
};

export default run;

//https://ru.hexlet.io/courses/js-functions/lessons/first-class-citizen/exercise_unit