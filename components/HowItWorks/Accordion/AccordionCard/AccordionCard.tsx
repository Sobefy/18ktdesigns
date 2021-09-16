import AccordiongSvg from "@components/Common/AccordiongSvg";
import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { AccordionInfoType } from "@lib/types";
import { useState } from "react";

interface AccordionCardProps {
  data: AccordionInfoType;

  onClick?(): void;
}

const AccordionCard = ({ data, onClick }: AccordionCardProps) => {
  const { id, title, description } = data;
  const [cardOpen, setCardOpen] = useState(false);
  const handleCardClick = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <div className="px-6 py-8 bg-gray-50 rounded-xl">
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
