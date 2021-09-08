import ComposedTitles from "../../Common/ComposedTitles/ComposedTitles";
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
          <p className="text-xl">Drop us a line, and we&apos;ll get in touch.</p>
          <p className="text-xl">We&apos;ll see if we&apos;re a match and how we can help each other.</p>
          </div>
          <PrimaryButton buttonLocated="ctaButton" text="Start a Project" />
        </div>
      </div>
    </div>
  );
};
export default CTA;
