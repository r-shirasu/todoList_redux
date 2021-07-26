import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../components/features/posts/postlist/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
