import { useState } from "react";
import FaqSvg from "@components/Common/FaqSvg";
import AccordionCard from "@components/HowItWorks/Accordion/AccordionCard";
import { faqData } from "@lib/consts";

const FaqCards = () => {
  const defaultCheckedButton = faqData.filter((faq) => faq.defaultChecked);
  const defaultChecked =
    defaultCheckedButton.length === 1
      ? defaultCheckedButton[0].id
      : faqData[0].id;

  const [toggle, setToggle] = useState(defaultChecked);
  const toggleTab = (index: number) => {
    setToggle(index);
  };

  const filteredCard = faqData.filter((faq) => faq.id === toggle);
  const filteredCardSelected = filteredCard[0];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap mb-12 -mx-4">
        {faqData.map(({ buttonText, id, buttonCategory }) => (
          <div key={id} className="w-full px-4 mb-6 md:w-1/3 lg:w-1/5 lg:mb-0">
            <button
              onClick={() => toggleTab(id)}
              className={`w-full py-6 rounded-xl
              ${
                toggle === id
                  ? "bg-red-400"
                  : "bg-white hover:bg-gray-900 hover:text-white"
              }`}
            >
              <FaqSvg
                category={buttonCategory}
                color={`${toggle === id ? "white" : "gray"}`}
              />
              <p
                className={`text-lg font-semibold font-heading ${
                  toggle === id ? "text-white" : ""
                }`}
              >
                {buttonText}
              </p>
            </button>
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {filteredCardSelected.questions.map((accordion) => (
            <AccordionCard
              key={accordion.id}
              data={accordion}
              alternateClass="whiteBg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqCards;
