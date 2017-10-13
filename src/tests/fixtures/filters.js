import moment from 'moment';

const filters = {
    endDate: undefined,
    sortBy: 'date',
    startDate: undefined,
    text :''
};

const altFilters = {
    endDate: moment(0).add(3, 'days'),
    sortBy: 'amount',
    startDate: moment(0),
    text :'bills'
};

export { filters, altFilters };