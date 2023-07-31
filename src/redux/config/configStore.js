import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/posts";

const store = configureStore({
  reducer: {
    posts: posts,
  },
});

export default store;
