import AccordiongSvg from "@components/Common/AccordiongSvg";
import ComposedTitles from "@components/Common/ComposedTitles";
import FaqSvg from "@components/Common/FaqSvg";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { faqData } from "@lib/consts";
import { FaqDataType, questionsType } from "@lib/types";
import { useState } from "react";

interface FaqCardsProps {
  data: FaqDataType;
  questionData: questionsType;
  onClick(): void;
  index: number;
}
const FaqCards = ({ data, onClick, index, questionData }: FaqCardsProps) => {
  const { id, buttonText, buttonCategory, questions } = data;
  const { question, answer, defaultChecked } = questionData;
  const [cardOpen, setCardOpen] = useState(defaultChecked);
  const handleCardClick = () => {
    setCardOpen(!cardOpen);
  };
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: number) => {
    setToggle(index);
  };
  const filteredCard = faqData.filter((faq) => faq.id === toggle);
  const filteredCardSelected = filteredCard[0];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap mb-12 -mx-4">
        {faqData.map(({ buttonText, id }) => (
          <>
            <div
              key={id}
              className="w-full px-4 mb-6 md:w-1/3 lg:w-1/5 lg:mb-0"
            >
              <button
                onClick={() => toggleTab(id)}
                className={`w-full py-6
              ${
                toggle === id
                  ? "bg-red-400 rounded-xl"
                  : "hover:bg-gray-900 hover:text-white"
              }`}
              >
                <FaqSvg category="generalquestion" />
                <p className="text-lg font-semibold text-white font-heading">
                  {buttonText}
                </p>
              </button>
            </div>
          </>
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqData.map(({ question, answer }) => (
            <>
              <div className="p-12 bg-white border rounded-lg">
                <div className="flex items-center justify-between w-full">
                  <ComposedTitles
                    subtitleText={filteredCardSelected.question}
                  />
                  <button onClick={handleCardClick}>
                    <AccordiongSvg deployed={cardOpen} />
                  </button>
                </div>
                <div className={`max-w-2xl mt-4 ${cardOpen ? "" : "hidden"} `}>
                  <PrimaryDescription text={filteredCardSelected.answer} />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqCards;
