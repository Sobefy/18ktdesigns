import RotatingRing from "@components/HowItWorks/RotatingRing";
import GridSection from "@components/HowItWorks/GridSection";
import ImageGrid from "@components/HowItWorks/ImageGrid";

const HowItWorks = () => {
  return (
    <div className="relative py-20">
      <RotatingRing />
      <GridSection />
      <ImageGrid />
    </div>
  );
};

export default HowItWorks;
