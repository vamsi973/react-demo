import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'> No Expenses Found</h2>
    }
    const deleteExpenseItem = (id) => {
        props.onDeleteExpenseItem(id);
    }
    return (
        <ul className='expenses-list'>
            {
                props.items.map((ele, index) => {
                    return <ExpenseItem
                        key={ele._id}
                        expenseAmount={ele.expenseAmount}
                        _id={ele._id}
                        expenseTitle={ele.expenseTitle}
                        expenseDate={ele.expenseDate}
                        onClickDeleteExpense={deleteExpenseItem}
                    />
                })
            }
        </ul>

    )
}

export default ExpenseList;