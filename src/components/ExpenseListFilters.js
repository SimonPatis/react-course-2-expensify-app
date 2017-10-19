import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onSortChange = (e) => {
        e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate();
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search expenses"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="amount">Amount</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            endDate={this.props.filters.endDate}
                            focusedInput={this.state.calendarFocused}
                            isOutsideRange={() => false}
                            onDatesChange={this.onDatesChange}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            showClearDates={true}
                            startDate={this.props.filters.startDate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate())
});

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);