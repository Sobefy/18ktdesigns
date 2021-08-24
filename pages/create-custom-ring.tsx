/* eslint-disable @next/next/no-img-element */
// TODO: Change for Image component
import Header from "../components/Header";

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
          <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
            <div className="lg:w-3/5 max-w-2xl">
              <h2 className="mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold">
                Let's create your custom ring
              </h2>
              <p className="mb-6 lg:mb-14 text-gray-500 leading-relaxed">
                Before we begin, we'd like to learn a bit about what you're
                looking for so we can give you the best experience possible.
              </p>
              <div className="flex flex-wrap">
                <a
                  className="
                  block
                  w-full
                  md:w-auto
                  text-center
                  mb-2
                  py-4
                  px-8
                  md:mr-4
                  text-sm text-white
                  font-medium
                  leading-normal
                  bg-red-400
                  hover:bg-red-300
                  rounded
                  transition
                  duration-200
                "
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="
                  block
                  w-full
                  md:w-auto
                  text-center
                  mb-2
                  py-4
                  px-8
                  text-sm
                  font-medium
                  rounded
                  border
                  hover:border-gray-300
                "
                  href="#"
                >
                  Design other jewelry
                </a>
              </div>
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
  );
};
export default CreateCustomRing;
