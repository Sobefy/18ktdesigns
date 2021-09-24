import AccordiongSvg from "@components/Common/AccordiongSvg";
import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { AccordionInfoType } from "@lib/types";
import { useState } from "react";

interface AccordionCardProps {
  data: AccordionInfoType;
  alternateClass: "accordion" | "faqAccordion";
}

const AccordionCard = ({ data, alternateClass }: AccordionCardProps) => {
  const { title, description, defaultChecked = false } = data;
  const [cardOpen, setCardOpen] = useState(defaultChecked);
  const handleCardClick = () => {
    setCardOpen(!cardOpen);
  };
  const getAlternateClass = () => {
    switch (alternateClass) {
      case "accordion":
        return "px-6 py-8 bg-gray-50 rounded-xl";
      case "faqAccordion":
        return "p-12 bg-white border rounded-lg";
      default:
        return null;
    }
  };
  return (
    <div className={`${getAlternateClass()}`}>
      <div className="flex items-center justify-between w-full">
        <ComposedTitles subtitleText={title} />
        <button onClick={handleCardClick}>
          <AccordiongSvg deployed={cardOpen} />
        </button>
      </div>
      <div className={`max-w-2xl mt-4 ${cardOpen ? "" : "hidden"} `}>
        <PrimaryDescription text={description} />
      </div>
    </div>
  );
};

export default AccordionCard;
