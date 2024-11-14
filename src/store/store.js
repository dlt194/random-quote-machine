import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../redux/quoteReducer";

const store = configureStore({
  reducer: {
    quotes: quoteReducer,
  },
});

export default store;
