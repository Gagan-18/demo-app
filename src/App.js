import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Rent',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Utility Bills', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    }
  ];
  const saveExpenseDataHandler = (ed) => {
    const expenseData = {...ed};
    console.log(expenseData);
  }

  return (
    <div>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
