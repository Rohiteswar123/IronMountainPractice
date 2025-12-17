import { useSelector } from "react-redux";

const TotalExpense = () => {
  const total = useSelector(state =>
    state.expenses.list.reduce((sum, exp) => sum + exp.amount, 0)
  );

  return <h3 className="total">Total: ₹{total}</h3>;
};

export default TotalExpense;
