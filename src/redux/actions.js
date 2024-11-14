import { NEW_QUOTE } from "./actionTypes";

// Define the action creator correctly
export const newQuoteAction = (data) => {
  return {
    type: NEW_QUOTE,
    payload: {
      quote: data.quote,
      author: data.author,
    },
  };
};
