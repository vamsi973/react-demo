import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'

const NewExpense = (prop) => {
    const unique_id = uuid();
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseData = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            _id: unique_id
        }
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