function processParams(p) {
    let sum = 0;
    let aver = 0;
    for (let i = 0; i < p.length; i++) {
        sum = sum + +p[i];
    }
    aver = sum / p.length;
    console.log(p);
    console.log('Сумма: ' + sum);
    console.log('Среднее арифметическое: ' + aver);
};
processParams(process.argv.slice(2));