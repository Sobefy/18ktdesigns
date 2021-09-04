import ComposedTitles from "../../Common/ComposedTitles";
import PrimaryButton from "../../Common/PrimaryButton";
import PrimaryDescription from "../../Common/PrimaryDescription";
const Hero = () => {
  return (
    <div className="pt-44 pb-32 md:pb-64 bg-blue-50">
      <div className="container px-4 mx-auto mb-12 text-center">
        <ComposedTitles
          titleText="Welcome to 18KT Designs"
          subtitleText="The perfect engagement ring"
          alternateSize={true}
        />
        <PrimaryDescription
          text="Work with a professional team of jewelry designers and
              manufacturers to get your dream piece tailor made. We design
              engagement rings and wedding bands for your special occasion."
        />
        <PrimaryButton text="Start a Project" />
        <PrimaryButton text="View Past Work" alternateButton={true} />
      </div>
    </div>
  );
};

export default Hero;
