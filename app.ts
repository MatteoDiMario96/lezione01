console.log('Hello Wolrd!');

function somma(a :number, b: number): number{
    return a + b;
};

console.log(somma(1, 2));
console.log(somma(1, 5));


function arrayEven(array:Array<number>){
    return array.filter(element => element % 2 === 0);
}

function arraySum(array:Array<number>){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum +=array[i];
    }
    
    return sum;
}

console.log(arrayEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(arrayEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16]));

console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16]));