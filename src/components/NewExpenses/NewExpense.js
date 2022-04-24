import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';
var globalId = 1;
const NewExpense = (prop) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseData = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            _id: globalId + 1
        }
        console.log(expense)
        prop.onAddExpenseHandler(expense)
    }
    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditing = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}> Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseData} onCancel={stopEditing} />}
        </div>
    );
}
export default NewExpense;