import RotatingRing from "@components/HowItWorks/RotatingRing";
import GridSection from "@components/HowItWorks/GridSection";
import Budgeting from "@components/HowItWorks/Budgeting/Budgeting";
import ImageGrid from "@components/HowItWorks/ImageGrid";

const HowItWorks = () => {
  return (
    <div className="relative py-20">
      <RotatingRing />
      <GridSection />
      <Budgeting />
      <ImageGrid />
    </div>
  );
};

export default HowItWorks;
