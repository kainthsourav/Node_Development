// const fs=require('fs');

//fs.writeFileSync('notes.txt','This is file created by node');

// fs.appendFileSync('notes.txt',' Appened text ')

// const add=require('./utiles');
// const notes=require('./notes');

// const sum=add(4,4);
// console.log(sum);
// const n=notes();
// console.log(n);

const validator=require('validator');

console.log(validator.isEmail('souravkainth@outlo'));

console.log(validator.isURL('https://zinny.com'));