const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const data = fs.readFileSync(pathToJSON, 'utf8');

let users = JSON.parse(data);

function findPainters(p){
    let painters = new Array();
    p.forEach(function(item, i, arr) {
        if ( p[i].skills.indexOf("Paint") != -1 ){
            painters.push(p[i].name); 
        };
      });
return painters;
}

function countAverageAge (p){
   let sumAge = new Number();
    p.forEach(function(item, i, arr) {
        sumAge = sumAge + Number(p[i].age);

      });
   let average = sumAge / p.length;
   return average;
}

function createList (p){
    let stringUsers = new String();
    p.forEach(function(item, i, arr) {
        stringUsers = stringUsers + p[i].age + " " + p[i].name + ", ";
      });
return stringUsers.slice(0, -2);
};

console.log('Количество пользователей: ' + users.length);
console.log('Средний возраст пользователей: ' + countAverageAge(users));
console.log('Все пользователи: ' + createList(users));
console.log('Художники:  - ' + findPainters(users));