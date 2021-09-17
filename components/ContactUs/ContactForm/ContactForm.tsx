import ComposedTitles from "@components/Common/ComposedTitles";
import Input from "@components/Common/Input";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import PrimaryButton from "@components/Common/PrimaryButton";
import TextAreaField from "@components/Common/TextAreaField";

const ContactForm = () => {
  return (
    <div className="py-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
            <div className="max-w-md">
              <div className="mb-12">
                <ComposedTitles
                  subtitleText="Send us a mesage"
                  subtitleSize="md"
                />
              </div>
              <div className="mb-4">
                <ComposedTitles subtitleText="Address" />
              </div>
              <PrimaryDescription text="1686 Geraldine Lane New York," />
              <div className="mb-10">
                <PrimaryDescription text="NY 10013" />
              </div>
              <div className="mb-4">
                <ComposedTitles subtitleText="Contact Us" />
              </div>
              <PrimaryDescription text="info@18ktdesigns.com" />
              <PrimaryDescription text="+ 7-843-672-431" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative flex flex-wrap mb-6">
              <Input
                spanText="Name"
                inputSize="lg"
                type="text"
                text="Daniel"
                onChange={() => {}}
              />
            </div>
            <div className="relative flex flex-wrap mb-6">
              <Input
                spanText="Your email address"
                inputSize="lg"
                type="email"
                text="e.g hello@shuffle.dev"
                onChange={() => {}}
              />
            </div>
            <div className="relative flex flex-wrap mb-6">
              <TextAreaField
                spanText="Your message"
                text="Message..."
                onChange={() => {}}
              />
            </div>
            <div className="inline-block w-full">
              <PrimaryButton
                text="Send message"
                size="xl"
                onClick={() => {}}
                width="max"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
