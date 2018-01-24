const fs = require("fs");
let data = require("./companies.json");

const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({ [item[keyField]]: item })));

const companies = arrayToObject(data, "name");
const output = { companies };
console.log(output);
fs.writeFileSync("./companies.json", JSON.stringify(output, null, 4));
