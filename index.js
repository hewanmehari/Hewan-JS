let text = `The child walked to the market`;
console.log(text.charAt(0).toUpperCase() + text.slice(1));

let word = 'I lve you';
let charToAdd = 'o';
let index = 3;
console.log(word.slice(0, index) + charToAdd + word.slice(index));

let greeting = 'hello world, hello JavaScript';
let count = (greeting.match(/hello/g) || []).length
console.log(count);

let home = 'home';
let lastChar = home.slice(-3);
console.log({lastChar});

let firstChar = home.slice(0,3);
console.log({firstChar});

let me = 'i want coffee';
let sorted = me.split('').sort().join('');
console.log({sorted});

let noSpace = me.replace(/\s+/g, '');
console.log(noSpace);

let hello = 'greeting';
let indexText = hello.indexOf('t');
console.log(indexText);

let firstTwoChar = hello.slice(2);
console.log(firstTwoChar);

let lastTwoChar = hello.slice(0, -2);
console.log(lastTwoChar);




 