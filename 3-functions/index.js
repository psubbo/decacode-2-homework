const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const data = fs.readFileSync(pathToJSON, 'utf8');

let users = [{
    "name": "Domenico Alfani",
    "age": 35,
    "skills": ["Paint", "Theatre"]
  }, {
    "name": "Pietro Annigoni",
    "age": 19,
    "skills": ["Music"]
  }, {
    "name": "Jacopo Bassano",
    "age": 24,
    "skills": ["Paint", "Philisophy"]
  }, {
    "name": "Giovanni di Paolo",
    "age": 47,
    "skills": ["Paint", "Music"]
  }, {
    "name": "Francesco Hayez",
    "age": 20,
    "skills": ["Music", "Theatre"]
  }, {
    "name": "Ulvi Liegi",
    "age": 30,
    "skills": ["Paint"]
  }]

//let users = JSON.parse(data);


function countAverageAge (p){
   let sumAge = 0;
    p.forEach(function(item, i, arr) {
        sumAge = sumAge + Number(p[i].age);

      });
   let average = sumAge / p.length;
   return average;
}

function createList (p){
    let stringUsers = "";
    p.forEach(function(item, i, arr) {
        stringUsers = stringUsers + p[i].age + " " + p[i].name + ", ";
      });
return stringUsers.slice(0, -2);
}

console.log('Количество пользователей: ' + users.length);
console.log('Средний возраст пользователей: ' + countAverageAge(users));
console.log(createList(users));

// your code...
// console.log(count);
// console.log(averageAge);