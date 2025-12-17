import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.list.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.list = state.list.filter(
        expense => expense.id !== action.payload
      );
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
