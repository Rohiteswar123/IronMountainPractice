import './App.css';
import AddExpense from './components/Addexpense';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Expense Tracker</h1>
      <AddExpense />
      <TotalExpense />
      <ExpenseList />
    </div>
  );
}

export default App;

