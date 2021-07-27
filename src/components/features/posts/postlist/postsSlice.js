import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { task: "First Post!", isChecked: false },
  { task: "Second Post", isChecked: false },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postAllClear(state) {
      state.splice(0);
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
