function lookAndSay(num) {
  "use strict";
  let last;
  let curr;
  let result = '';
  let count = 0;
  let add = function() {
    result = count + '' + last + result;
    count = 1;
    last = curr;
  };
  while (num > 0) {
    curr = num % 10;
    num = Math.floor(num/10);
    if (last === undefined) last = curr;
    if (curr != last) add();
    else count++;
  }
  if (count > 0) add();
  return result;
}

console.log(lookAndSay(1));
console.log(lookAndSay(11));
console.log(lookAndSay(44445));
console.log(lookAndSay(111221));
