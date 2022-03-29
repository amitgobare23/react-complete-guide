import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = expense => {
        props.onAddNewExpense(expense);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate={onSaveExpenseDataHandler}/>
        </div>

    );
}

export default NewExpense;