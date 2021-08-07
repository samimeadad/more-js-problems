//Largest number in an array
function findMax(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

function findSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function findAvg(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

function findOdd(arr){
    let odd = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            odd.push(arr[i])
        }
    }
    return odd;
}

function findEven(arr){
    let even = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            even.push(arr[i]);
        }
    }
    return even;
}

let myArr = [];
let n = 20;

for(let i = 0; i < n; i++){
    myArr[i] = Math.round(Math.random()*100);
}

console.log("*****ALL ARRAY CONTENT*****");
console.log(myArr);

let myMax = findMax(myArr);
console.log("*****MAXIMUM NUMBER*****");
console.log(myMax);

let myMin = findMin(myArr);
console.log("*****MINIMUM NUMBER*****");
console.log(myMin);

let mySum = findSum(myArr);
console.log("*****SUMMATION*****");
console.log(mySum);

let myAvg = findAvg(myArr);
console.log("*****AVERAGE*****");
console.log(myAvg);

let myOdd = findOdd(myArr);
console.log("*****ALL ODD NUMBERS*****");
console.log(myOdd);

let myEven = findEven(myArr);
console.log("*****ALL EVEN NUMBERS*****");
console.log(myEven);