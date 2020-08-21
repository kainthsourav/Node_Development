const fs=require('fs');

// const book={
//     titte:'Looking for alaska',
//     author :'John Green'
// }

// const bookJson=JSON.stringify(book);
// console.log(bookJson);
// const bookobject=JSON.parse(bookJson);
// console.log(bookobject.titte);

// fs.writeFileSync('1-JSON.json',bookJson);

// const dataBuffer=fs.readFileSync('1-json.json')
// console.log(dataBuffer)
// const jsondata=dataBuffer.toString();
// console.log(jsondata);
// const data=JSON.parse(jsondata)
// console.log(data.titte)

const mydata=fs.readFileSync('1-json.json')
const data_str=mydata.toString();
const data=JSON.parse(data_str);
data.name="Sourav Kainth"
data.Age=25
const JsonData=JSON.stringify(data);
console.log(JsonData)
fs.writeFileSync('1-JSON.json',JsonData)



