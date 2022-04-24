import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter'
import React, { useState } from 'react';
import ExpenseList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022')
    const filterChangeHandler = (filteredYear) => {
        console.log("filter handler", filteredYear);
        setFilteredYear(filteredYear)
        props.items.filter(el => filteredYear === el.expenseDate.getFullYear().toString())
    }
    const filteredExpenses = props.items.filter(expenses => {
        return expenses.expenseDate.getFullYear().toString() === filteredYear
    })
    let ExpensesContent = <p>No Expense Found</p>
    if (filteredExpenses.length > 0) {
        ExpensesContent = filteredExpenses.map((ele, index) => {
            return <ExpenseItem
                key={ele._id}
                expenseAmount={ele.expenseAmount}
                expenseTitle={ele.expenseTitle}
                expenseDate={ele.expenseDate}
            />
        })
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onChnageFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpenseList items={filteredExpenses} />
                {/* {ExpensesContent} */}
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
            </Card>
        </div>
    );
}

export default Expenses;