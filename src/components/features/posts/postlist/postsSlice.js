import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", task: "First Post!", isChecked: false },
  { id: "2", task: "Second Post", isChecked: false },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
