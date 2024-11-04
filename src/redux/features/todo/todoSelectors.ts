// src/features/todo/todoSelectors.ts
import { RootState } from '../../app/rootReducer';

export const selectTodoItems = (state: RootState) => state.todo.items;
