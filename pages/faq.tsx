import ComposedTitles from "@components/Common/ComposedTitles";
import FaqCards from "@components/Faq/FaqCards";

const FAQ = () => {
  return (
    <div className="relative bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <ComposedTitles titleText="FAQs" titleSize="sm" />
          <ComposedTitles
            subtitleText="Frequently Asked Questions"
            subtitleSize="md"
          />
        </div>
        <FaqCards />
      </div>
    </div>
  );
};

export default FAQ;
