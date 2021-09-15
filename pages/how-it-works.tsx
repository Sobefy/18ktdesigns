import RotatingRing from "@components/HowItWorks/RotatingRing";
import GridSection from "@components/HowItWorks/GridSection";
import Budgeting from "@components/HowItWorks/Budgeting/Budgeting";

const HowItWorks = () => {
  return (
    <div className="relative py-20">
      <RotatingRing />
      <GridSection />
      <Budgeting />
    </div>
  );
};

export default HowItWorks;
