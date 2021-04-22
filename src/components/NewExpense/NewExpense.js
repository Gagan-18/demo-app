import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const isEditingHandler = () => {
        setIsEditing(true)
    };
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
  return (
    <div className='new-expense'>
       {!isEditing && <button onClick={isEditingHandler}>Add Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData={props.onSaveExpenseData} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
