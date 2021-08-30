/* eslint-disable @next/next/no-img-element */
import Header from "../components/CreateCustomRing/Header";
import ItStartsWithStyle from "../components/CreateCustomRing/ItStartsWithStyle";
import Landing from "../components/CreateCustomRing/Landing";
import WhoWillBeWearing from "../components/CreateCustomRing/WhoWillBeWearing";
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
        <div className="relative container m-0 col-start-3 col-end-6 overflow-y-auto">
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
