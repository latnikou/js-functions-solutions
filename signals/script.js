// @ts-check

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN (write your solution here)
export default (emails) => {
  const result = emails.reduce((acc, email) => {
    const cut = email.split('');
    const index = cut.indexOf('@');
    const domain = email.slice(index + 1, email.length);
    if (freeEmailDomains.includes(domain)) {
      if (!Object.hasOwn(acc, domain)) {
        acc[domain] = 0;
      }
      acc[domain] += 1;
    }
    return acc;
  }, {});
  return result;
};

// END
