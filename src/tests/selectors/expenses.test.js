import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        endDate: undefined,
        sortBy: 'date',
        startDate: undefined,
        text: 'e'
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1]]);
});

test('should filter by start date', () => {
    const filters = {
        endDate: undefined,
        sortBy: 'date',
        startDate: moment(0),
        text: ''
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
    const filters = {
        endDate: moment(0).add(2, 'days'),
        sortBy: 'date',
        startDate: undefined,
        text: ''
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1]]); 
});

test('should sort by date', () => {
    const filters = {
        endDate: undefined,
        sortBy: 'date',
        startDate: undefined,
        text: ''
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const filters = {
        endDate: undefined,
        sortBy: 'amount',
        startDate: undefined,
        text: ''
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[2], expenses[0]]);
});