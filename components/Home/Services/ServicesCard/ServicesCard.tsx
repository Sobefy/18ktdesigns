import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { ServicesInfo } from "@lib/types";
import { useState } from "react";

interface ServicesCardProps {
  data: ServicesInfo;
}
const ServicesCard = ({ data }: ServicesCardProps) => {
  const { id, title, description } = data;
  return (
    <div className="w-full px-4 mb-12 lg:w-1/2">
      <span className="flex items-center justify-center w-12 h-12 mb-6 text-sm rounded-full lg:mb-8 bg-blue-50">
        {id}
      </span>
      <div className="mb-4">
        <ComposedTitles subtitleText={title} />
      </div>
      <PrimaryDescription text={description} textSize="gray" />
    </div>
  );
};

export default ServicesCard;
