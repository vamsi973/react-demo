import './ExpenseFilter.css'
const ExpenseFilter = (props) => {
    const selectedFilterChange = (event) => {
        console.log(event.target.value);
        props.onChnageFilter(event.target.value)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={selectedFilterChange}>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    );
}
export default ExpenseFilter;