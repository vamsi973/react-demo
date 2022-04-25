import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expenseTitle);

    const namechnage = () => {
        setTitle('value update')
    }
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate expenseDate={props.expenseDate} />
                <div className='expense-item__description'>
                    <h2>{props.expenseTitle}</h2>
                    <div className='expense-item__price'>{props.expenseAmount}</div>
                </div>
                <button onClick={namechnage}>Buton Title</button>

            </Card>
        </li>
    );
}

export default ExpenseItem;


//props is used to transfer the data from component to another component.