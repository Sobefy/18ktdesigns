import { accordionInfo } from "@lib/consts";
import AccordionCard from "./AccordionCard";

const Accordion = () => {
  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {accordionInfo.map((accordion) => (
              <AccordionCard
                key={accordion.id}
                data={accordion}
                alternateClass="accordion"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
