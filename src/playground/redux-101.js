import { createStore } from 'redux';

// Action generators - functions that return action objects.

// const add = ({a, b}, c) => {
//     return a + b + c;
// };
// console.log(add({ a:1, b:12}, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions - Output only determined by inputs.
// 2. Never change state or action.

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            };
        case 'SET' :
            return {
                count: action.count
            };
        case 'RESET' :
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// I'd like to increment the count 
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// I'd like to increment the count 
// store.dispatch({
//     type: 'INCREMENT'
// });

// I'd like to reset the count to zero
// store.dispatch({
//     type: 'RESET'
// });

// // I'd like to decrement the count
// store.dispatch({
//     type: 'DECREMENT'
// });

// // I'd like to decrement the count
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));