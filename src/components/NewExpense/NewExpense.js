import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const uuidv4 = () => {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
      
    const saveExpenseDataHandler = expense => {
        const expenseData = {
            ...expense,
            id: uuidv4()
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