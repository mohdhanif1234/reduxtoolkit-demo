// src/features/todo/TodoList.tsx
import React from 'react';
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { selectTodoItems } from '../redux/features/todo/todoSelectors';

const TodoList: React.FC = () => {
  const todoItems = useAppSelector(selectTodoItems);

  return (
    <ul>
      {todoItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TodoList;
