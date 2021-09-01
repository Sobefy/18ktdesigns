const Landing = () => {
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <h2 className="mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold">
          Let&quot;s create your custom ring
        </h2>
        <p className="mb-6 lg:mb-14 text-gray-500 leading-relaxed">
          Before we begin, we&quot;d like to learn a bit about what you&quot;re
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
  );
};
export default Landing;
