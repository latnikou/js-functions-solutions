// @ts-check

// BEGIN (write your solution here)
export default (arr, prop) => {
  if (arr.length === 0) {
    return {};
  }
  const result = arr.reduce((acc, user) => {
    if (!Object.hasOwn(acc, user[prop])) {
      acc[user[prop]] = [];
    }
    acc[user[prop]].push(user);
    return acc;
  }, {});
  return result;
};
// END

