import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      if (action.payload.text.trim()) {
        state.todos.push({
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false,
        });
      }
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
    ToggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, ToggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
