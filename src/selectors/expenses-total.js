function doSum(total, num) {
    return total + num;
}

// Get visible expenses
export default (expenses = []) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};