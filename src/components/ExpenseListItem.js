import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'en-gb', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        var b = number % 10;
        return (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
    },
    currency: {
        symbol: '£'
    }
});

numeral.locale('en-gb');

const ExpenseListItem = ({ amount, createdAt, description, id }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do YYYY')}</span>
        </div>
        <div>
            <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
        </div>
    </Link>
);

export default ExpenseListItem;