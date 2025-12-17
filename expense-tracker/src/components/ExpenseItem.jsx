import { useDispatch } from "react-redux";
import { deleteExpense } from "../features/expenses/expenseSlice";

const ExpenseItem = ({ expense }) => {
  const dispatch = useDispatch();

  return (
    <div className="expense-item">
      <span>
        {expense.title} - ₹{expense.amount} ({expense.category})
      </span>
      <button onClick={() => dispatch(deleteExpense(expense.id))}>
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
