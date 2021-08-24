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
    <div className="absolute w-full px-4 xl:px-10 top-0 left-0 z-50">
      <nav className="flex justify-between items-center py-8">
        <a className="inline-block mr-auto text-lg font-semibold" href="#">
          <img
            className={`${alternateNav ? "h-7" : "h-12"}`}
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
            onClick={handleHamburgerClick}
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
              {alternateNav ? "Chat with someone" : "Start a Project"}
            </a>
          </div>
        </div>
      </nav>
      {navOpen ? (
        <div className="navbar-menu relative z-50">
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
              <a
                className="mr-auto text-lg font-semibold leading-none"
                href="#"
              >
                <img
                  className="h-7"
                  src="/zeus-assets/logo/logo-zeus-red.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button className="navbar-close" onClick={handleHamburgerClick}>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
      ) : null}
    </div>
  );
};

export default Header;
