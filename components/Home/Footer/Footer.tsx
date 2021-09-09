/* eslint-disable @next/next/no-img-element */
import { listFooter, socialNetworkLinks } from "@lib/consts";
import SvgSocial from "../../Common/SvgSocial/SvgSocial";

const Footer = () => {
  const date = new Date();
  return (
    <div className="py-10 lg:py-20">
      <div className="container px-4 mx-auto mb-12 md:mb-20">
        <div className="max-w-2xl mx-auto text-center">
          <a
            className="inline-block mb-8 text-lg font-semibold text-gray-900"
            href="#"
          >
            <img src="images/18KT-LOGO-100x-2x.png" alt="" width="75" />
          </a>
          <ul className="flex flex-wrap items-center justify-center mb-8 space-x-8 text-sm ">
            {listFooter.map((option) => (
              <li key={option.id} className="mb-2 md:mb-0">
                <a
                  className="font-medium hover:text-gray-600"
                  href={option.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-wrap items-center justify-center mb-8 space-x-8 text-sm ">
            {socialNetworkLinks.map((option) => (
              <li key={option.id} className="mb-2 md:mb-0">
                <a
                  className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gray-50"
                  href={option.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SvgSocial ico={option.value} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="px-4 pt-8 text-sm text-center text-gray-500 border-t">
        All rights reserved © 18kt Designs - A Beachside Merchants Company -
        {date.getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
