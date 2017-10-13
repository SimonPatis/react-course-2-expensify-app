import moment from 'moment';

export default [
    {
        id: '1',
        amount: 195,
        createdAt: 0,
        description: 'Gum',
        note: ''
    }, {
        id: '2',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        description: 'Rent',
        note: ''
    }, {
        id: '3',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf(),
        description: 'Credit Card',
        note: ''
    }
];