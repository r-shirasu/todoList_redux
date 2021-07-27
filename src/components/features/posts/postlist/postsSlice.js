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
  },
});

export const { postAdded, postAllClear, postDeleted } = postsSlice.actions;
export default postsSlice.reducer;
