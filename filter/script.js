// @ts-check
// BEGIN (write your solution here)
export default (users) => {
  const friends = users.map((user) => user.friends).flat();
  const girlfriends = friends.filter((friend) => friend.gender === 'female');
  return girlfriends;
};
// END
