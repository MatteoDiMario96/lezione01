console.log('Hello Wolrd!');
function somma(a, b) {
    return a + b;
}
;
console.log(somma(1, 2));
console.log(somma(1, 5));
function arrayEven(array) {
    var arrayEven = array.filter(function (element) { return element % 2 === 0; });
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return arrayEven;
}
function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(arrayEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(arrayEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
