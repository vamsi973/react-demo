
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter'
import React, { useState } from 'react'
// const dummyExpensesArr = [
//   { expenseDate: new Date(2020, 3, 19), expenseAmount: 10, expenseTitle: 'Rent', _id: 1 },
//   { expenseDate: new Date(2021, 3, 19), expenseAmount: 110, expenseTitle: 'Phone', _id: 2 },
//   { expenseDate: new Date(2022, 3, 19), expenseAmount: 140, expenseTitle: 'Vamsik', _id: 3 }
// ];
const dummyExpensesArr = JSON.parse(localStorage.getItem('expenses')) || [];
function App() {
  const [expenses, setExpenses] = useState(dummyExpensesArr);

  const expenseHandler = (expense) => {
    setExpenses((exp) => {
      return [expense, ...exp]
    })
  }

  return (
    <div>
      <NewExpense onAddExpenseHandler={expenseHandler} />
      <Expenses items={expenses} />
    </div >
  );
}

export default App;
