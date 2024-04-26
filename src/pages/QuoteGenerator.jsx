import { useEffect, useState } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState({});
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  async function getRandomQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const quote = await response.json();
      setQuote(quote);
    } catch (error) {
      console.error(error);
    }
  }

  async function getTags() {
    try {
      const response = await fetch("https://api.quotable.io/tags");
      const tags = await response.json();
      setTags(tags);
    } catch (error) {
      console.error(error);
    }
  }

  async function getQuoteByTag() {
    try {
      const response = await fetch(
        `https://api.quotable.io/quotes?tags=${selectedTag}`,
      );
      const quotesByTag = await response.json();
      const randomQuote =
        quotesByTag.results[Math.floor(Math.random() * quotesByTag.count)];
      setQuote(randomQuote);
    } catch (error) {
      console.error(error);
    }
  }

  function handleName(name) {
    setSelectedTag(name);
    getQuoteByTag();
  }

  useEffect(() => {
    getRandomQuote();
    getTags();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
      <div>
        <p className="text-xl font-semibold">{quote.content}</p>
        <p className="text-center text-lg underline underline-offset-4">
          - {quote.author}
        </p>
      </div>

      <p className="text-lg">
        Select tag from below to get a random quote from the tag
      </p>
      <div className="flex flex-wrap gap-4">
        {tags
          ?.filter(({ quoteCount }) => quoteCount)
          .map(({ _id, name }) => (
            <p
              key={_id}
              onClick={() => handleName(name)}
              className={
                selectedTag === name
                  ? `cursor-pointer rounded-md bg-blue-500 px-2 text-white`
                  : `cursor-pointer rounded-md border px-2`
              }
            >
              {name}
            </p>
          ))}
      </div>
    </div>
  );
}

export { QuoteGenerator };
