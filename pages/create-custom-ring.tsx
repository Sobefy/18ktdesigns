/* eslint-disable @next/next/no-img-element */
import Header from "../components/CreateCustomRing/Header";
import Machine from "../components/CreateCustomRing/Machine";
import { CreateCustomRingProvider } from "../lib/context/createCustomRing";

const CreateCustomRing = () => {
  return (
    <CreateCustomRingProvider>
      <section className="relative overflow-y-hidden h-screen bg-blue-50">
        <Header alternateNav={true} />
        <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
          <div className="lg:col-start-1 col-end-3 relative">
            <img
              className="
            hidden
            lg:block
            absolute
            top-0
            left-0
            w-full
            h-full
            object-cover
          "
              src="/images/love-engagement-ring-bride-groom-engagement-proposal-bride-and-groom-engagement-photo-t20-G0rrAw.jpg"
              alt=""
            />
          </div>
          <div className="relative container m-0 sm:mx-auto lg:col-start-3 lg:col-end-6 overflow-y-auto">
            <div className="w-full m-auto px-4 lg:px-40 xl:px-52 py-40 xl:py-44">
              <div className="lg:w-4/5 xl:w-3/5">
                <Machine />
              </div>
            </div>
          </div>
        </div>
        <img
          className="hidden xl:block absolute right-0 bottom-0 mb-64"
          src="/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt=""
        />
      </section>
    </CreateCustomRingProvider>
  );
};
export default CreateCustomRing;
