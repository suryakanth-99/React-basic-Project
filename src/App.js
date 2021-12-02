import ExpenseItemData from './components/Expenses/ExpenseItemData';
import NewExpense from './components/NewExpenses/NewExpense';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 7, 15),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Plastic)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const DataAddHandler = expense =>
  {
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddData = {DataAddHandler} />
      <ExpenseItemData expenses = {expenses}></ExpenseItemData>
     
    </div>
   
  );
}

export default App;
