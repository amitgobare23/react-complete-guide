import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const saveExpenseDataHandler = expense => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
          };
        props.onAddNewExpense(expenseData);
        setIsFormOpen(false);
    }

    const addNewExpenseBtnClickHandler = () => {
        setIsFormOpen(true);
      }

    const cancleBtClickHandler = () => {
        setIsFormOpen(false);
    }  

    return(
            <div className='new-expense'>
                {!isFormOpen && <button onClick={addNewExpenseBtnClickHandler}>Add New Expense</button>}
                {isFormOpen &&<ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onCancel={cancleBtClickHandler}/>}
            </div>
    );
}

export default NewExpense;