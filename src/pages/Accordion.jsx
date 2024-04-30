import { useState } from "react";
import { QuestionAnswerCard } from "../components/QuestionAnswerCard";
import { reactQuestions } from "../db/reactQuestions";

function Accordion() {
  const [isMultipleAccordion, setIsMultipleAccordion] = useState(true);
  const [selectedShowAnswerId, setSelectedShowAnswerId] = useState();

  function handleInputCheckbox() {
    if (isMultipleAccordion) {
      setSelectedShowAnswerId(-1);
    }
    setIsMultipleAccordion((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-center text-3xl font-bold">Accordion</h2>

      <div className="flex justify-center gap-4 font-semibold">
        <label htmlFor="multiple-accordion">
          Is multiple open accordion allowed?
        </label>
        <input
          type="checkbox"
          id="multiple-accordion"
          checked={isMultipleAccordion}
          onClick={handleInputCheckbox}
        />
      </div>

      <div className="flex flex-col gap-4">
        {reactQuestions.map((reactQuestion) => (
          <QuestionAnswerCard
            key={reactQuestion.id}
            reactQuestion={reactQuestion}
            isMultipleAccordion={isMultipleAccordion}
            selectedShowAnswerId={selectedShowAnswerId}
            setSelectedShowAnswerId={setSelectedShowAnswerId}
          />
        ))}
      </div>
    </div>
  );
}

export { Accordion };
