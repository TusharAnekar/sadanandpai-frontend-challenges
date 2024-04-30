import { useEffect, useState } from "react";

function QuestionAnswerCard({
  reactQuestion,
  isMultipleAccordion,
  selectedShowAnswerId,
  setSelectedShowAnswerId,
}) {
  const { id, question, answer } = reactQuestion;

  const [isShowAnswer, setIsShowAnswer] = useState(false);

  function handleShowAnswer() {
    setIsShowAnswer((prev) => !prev);
    setSelectedShowAnswerId(isMultipleAccordion ? null : id);
  }

  useEffect(() => {
    if (selectedShowAnswerId) {
      setIsShowAnswer(id === selectedShowAnswerId);
    }
  }, [id, selectedShowAnswerId]);

  return (
    <div className="flex justify-between border p-4">
      <div>
        <p className="font-semibold">{question}</p>
        {isShowAnswer && <p>{answer}</p>}
      </div>
      <button
        className="h-10 w-10 rounded-full bg-gray-300"
        onClick={handleShowAnswer}
      >
        {isShowAnswer ? "-" : "+"}
      </button>
    </div>
  );
}

export { QuestionAnswerCard };
