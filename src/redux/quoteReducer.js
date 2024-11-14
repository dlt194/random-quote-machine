import { NEW_QUOTE } from "./actionTypes";

// Define the initial state
const initialState = {
  quote: "Click 'New Quote' to get a quote",
  author: "Anonymous",
};

// Define the reducer function correctly
const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      console.log(
        "Updating State:",
        action.payload.quote,
        action.payload.author
      );
      return {
        ...state,
        quote: action.payload.quote,
        author: action.payload.author,
      };
    default:
      return state;
  }
};

export default quoteReducer;
