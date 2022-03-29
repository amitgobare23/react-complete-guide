import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import '../Expenses/Expenses.css'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const onChangeFilterByYearHandler = (yearValue) => {
      console.log('Expenses.js file')
      console.log('year: ', yearValue);
    }

    return (
        <Card className='expenses'>
          <ExpensesFilter onChangeFilterByYear={onChangeFilterByYearHandler}></ExpensesFilter>
          <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
          <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
          <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
          <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
        </Card>
      );
}

export default Expenses;