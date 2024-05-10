import { useEffect, useState } from "react";

function GuessTheNumber() {
  const [randomNumberBetween0To100, setRandomNumberBetween0To100] = useState(0);
  const [input, setInput] = useState(0);
  const [isNumberCorrect, setIsNumberCorrect] = useState(null);

  function getRandomNumberBetween0To100() {
    setRandomNumberBetween0To100(Math.floor(Math.random() * 101));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (randomNumberBetween0To100 === parseInt(input)) {
      setIsNumberCorrect(true);
    } else {
      setIsNumberCorrect(false);
    }
  }

  function handleReset() {
    getRandomNumberBetween0To100();
    setInput(0);
    setIsNumberCorrect(false);
  }

  useEffect(() => {
    getRandomNumberBetween0To100();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <h2 className="mb-4 text-3xl font-bold">Guess the Number</h2>

      <p>Guess a number between 0 to 100</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="w-80 border border-black p-2"
          min="0"
          max="100"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="mt-4 flex gap-8">
          <button
            className="w-32 rounded-lg bg-red-500 py-2 text-xl text-white"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="w-32 rounded-lg bg-green-500 py-2 text-xl text-white"
            type="submit"
          >
            Check
          </button>
        </div>
      </form>

      {isNumberCorrect !== null &&
        (isNumberCorrect ? (
          <p>Correct Number</p>
        ) : (
          <p>
            Your guess is{" "}
            {input < randomNumberBetween0To100 ? (
              <strong>Less</strong>
            ) : (
              <strong>More</strong>
            )}{" "}
            than the actual number
          </p>
        ))}
    </div>
  );
}

export { GuessTheNumber };
