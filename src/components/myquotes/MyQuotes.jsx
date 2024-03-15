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

  // const fetchData = async () => {
  //   setIsHidden(true);
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://api.api-ninjas.com/v1/quotes?category=",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "X-Api-Key": "DWL43LykdL52NHhGn258ag==vVlQNrf02oIOP46v",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Wrong email or password.");
  //     }
  //     const data = await response.json();

  //     console.log(data);

  //     setQuote(await data[0]);
  //     setIsHidden(false);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { quote, author, error, isLoading, fetchData } = useFetchQuotes();

  const handleClick = () => {
    fetchData();
  };

  // const handleClick = () => {
  //   setIsHidden(true);
  //   setIsPulse(true);
  //   fetchData();
  //   setTimeout(() => {
  //     setIsHidden(false);
  //     setIsPulse(false);
  //   }, 1000);
  // };

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
