import { useEffect, useState } from "react";
import "../../styles/MyQuotes.css";

const MyQuotes = () => {
  //   const [color, setColor] = useState();
  //   const [error, setError] = useState("");
  //   const [quote, setQuote] = useState("");
  //   const [isHidden, setIsHidden] = useState(false);

  //   const fetchData = async () => {
  //     setIsHidden(true);
  //     try {
  //       const response = await fetch(
  //         "https://api.api-ninjas.com/v1/quotes?category=",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             "X-Api-Key": "DWL43LykdL52NHhGn258ag==vVlQNrf02oIOP46v",
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Wrong email or password.");
  //       }
  //       const data = await response.json();

  //       setQuote(await data[0]);
  //       setIsHidden(false);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const handleClick = () => {
  //     setIsHidden(true);
  //     fetchData();
  //     setTimeout(() => {
  //       setIsHidden(false);
  //     }, 1500);

  //
  //   };

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [isPulse, setIsPulse] = useState(false);

  //   useEffect(() => {
  //     gettingQuote();
  //   }, []);
  //   const gettingQuote = () => {
  //     const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         let quotes = data.quotes;
  //         let randomNum = Math.floor(Math.random() * quotes.length);
  //         let randomQuote = quotes[randomNum];
  //         console.log(randomQuote);
  //         setQuote(randomQuote.quote);
  //         setAuthor(randomQuote.author);
  //       });
  //   };

  //   const getQuotesEvent = () => {
  //     gettingQuote();
  //   };

  const fetchData = async () => {
    setIsHidden(true);
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "DWL43LykdL52NHhGn258ag==vVlQNrf02oIOP46v",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Wrong email or password.");
      }
      const data = await response.json();

      console.log(data);

      setQuote(await data[0]);
      setIsHidden(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    setIsHidden(true);
    setIsPulse(true);
    fetchData();
    setTimeout(() => {
      setIsHidden(false);
      setIsPulse(false);
    }, 1000);
  };

  return (
    <div id="container">
      <div id="text">
        <p className={isPulse ? "animate-pulse ease-out duration-700" : ""}>
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
    </div>
  );
};

export default MyQuotes;
