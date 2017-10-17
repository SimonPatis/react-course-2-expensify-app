import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };








// Firebase Reference

// // child_removed - Event based
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed - Event based
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// Fresh data Example
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// Subscription Example
// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     }, (error) => {
//         console.log('Error fetching data', error);
//     });    

// database.ref('expenses').push({
//     amount: 1095.00,
//     createdAt: 9846513,
//     description: 'Rent',
//     note: 'Note of the rent expense'
// });

// database.ref().on('value', (snapshot) => {
//     const sub = snapshot.val();
//     console.log(`${sub.name} is a ${sub.job.title} at ${sub.job.company}`);
// }, (error) => {
//     console.log('Error fetching data', error);
// });

// setTimeout(() => {
//     database.ref('name').set('Simon');
// }, 3500);

// *********************************************** Tactics

// Create Tactics
// database.ref().set({
//     name: 'Simon Patis',
//     age: 38,
//     stressLevel: 9,
//     job: {
//         title: 'Software Developer',
//         company: 'AGM'
//     },
//     location: {
//         city: 'Kettering',
//         country: 'United Kingdom'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed.', error);
// });

// Read Tactics
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error)
//     }
// );

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log('Error fetching data', error);
// });

// setTimeout(() => {
//     database.ref('age').set(39);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(40);
// }, 10500);


// Update Tactics
// database.ref().set("this is my data");

// database.ref('age').set(39);
// database.ref('location/city').set('Burton Latimer');

// database.ref('attributes').set({
//     height: 174,
//     weight: 200
// }).then(() => {
//     console.log('Attributes updated');
// }).catch((error) => {
//     console.log('Request failed.', error);
// });

// database.ref().update({
//     stressLevel: 3,
//     'job/company': 'Anywhere else',
//     'location/city': 'Birmingham'
// }).then(() => {
//     console.log('Update successful');
// }).catch((error) => {
//     console.log('Update failed:', error)
// });

// Delete Tactics
// database.ref()
// .remove().then(() => {
//     console.log('Data removed successfully!')
// }).catch((error) => {
//     console.log('Removed failed:', error);
// });

// database.ref('isSingle').set(null); // Another Remove tactic.