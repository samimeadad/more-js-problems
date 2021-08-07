function removeDuplicate(arr){
    let unique = [];
    for(const element of arr){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

let myArr = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'cabul', 'abul', 'fabul', 'dabul', 'gabul', 'abul', 'habul', 'jabul', 'babul', 'ebul'];

console.log("*****ENTIRE ARRAY*****");
console.log(myArr);

let myUniqueArr = removeDuplicate(myArr);
console.log("*****ALL CLEAN NUMBERS*****");
console.log(myUniqueArr);