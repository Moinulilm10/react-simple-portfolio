import { useState } from "react";
import useFetchQuotes from "../../hooks/fetchQuotes";
import "../../styles/MyQuotes.css";
import LoadingSpinner from "../loadingspinner/LoadingSpinner";

const MyQuotes = () => {
  // const [quote, setQuote] = useState("");
  // const [author, setAuthor] = useState("");
  // const [error, setError] = useState("");
  // const [isHidden, setIsHidden] = useState(false);
  const [isPulse, setIsPulse] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const { quote, author, error, isLoading, fetchData } = useFetchQuotes();

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="quote-container">
      <div className="container dark:bg-primary/[7%]">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div id="text">
              <p
                className={isPulse ? "animate-pulse ease-out duration-700" : ""}
              >
                {quote.quote}
              </p>
            </div>
            <div id="author">
              <p>{quote.author}</p>
            </div>
            <div id="buttons">
              <button onClick={handleClick} id="new-quote">
                Next Quote
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyQuotes;
