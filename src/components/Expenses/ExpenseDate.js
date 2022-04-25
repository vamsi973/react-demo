import './ExpenseDate.css'
function ExpenseDate(props) {
    const month = new Date(props.expenseDate).toLocaleString('en-us', { month: 'long' });
    const day = new Date(props.expenseDate).toLocaleString('en-us', { day: '2-digit' });
    const year = new Date(props.expenseDate).getFullYear();
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;