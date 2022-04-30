import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter'
import React, { useState } from 'react';
import ExpenseList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');
    let filteredExpenses = props.items.filter(expenses => {
        return new Date(expenses.expenseDate).getFullYear().toString() === filteredYear
    })
    const filterChangeHandler = (filteredYear) => {
        setFilteredYear(filteredYear)
        props.items.filter(el => filteredYear === new Date(el.expenseDate).getFullYear().toString())
    }

    const expenseDeleteHandler = id => {
        props.onRemoveExpense(id);
    }
    // let ExpensesContent = <p>No Expense Found</p>
    // if (filteredExpenses.length > 0) {
    //     ExpensesContent = filteredExpenses.map((ele, index) => {
    //         return <ExpenseItem
    //             key={ele._id}
    //             expenseAmount={ele.expenseAmount}
    //             expenseTitle={ele.expenseTitle}
    //             expenseDate={ele.expenseDate}
    //         />
    //     })
    // }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onChnageFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpenseList items={filteredExpenses} onDeleteExpenseItem={expenseDeleteHandler} />
            </Card>
        </div>
    );
}

export default Expenses;


//other ways to write code
{/* {ExpensesContent} */ }
{/* {filteredExpenses.length === 0 && <p>No Expense Found</p>}
                {filteredExpenses.length > 0 && filteredExpenses.map((ele, index) => {
                    return <ExpenseItem
                        key={ele._id}
                        expenseAmount={ele.expenseAmount}
                        expenseTitle={ele.expenseTitle}
                        expenseDate={ele.expenseDate}
                    />
                })} */}
{/* {
                    filteredExpenses.length === 0 ? (
                        <p>No Expense Found</p>
                    ) : (
                        filteredExpenses.map((ele, index) => {
                            return <ExpenseItem
                                key={ele._id}
                                expenseAmount={ele.expenseAmount}
                                expenseTitle={ele.expenseTitle}
                                expenseDate={ele.expenseDate}
                            />
                        })
                    )
                } */}