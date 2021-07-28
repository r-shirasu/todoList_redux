import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postAllClear(state) {
      return initialState;
    },
    postDeleted(state, action) {
      const deleteTodo = state.filter((_, id) => id !== action.payload.index);
      return deleteTodo;
    },
    postChecked(state, action) {
      const checkedTodo = state.map((todo, id) => {
        if (id !== action.payload.index) {
          return todo;
        }
        return {
          task: todo.task,
          isChecked: !todo.isChecked,
        };
      });
      return checkedTodo;
    },
  },
});

export const { postAdded, postAllClear, postDeleted, postChecked } =
  postsSlice.actions;
export default postsSlice.reducer;
