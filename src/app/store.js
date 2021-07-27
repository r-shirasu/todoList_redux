import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../components/features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
