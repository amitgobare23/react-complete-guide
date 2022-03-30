import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) =>{
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expense.</h2>
    }

    return props.items.map((expense) => (
       (
        <ul className='expenses-list'>
            <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />
        </ul>
      )
    ));
}

export default ExpensesList;