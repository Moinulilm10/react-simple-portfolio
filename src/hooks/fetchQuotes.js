import { useEffect, useState } from "react";

const useFetchQuotes = (category = "") => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "DWL43LykdL52NHhGn258ag==vVlQNrf02oIOP46v",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }
      const data = await response.json();

      setQuote(data[0].quote);
      setAuthor(data[0].author);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return { quote, author, error, isLoading, fetchData };
};

export default useFetchQuotes;
