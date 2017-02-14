"use strict";

let isNumberNonEmpty = (num) => Number.isInteger(num) ? num > 0 : num.length > 0;
let getLastDigit = (num) =>  Number.isInteger(num) ?
        [num % 10, Math.floor(num/10)] :
        [num[num.length - 1], num.substring(0,num.length - 1)].map((i) => +i);

let lookAndSay = (num, i) => i == 0 ? num : lookAndSay(lookAndSayUnary(num),i - 1);

function lookAndSayUnary(num) {
  let last;
  let curr;
  let destr;
  let result = '';
  let count = 0;
  let add = function() {
    result = count + '' + last + result;
    count = 1;
    last = curr;
  };
  while (isNumberNonEmpty(num)) {
    destr = getLastDigit(num);
    curr = destr[0]; num = destr[1];
    if (last === undefined) last = curr;
    if (curr != last) add();
    else count++;
  }
  if (count > 0) add();
  return result;
}

console.log(getLastDigit("3445"));
console.log(getLastDigit(3456));

console.log(lookAndSayUnary(1));
console.log(lookAndSayUnary(11));
console.log(lookAndSayUnary(44445));
console.log(lookAndSayUnary(111221)); //312211

console.log(lookAndSay(11,2)); // 1211
console.log(lookAndSay(111221,2)); // 13112221
