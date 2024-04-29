import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);

  function handleReset() {
    setCounter(0);
    setInput(1);
  }

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <h2 className="text-3xl font-bold">Counter</h2>
      <p className="text-2xl font-bold">{counter}</p>

      <div className="flex gap-4">
        <button
          className="w-8 cursor-pointer rounded-lg border border-black text-xl"
          onClick={() => setCounter((prev) => prev - parseInt(input))}
        >
          -
        </button>
        <button
          className="w-8 cursor-pointer rounded-lg border border-black text-xl"
          onClick={() => setCounter((prev) => prev + parseInt(input))}
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-4">
        <p>Increment/Decrement by</p>
        <input
          type="number"
          className="w-16 border border-black p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <button
        className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-white"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export { Counter };
