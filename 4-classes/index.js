const path = require('path');
const fs = require('fs');

const pathToFile = path.resolve(__dirname, 'products.csv');
const pathToJSON = path.resolve(__dirname, 'result.json');
const content = fs.readFileSync(pathToFile, 'utf8');

//console.log(content);
const prodArr = content.split(', ');
function Product(str){

    const arr = str.split(" ");
    this.price = {"rur":Number(arr[0]),"usd":Number(Number((arr[0])/68.28).toFixed(2))}
    this.prodName = arr[1];
    this.toString = function() {
        return JSON.stringify(this);
    };
    };

const products = prodArr.map(el => new Product(el));
//console.log(products);

fs.writeFileSync(pathToJSON, products, 'utf8');