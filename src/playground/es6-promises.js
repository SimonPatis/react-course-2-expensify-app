const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Simon',
            age: 38
        });
        // reject('Something went wrong')
    }, 1500);
});

console.log('Before');

// // Using catch
// promise.then((data) => {
//     console.log('1', data);
// }).catch((error) => {
//     console.log('Error: ', error);
// });

// Promise chaining
promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 1500);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('Error: ', error);
});

// // Implied catch
// promise.then(
//     (data) => { console.log('1', data); }, 
//     (error) => { console.log('Error: ', error); }
// );

console.log('After');