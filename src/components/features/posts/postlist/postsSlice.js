import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", task: "First Post!", isChecked: false },
  { id: "2", task: "Second Post", isChecked: false },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
