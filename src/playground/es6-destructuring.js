// 
// Object Destructuring 
// 

// const person = {
//     name: 'Simon',
//     age: 38,
//     location: {
//         city: 'Corby',
//         temp: 13
//     }
// };

// const {name = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Assassin\'s Creed Unity',
//     author: 'Oliver Bowden',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// 
// Array Destructuring 
// 

// const address = ['24 Gardner Road', 'Burton Latimer', 'Kettering', 'NN15 5XQ'];

// const [, city, county] = address;

// console.log(`You are in ${city}, ${county}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);