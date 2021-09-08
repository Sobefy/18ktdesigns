import ComposedTitles from "../../Common/ComposedTitles/ComposedTitles";
import Description from "../../Common/Description";
import PrimaryButton from "../../Common/PrimaryButton";
const CTA = () => {
  return (
    <div className="py-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <ComposedTitles
          subtitleText="let's build your ring."
          subtitleSize="xl"
        />
        <div className="flex flex-wrap items-center">
          <div className="inline-block max-w-xl mb-6 md:mb-0">
            <Description
              ctaDescription
              text="Drop us a line, and we'll get in touch."
            />
            <Description
              ctaDescription
              text="We'll see if we're a match and how we can help each other."
            />
          </div>
          <PrimaryButton buttonLocated="ctaButton" text="Start a Project" />
        </div>
      </div>
    </div>
  );
};
export default CTA;
