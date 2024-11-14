"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newQuoteAction } from "../redux/actions";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const QUOTE_API_URL = "https://qapi.vercel.app/api/random";

const QuoteBox = () => {
  // Access the Redux state using useSelector
  const quote = useSelector((state) => state.quotes.quote);
  const author = useSelector((state) => state.quotes.author);

  const dispatch = useDispatch();

  // Fetch a new quote from the API
  const fetchNewQuote = async () => {
    try {
      const response = await fetch(QUOTE_API_URL);
      const data = await response.json();

      dispatch(newQuoteAction(data));
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  // Fetch a new quote when the component mounts
  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <Card
      id="quote-box"
      className="container w-[60%] m-auto text-center p-4 my-5 border rounded shadow-lg"
    >
      <CardHeader>
        <CardTitle id="text" className="p-0">
          <h5>{quote}</h5>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p id="author" className="pb-10">
          - {author}
        </p>
        <Button id="new-quote" className="p-2 m-2" onClick={fetchNewQuote}>
          New Quote
        </Button>

        <a
          className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </CardContent>
      <CardFooter className="flex justify-center items-center p-2">
        <p className="mb-0 text-sm text-gray-500">
          by @DLT194 for{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            className="text-sm text-gray-500"
          >
            freeCodeCamp
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default QuoteBox;
