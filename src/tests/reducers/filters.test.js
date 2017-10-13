import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        endDate: moment().endOf('month'),
        sortBy: 'date',
        startDate: moment().startOf('month'),
        text: ''
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        endDate: moment().endOf('month'),
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        text: ''
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filer', () => {
    const text = 'this is my filter';
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toEqual('this is my filter'); 
});

test('should set start date filter', () => {
    const startDate = moment().startOf('month');
    const action = { type: 'SET_START_DATE', startDate };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment().startOf('month'));  
});

test('should set end date filter', () => {
    const endDate = moment().endOf('month');
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment().endOf('month'));  
});