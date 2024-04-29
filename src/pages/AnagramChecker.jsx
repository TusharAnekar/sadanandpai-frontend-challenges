import { useState } from "react";

function AnagramChecker() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [isAnagram, setIsAnagram] = useState(null);

  console.log(firstInput, secondInput);

  const getIsAnagram = () =>
    firstInput.toLowerCase().split("").sort().join("") ===
    secondInput.toLowerCase().split("").sort().join("");

  function handleCheckAnagram() {
    getIsAnagram() ? setIsAnagram(true) : setIsAnagram(false);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-3xl font-bold">Anagram Checker</h2>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="First word or phrase"
          className="rounded-lg border border-black p-2"
          onChange={(e) => setFirstInput(e.target.value.trim())}
        />

        <input
          type="text"
          placeholder="Second word or phrase"
          className="rounded-lg border border-black p-2"
          onChange={(e) => setSecondInput(e.target.value.trim())}
        />

        <button
          className="rounded-lg bg-green-500 px-2 text-white"
          onClick={handleCheckAnagram}
        >
          Check Anagram
        </button>
      </div>

      {isAnagram !== null && (
        <p className="text-lg font-semibold">
          {isAnagram
            ? "The words/phrases are anagrams!"
            : "The words/phrases are not anagrams!"}
        </p>
      )}
    </div>
  );
}

export { AnagramChecker };
