/* eslint-disable @next/next/no-img-element */
import ComposedTitles from "@components/Common/ComposedTitles";
import Description from "@components/Common/Description";
import Input from "@components/Common/Input";
import PrimaryButton from "@components/Common/PrimaryButton";
import SvgNewsletter from "@components/Common/SvgNewsletter";

const Newsletter = () => {
  return (
    <div className="py-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 mb-6 md:w-2/3 md:mb-0">
            <div className="flex flex-wrap items-center mb-5 lg:mb-0">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-6 mr-10 bg-red-400 rounded-full lg:w-24 lg:h-24 lg:mb-0">
                <SvgNewsletter />
              </div>
              <div>
                <div className="mb-4">
                  <ComposedTitles
                    subtitleText="Sign up to our newsletter"
                    subtitleSize="sm"
                  />
                </div>
                <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/3">
            <form action="#">
              <div className="relative flex flex-wrap ml-auto lg:flex-nowrap">
                <Input
                  spanText="Email Address"
                  inputSize="sm"
                  type="email"
                  text="e.g email@email.com"
                  onChange={() => {}}
                />
                <PrimaryButton
                  size="sm"
                  text="Sign&nbsp;up"
                  onClick={() => {}}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
