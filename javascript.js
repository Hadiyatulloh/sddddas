// let fruits = ['olma', 'nok', 'banan'];
// for (let element of fruits) {
//     console.log(element);
// }


// fruits.sort();
// copnsole.log(fruits);

// let number = [1, 2, 3, 4, 5, 6, 0, ]
// number.reverse();
// console.log(number);


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }aa

// let i = 1;
// while (i < 5) {
// }
// Array yaratamiz
let words = ["nashr", "nom", "nok", "apple", "banana", "grape", "orange"];

let withN = [];
let withoutN = [];

for (let word of words) {
    if (word.includes('n')) {
        if (withN.length < 100) {
            withN.push(word);
        }
    } else {
        if (withoutN.length < 100) {
            withoutN.push(word);

        }
    }
}

// Natijalarni chiqaramiz
console.log("3 ta element 'n' harfi bilan:", withN);
console.log("4 ta element 'n' harfisiz:", withoutN);