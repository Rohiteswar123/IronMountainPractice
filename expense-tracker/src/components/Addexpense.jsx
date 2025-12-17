import { useDispatch } from 'react-redux';
import { addExpense } from '../features/expenses/expenseSlice';

const AddExpense = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: Date.now(),
      title: e.target.title.value,
      amount: Number(e.target.amount.value),
      category: e.target.category.value,
    };

    dispatch(addExpense(expense));
    e.target.reset();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" required />
      <input name="amount" type="number" placeholder="Amount" required />

      {/* Category Dropdown */}
      <select name="category" required>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Rent">Rent</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
