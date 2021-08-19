const CreateCustomRing = () => {
  return (
    <section className="relative overflow-y-hidden h-screen bg-blue-50">
      <div className="absolute w-full px-4 xl:px-10 top-0 left-0 z-50">
        <nav className="flex justify-between items-center py-8">
          <a className="inline-block mr-auto text-lg font-semibold" href="#">
            <img
              className="h-7"
              src="/images/18KT-LOGO-100x-2x.png"
              alt=""
              width="auto"
            />
          </a>
          <div className="lg:hidden ml-auto">
            <button
              className="
                  navbar-burger
                  flex
                  items-center
                  p-3
                  hover:bg-gray-50
                  rounded
                "
            >
              <svg
                className="block h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex w-auto lg:w-3/5 lg:pl-16 ml-auto">
            <ul className="flex items-center space-x-12">
              <li>
                <a className="text-sm font-medium" href="#"></a>
              </li>
              <li>
                <a className="text-sm font-medium" href="#"></a>
              </li>
              <li>
                <a className="text-sm font-medium" href="#"></a>
              </li>
              <li>
                <a className="text-sm font-medium" href="#"></a>
              </li>
            </ul>
            <div className="ml-auto">
              <a
                className="
                    inline-block
                    py-3
                    px-8
                    text-sm
                    leading-normal
                    font-medium
                    bg-red-50
                    hover:bg-red-100
                    text-red-500
                    rounded
                    transition
                    duration-200
                  "
                href="#"
              >
                Chat with someone
              </a>
            </div>
          </div>
        </nav>
      </div>
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
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          className="
              fixed
              top-0
              left-0
              bottom-0
              flex flex-col
              w-5/6
              max-w-sm
              py-6
              px-6
              bg-white
              border-r
              overflow-y-auto
            "
        >
          <div className="flex items-center mb-8">
            <a className="mr-auto text-lg font-semibold leading-none" href="#">
              <img
                className="h-7"
                src="/zeus-assets/logo/logo-zeus-red.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="
                    h-6
                    w-6
                    text-gray-500
                    cursor-pointer
                    hover:text-gray-500
                  "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="
                      block
                      p-4
                      text-sm
                      font-medium
                      text-gray-900
                      hover:bg-gray-50
                      rounded
                    "
                  href="#"
                ></a>
              </li>
              <li className="mb-1">
                <a
                  className="
                      block
                      p-4
                      text-sm
                      font-medium
                      text-gray-900
                      hover:bg-gray-50
                      rounded
                    "
                  href="#"
                ></a>
              </li>
              <li className="mb-1">
                <a
                  className="
                      block
                      p-4
                      text-sm
                      font-medium
                      text-gray-900
                      hover:bg-gray-50
                      rounded
                    "
                  href="#"
                ></a>
              </li>
              <li className="mb-1">
                <a
                  className="
                      block
                      p-4
                      text-sm
                      font-medium
                      text-gray-900
                      hover:bg-gray-50
                      rounded
                    "
                  href="#"
                ></a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="
                    block
                    py-3
                    text-center text-sm
                    leading-normal
                    bg-red-50
                    hover:bg-red-100
                    text-red-300
                    font-semibold
                    rounded
                    transition
                    duration-200
                  "
                href="#"
              >
                Chat with someone
              </a>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};
export default CreateCustomRing;
