import ComposedTitles from "@components/Common/ComposedTitles";
import SocialIcons from "@components/Common/SocialIcons";
import PrimaryDescription from "@components/Common/PrimaryDescription";

const GetInTouch = () => {
  return (
    <div className="py-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-12 text-center lg:mb-20">
          <ComposedTitles titleText="Contact Us" titleSize="sm" />
          <div className="mt-8 mb-10">
            <ComposedTitles
              subtitleText="Get in touch with us"
              subtitleSize="md"
            />
          </div>
          <PrimaryDescription
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci."
            textSize="gray"
          />
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center bg-white border rounded-xl">
              <div className="mb-6">
                <ComposedTitles subtitleText="affiliates" />
              </div>
              <PrimaryDescription text="partnership@18ktdesigns.com" />
              <PrimaryDescription text="New York, NY 10013" />
            </div>
          </div>
          <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center bg-white border rounded-xl">
              <div className="mb-6">
                <ComposedTitles subtitleText="press" />
              </div>
              <PrimaryDescription text="press@18ktdesigns.com" />
              <PrimaryDescription text="+7-843-672-431" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center bg-white border rounded-xl">
              <div className="mb-7">
                <ComposedTitles subtitleText="follow" />
              </div>
              <div className="flex flex-wrap items-end justify-center">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
