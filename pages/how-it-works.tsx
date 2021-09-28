import RotatingRing from "@components/HowItWorks/RotatingRing";
import GridSection from "@components/HowItWorks/GridSection";
import Budgeting from "@components/HowItWorks/Budgeting/Budgeting";
import ImageGrid from "@components/HowItWorks/ImageGrid";
import Accordion from "@components/HowItWorks/Accordion";
import CTA from "@components/Common/CTA";

const HowItWorks = () => {
  return (
    <>
      <div className="relative">
        <RotatingRing />
        <GridSection />
        <Budgeting />
        <ImageGrid />
        <Accordion />
        <CTA
          textTitleSize="md"
          titleText="Ready to create a one-of-a-kind ring with us?"
          primarySubtitle="Drop us a line, and we'll get in touch."
          secondarySubtitle="We'll see if we're a match and how we can help each other."
          btnText="Sign up"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default HowItWorks;
