import PrimaryDescription from "@components/Common/PrimaryDescription";
import ComposedTitles from "../../Common/ComposedTitles/ComposedTitles";
import PrimaryButton from "../../Common/PrimaryButton";
const CTA = () => {
  return (
    <div className="py-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="mb-8 md:mb-16">
          <ComposedTitles
            subtitleText="let's build your ring."
            subtitleSize="xl"
          />
        </div>

        <div className="flex flex-wrap items-center">
          <div className="inline-block max-w-xl mb-6 md:mb-0">
            <PrimaryDescription
              text="Drop us a line, and we'll get in touch."
              textSize="blue"
            />
            <PrimaryDescription
              text="We'll see if we're a match and how we can help each other."
              textSize="blue"
            />
          </div>
          <div className="inline-block w-full ml-auto">
            <PrimaryButton buttonLocated="lg" text="Start a Project" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTA;
