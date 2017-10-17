import selectExpensesTotal from '../../selectors/expenses-total.js';

import expenses from '../fixtures/expenses';

test('should total expenses in given array of multiple values', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});

test('should total expenses in given array of a single values', () => {
    const result = selectExpensesTotal([expenses[1]]);
    expect(result).toBe(109500);
});

test('should return 0 for no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});