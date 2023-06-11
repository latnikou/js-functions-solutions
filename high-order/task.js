// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
export default (users, amount = 1) => {
  const sortedUsers = users.sort((a, b) => Date.parse(a.birthday) - Date.parse(b.birthday));
  const result = [];
  for (let i = 0; amount !== 0; i += 1) {
    result.push(sortedUsers[i]);
    amount -= 1;
  }
  return result;
};
// END

// решение учителя
// // @ts-check

// import _ from 'lodash';

// // BEGIN
// const takeOldest = (users, count = 1) => {
//   const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
//   return sorted.slice(0, count);
// };

// export default takeOldest;
// // END