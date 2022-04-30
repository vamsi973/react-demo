import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.expenseTitle);
    // const namechnage = () => {
    //     setTitle('value update')
    // }
    const deleteExpense = () => {
        props.onClickDeleteExpense(props._id)
    }
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate expenseDate={props.expenseDate} />
                <div className='expense-item__description'>
                    <h2>{props.expenseTitle}</h2>
                    <div className='expense-item__price'>{props.expenseAmount}</div>
                </div>
                <button className='custom-btn btn' onClick={deleteExpense}>Delete</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;


//props is used to transfer the data from component to another component.