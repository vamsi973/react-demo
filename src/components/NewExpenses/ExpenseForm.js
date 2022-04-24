import './ExpenseForm.css'
import React, { useState } from 'react'

const ExpenseForm = (props) => {
    //  multi state 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //single state
    // const [userInputState, setUserInputState] = useState({
    //     enteredTitle: '', enteredAmount: '', enteredDate: ''
    // })
    

    const titileChangeHandler = (event) => {
        console.log("title handler", event.target.value);

        setEnteredTitle(event.target.value)
        /* alternative function */
        // setUserInputState({
        //     ...userInputState,
        //     enteredTitle: event.target.value
        // })
        /* alternative function */
        // setUserInputState((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    }

    const amountChnageHandler = (event) => {
        console.log('amunt handler', event.target.value)
        setEnteredAmount(event.target.value)
        // setUserInputState({
        //     ...userInputState,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        console.log('date handler', event.target.value)
        setEnteredDate(event.target.value)
        // setUserInputState({
        //     ...userInputState,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            expenseTitle: enteredTitle,
            expenseAmount: +enteredAmount,
            expenseDate: new Date(enteredDate)
        }
        props.onSaveExpenseDate(expenseData);
        console.log(expenseData, 55)
        setEnteredTitle('');setEnteredAmount('');setEnteredDate('');

    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titileChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amunt</label>
                    <input type='number' value={enteredAmount} min='1' step='1' onChange={amountChnageHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2022-01-01" value={enteredDate} max='2024-01-20' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;