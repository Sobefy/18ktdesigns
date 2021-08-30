/* eslint-disable @next/next/no-img-element */
// TODO: Change for Image component
import Header from "../components/Common/CreateACustomRing/Header";
import Landig from "../components/Common/CreateACustomRing/Landing";
import WhoWillBeWearing from "../components/Common/CreateACustomRing/WhoWillBeWearing";

const CreateCustomRing = () => {
  return (
    <section className="relative overflow-y-hidden h-screen bg-blue-50">
      <Header alternateNav={true} />
      <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
        <div className="col-start-1 col-end-3 relative">
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
        <div className="relative container m-0 col-start-3 col-end-6">
          <WhoWillBeWearing />
        </div>
      </div>
      <img
        className="hidden xl:block absolute right-0 bottom-0 mb-64"
        src="/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
    </section>
  );
};
export default CreateCustomRing;
