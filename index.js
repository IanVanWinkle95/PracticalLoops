// ----------Part 1----------


// function fizzBuzz(num) {
//     for (i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//         else if (i % 3 === 0) console.log("Fizz");
//         else if (i % 5 === 0) console.log("Buzz");
//         else console.log(i);
//     }
// }
// console.log(fizzBuzz(100));


// -------------Part2--------------


// const n = 24

// function isPrime(num) {
//     if (num <= 1) return false;
//         for (let i = 2; i * i <= num; i++) {
//             if (num % i === 0) return false;
//         }
//     return true;
// }

// let nextPrime = n;
//     while (true) {
//         if (isPrime(nextPrime)) {
//             console.log(`The next prime number after ${n} is ${nextPrime}`);
//             break;
//         }
//     nextPrime++;
// }


// ---------------Part3---------------

let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
let cell = "";
let row = [];

for (let i = 0; i < str.length; i++) {
        if (str[i] === ",") {
        row.push(cell);
        cell = "";
    } else if (str[i] === "\n") {
        row.push(cell);
        console.log(...row);
        cell = "";
        row = [];
    } else {
        cell += str[i];
    }
}

if (cell) {
    row.push(cell);
    console.log(...row);
}