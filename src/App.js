
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';
import React, { useState } from 'react'

const dummyExpensesArr = JSON.parse(localStorage.getItem('expenses')) || [];
function App() {
  const [expenses, setExpenses] = useState(dummyExpensesArr);

  const expenseHandler = (expense) => {
    setExpenses((exp) => {
      console.log(exp, 13);
      console.log(expense, 15)
      let temp = [expense, ...exp]
      localStorage.setItem('expenses', JSON.stringify(temp))
      return [expense, ...exp]
    })
  }

  const expenseRemoveHandler = (id) => {
    setExpenses((exp) => {
      let filter =exp.filter(item => item._id !== id);
      localStorage.setItem('expenses', JSON.stringify(filter))
      return exp.filter(item => item._id != id);
    })

  }

  return (
    <div>
      <NewExpense onAddExpenseHandler={expenseHandler} />
      <Expenses items={expenses} onRemoveExpense={expenseRemoveHandler} />
    </div >
  );
}

export default App;
