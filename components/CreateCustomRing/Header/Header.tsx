/* eslint-disable @next/next/no-img-element */
// TODO: Change for Image component
import { useState } from "react";

interface HeaderProps {
  alternateNav?: boolean;
}

const Header = ({ alternateNav = false }: HeaderProps) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="absolute top-0 left-0 z-50 w-full px-4 py-8 xl:px-10">
      <nav className="flex items-center justify-between">
        <a className="inline-block mr-auto text-lg font-semibold" href="#">
          <img
            className={`${alternateNav ? "h-7" : "h-16"}`}
            src="/images/18KT-LOGO-100x-2x.png"
            alt=""
            width="auto"
          />
        </a>
        <div className="ml-auto lg:hidden">
          <button
            className="flex items-center p-3 rounded  navbar-burger hover:bg-gray-50"
            onClick={handleHamburgerClick}
          >
            <svg
              className="block w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div className="hidden w-auto lg:flex lg:w-3/5 lg:pl-16 ">
          {alternateNav ? null : (
            <ul className="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
              <li>
                <a className="text-sm font-medium" href="#">
                  How it works
                </a>
              </li>
              <li>
                <a className="text-sm font-medium" href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="text-sm font-medium" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-sm font-medium" href="#">
                  Shop Jewerly
                </a>
              </li>
            </ul>
          )}
          <div className={alternateNav ? "ml-auto" : "null"}>
            <a
              className="inline-block px-8 py-3 text-sm font-medium leading-normal text-red-500 transition duration-200 rounded  bg-red-50 hover:bg-red-100"
              href="#"
            >
              {alternateNav ? "Chat with someone" : "Start a Project"}
            </a>
          </div>
        </div>
      </nav>
      {navOpen ? (
        <div className="relative z-50 navbar-menu ">
          <div className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop"></div>
          <nav
            className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto bg-white border-r "
          >
            <div className="flex items-center mb-8">
              <a
                className="mr-auto text-lg font-semibold leading-none"
                href="#"
              >
                <img
                  className={alternateNav ? "h-7" : "h-16"}
                  src={
                    alternateNav
                      ? "/zeus-assets/logo/logo-zeus-red.svg"
                      : "/images/18KT-LOGO-100x-2x.png"
                  }
                  alt=""
                  width="auto"
                />
              </a>
              <button className="navbar-close" onClick={handleHamburgerClick}>
                <svg
                  className="w-6 h-6 text-gray-500 cursor-pointer  hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              {alternateNav ? null : (
                <ul>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-medium text-gray-900 rounded  hover:bg-gray-50"
                      href="#"
                    >
                      How it works
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-medium text-gray-900 rounded  hover:bg-gray-50"
                      href="#"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-medium text-gray-900 rounded  hover:bg-gray-50"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-medium text-gray-900 rounded  hover:bg-gray-50"
                      href="#"
                    >
                      Shop Jewelry
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block py-3 text-sm font-semibold leading-normal text-center text-red-300 transition duration-200 rounded  bg-red-50 hover:bg-red-100"
                  href="#"
                >
                  {alternateNav ? "Chat with someone" : "Start a Project"}
                </a>
              </div>
              <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                <span>© 2021 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
