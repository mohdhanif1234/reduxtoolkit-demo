// src/features/todo/todoSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { TodoState } from './types';


const initialState: TodoState = {
  items: ['Google', "Microsoft", "Amazon"],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((item, index) => index !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
