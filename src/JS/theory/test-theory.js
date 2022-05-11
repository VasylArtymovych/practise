// Method filter:  
const array = [1,2,3,4,5,6,7,8,9,0];

function inBetween(a, b){
    
    return function (el){
        return el >=a && el <= b;
    }
}
console.log(array.filter(inBetween(5, 7)));

function inArray(arr){
    
    return function (el){
        return arr.includes(el);
    }
}
console.log(array.filter(inArray([1,3,7])));

// Method sort: 
let users = [
    { name: "Іван", age: 20, surname: "Іванов" },
    { name: "Петро", age: 18, surname: "Петров" },
    { name: "Енн", age: 19, surname: "Гетевей" }
];

function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

//За ім’ям (Енн, Іван, Петро)
console.log(users.sort(byField('name')));
// За віком (Петро, Енн, Іван)
// console.log(users.sort(byField('age')));