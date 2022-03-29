import React, {useState} from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [year, setYear] = useState('');

    const onSelectedItemHandler = (event) => {
        setYear(event.target.value);
    }

    props.onChangeFilterByYear(year);

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={onSelectedItemHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;