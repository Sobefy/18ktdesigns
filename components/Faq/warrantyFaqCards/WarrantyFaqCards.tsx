import ComposedTitles from "@components/Common/ComposedTitles";
import WarrantyButtonSvg from "@components/Common/WarrantyButtonSvg";
import AccordionCard from "@components/HowItWorks/Accordion/AccordionCard";
import { warrantyFaqData } from "@lib/consts";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const WarrantyFaqCards = () => {
  const defaultCheckedButton = warrantyFaqData.filter(
    (warranty) => warranty.defaultChecked
  );
  const defaultChecked =
    defaultCheckedButton.length === 1
      ? defaultCheckedButton[0].id
      : warrantyFaqData[0].id;

  const [toggle, setToggle] = useState(defaultChecked);
  const toggleTab = (index: number) => {
    setToggle(index);
  };

  const filteredCard = warrantyFaqData.filter(
    (warranty) => warranty.id === toggle
  );
  const filteredCardSelected = filteredCard[0];

  return (
    <div className="relative pb-20">
      <img
        className="absolute top-0 left-0 hidden mt-16 lg:block"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt=""
      />
      <img
        className="absolute top-0 right-0 hidden mt-40 lg:block"
        src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <ComposedTitles titleText="What's new at Shuffle" titleSize="sm" />
          <div className="mt-8">
            <ComposedTitles
              subtitleText="Warranty Information"
              subtitleSize="sm"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap -mx-4">
            {warrantyFaqData.map(({ buttonText, id, buttonCategory }) => (
              <div
                key={id}
                className="w-full px-4 mb-6 md:w-1/3 lg:w-1/5 lg:mb-0"
              >
                <button
                  onClick={() => toggleTab(id)}
                  className={`w-full py-6 rounded-xl
              ${toggle === id ? "bg-red-400" : "bg-gray-50 hover:bg-gray-100"}`}
                >
                  <WarrantyButtonSvg
                    category={buttonCategory}
                    color={`${toggle === id ? "white" : "gray"}`}
                  />
                  <p
                    className={`text-lg font-semibold font-heading ${
                      toggle === id ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {buttonText}
                  </p>
                </button>
              </div>
            ))}
          </div>
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
    </div>
  );
};

export default WarrantyFaqCards;
