import ComposedTitles from "../../Common/ComposedTitles/ComposedTitles";
import Description from "../../Common/Description";
import PrimaryButton from "../../Common/PrimaryButton";
const CTA = () => {
  return (
    <div className="py-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <ComposedTitles subtitleText="let's build your ring." ctaTitle={true} />
        <div className="flex flex-wrap items-center">
          <div className="inline-block max-w-xl mb-6 md:mb-0">
            <Description
              ctaDescription={true}
              text="Drop us a line, and we'll get in touch."
            />
            <Description
              ctaDescription={true}
              text="We'll see if we're a match and how we can help each other."
            />
          </div>
          <PrimaryButton ctaButton={true} text="Start a Project" />
        </div>
      </div>
    </div>
  );
};
export default CTA;
