import PrimaryButton from "@components/Common/PrimaryButton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { CTASection } from "@lib/types/interfaces";

interface CTADescriptionProps {
  data: CTASection;
  onClick(): void;
}
const CTA = ({ data, onClick }: CTADescriptionProps) => {
  const { headingSize, heading, ctaDescription, button } = data;
  const textTitleSizes = () => {
    switch (headingSize) {
      case "medium":
        return "lg:text-5xl text-5xl";
      case "large":
        return "text-4xl lg:text-6xl";
      default:
        return "";
    }
  };
  const description = documentToReactComponents(ctaDescription.json);
  console.log(ctaDescription);
  return (
    <div className="py-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="mb-8 md:mb-16 ">
          <h2 className={`font-semibold font-heading ${textTitleSizes()}`}>
            {heading}
          </h2>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="inline-block max-w-xl mb-6 text-xl md:mb-0">
            {description}
          </div>
          <div className="inline-block w-full ml-auto md:w-auto">
            <PrimaryButton size="lg" text={button.text} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTA;
