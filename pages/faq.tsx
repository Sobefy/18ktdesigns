/* eslint-disable @next/next/no-img-element */
import ComposedTitles from "@components/Common/ComposedTitles";
import FaqCards from "@components/Faq/FaqCards";

const FAQ = () => {
  return (
    <div className="relative py-20 bg-blue-50">
      <img
        className="absolute top-0 left-0 hidden mt-16 lg:block"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt=""
      />
      <img
        className="absolute top-0 right-0 hidden mt-40 lg:block"
        src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <ComposedTitles titleText="FAQs" titleSize="sm" />
          <div className="mt-8">
            <ComposedTitles
              subtitleText="Frequently Asked Questions"
              subtitleSize="md"
            />
          </div>
        </div>
        <FaqCards />
      </div>
    </div>
  );
};

export default FAQ;
