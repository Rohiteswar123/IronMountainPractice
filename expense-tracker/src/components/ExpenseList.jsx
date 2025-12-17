import { useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = useSelector(state => state.expenses.list);

  if (expenses.length === 0) {
    return <p className="empty">No expenses added</p>;
  }

  return (
    <div className="expense-list">
      {expenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </div>
  );
};

export default ExpenseList;
