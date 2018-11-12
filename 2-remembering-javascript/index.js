function processParams(p) {
    var result = p.reduce(function(sum, current) {
        return sum + +current;
    }, 0);
    console.log(p)
    console.log('Сумма: ' + result);
    console.log('Среднее арифметическое: ' + result / p.length);
};
processParams(process.argv.slice(2));