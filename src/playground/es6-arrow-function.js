// const square = function(x) {
//     return x * x;
// }

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(3));

const fullName = 'Andrew Mead';
const getFirstName = (x) => {
    return x.split(' ')[0];
}
const getLastNameArrow = (x) => x.split(' ')[1];

console.log(getFirstName(fullName));
console.log(getLastNameArrow(fullName));