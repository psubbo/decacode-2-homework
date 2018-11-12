
const fs = require('fs');
const path = require('path');
const pathToJSON = path.resolve(__dirname, 'index.json');

const db = {
// Работает
  get: (callback) => {
    fs.readFile(pathToJSON, 'utf8', (error, contents) => {
      callback(JSON.parse(contents));
    });
  },
// Работает
  save: data => {
    fs.readFile(pathToJSON, 'utf8', (error, contents) => {
        const newJson = JSON.parse(contents).concat([data]);
        fs.writeFile(pathToJSON, JSON.stringify(newJson, '', 2), 'utf8', () => { 
            fs.readFile(pathToJSON, 'utf8', (error, contents) => {
                console.log(JSON.parse(contents))
            });
        });        
    });    
  },
// Работает
  update: (id, request) => {
    fs.readFile(pathToJSON, 'utf8', (error, contents) => {
        let data = JSON.parse(contents);
        
        let updatedData = data.map(el => {
          console.log(el);
          if (el.id == id) {
            return {
              id : request.id,
              title : request.title,
              count : parseInt(request.count)
          }
        } else {
          return el;
        }
      });
        console.log(updatedData);
        fs.writeFile(pathToJSON, JSON.stringify(updatedData, '', 2), 'utf8', (error, contents) => {
            console.log("Изменен элемент с id " + id);
        });
      });

  },
// Работает
  remove: id => {
  fs.readFile(pathToJSON, 'utf8', (error, contents) => {
    const data = JSON.parse(contents);
    const updatedData = data.filter(el => el.id !== id)

    fs.writeFile(pathToJSON, JSON.stringify(updatedData, '', 2), 'utf8', (error, contents) => {
        console.log("Удален элемент с id " + id);
    });
  });
  },
};

module.exports = db;