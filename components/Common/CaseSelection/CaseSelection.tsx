import { caseStudiesData } from "@lib/consts";
import { useState } from "react";
import Image from "next/image";
import ImageWrapper from "./ImageWrapper";
const CaseSelection = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: number) => {
    setToggle(index);
  };
  const filteredCard = caseStudiesData.filter(
    (caseStudy) => caseStudy.id === toggle
  );
  const filteredCardSelected = filteredCard[0];
  return (
    <>
      <div className="mx-auto mb-12 lg:mb-16 lg:text-center max-w-max lg:border-b">
        {caseStudiesData.map(({ id, buttonText }) => (
          <button
            key={id}
            className={`px-4 py-4 pb-4 text-sm font-semibold  lg:px-8  ${
              toggle === id
                ? "border-b-2 border-red-500"
                : "text-gray-500  hover:text-gray-900"
            }`}
            onClick={() => toggleTab(id)}
          >
            {buttonText}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap w-full mb-6 -mx-3 lg:grid lg:grid-cols-4 lg:grid-rows-3 lg:mb-14 ">
        {filteredCardSelected.images.map((wrapper, index) => (
          <ImageWrapper key={wrapper.id} imageData={wrapper} index={index} />
        ))}
      </div>
    </>
  );
};

export default CaseSelection;
