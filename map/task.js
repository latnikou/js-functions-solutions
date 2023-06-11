// @ts-check

// BEGIN (write your solution here)
export default (users) => {
  const children = users.map((user) => user.children);
  return children.flat();
};
// END

