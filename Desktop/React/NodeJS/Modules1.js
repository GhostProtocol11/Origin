const path=require('path');
// console.log(__filename);
// console.log(__dirname);

// path.basename('C:/Users/Dope Fiend/Desktop/React/NodeJS');
// console.log(__filename);

path.extname(__dirname);
path.parse(__filename);
let pathobj =path.parse(__filename);
console.log(pathobj.name);
console.log(path.delimeter);
console.log(path.sep);