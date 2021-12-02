import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const expenseAddHandler = expenseData => {
        const expenses = {...expenseData}
        // console.log(expenses);
        props.onAddData(expenses);
    }


return <div className="new-expense">
    <NewExpenseForm onExpenseAdd = {expenseAddHandler}/>
</div>
};
export default NewExpense;