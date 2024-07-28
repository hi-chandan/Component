const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "banana",
];

const count = fruits.reduce((accumulator: any, currentValue: any) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(count);

console.log(Object.keys(count));
