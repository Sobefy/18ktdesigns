import { useState } from "react";
import { cards } from "@lib/consts";
import ComposedTitles from "@components/Common/ComposedTitles";
import ImageTab from "@components/Common/ImageTab";
/* eslint-disable @next/next/no-img-element */

 export const TabGroup = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: number) => {
    setToggle(index);
  };
  return (
    <>
      <div className="container pt-20 mx-auto mb-2 ">
        <ComposedTitles
          subtitleSize="md"
          subtitleText="Looking for other type of jewelry?"
        />
      </div>
      <div className="relative">
        <div className="container mx-auto">
          <div className="container relative py-10 mx-auto lg:py-10">
            <div className="relative p-6 lg:p-16 bg-blue-50 rounded-xl">
              <div className="absolute bottom-0 right-0 hidden lg:block">
                <img
                  className="w-full h-full ml-auto"
                  src="zeus-assets/images/backgrounds/yellow-light.svg"
                  alt=""
                />
              </div>
              <div className="relative flex flex-wrap items-center -mx-4">
                <div className="relative w-full px-4 lg:w-1/2">
                  <ul className="flex flex-wrap mb-6 lg:mb-10">
                    {cards.map(({ id, title }) => (
                      <li
                        key={id}
                        className="w-1/2 md:w-auto"
                        onClick={() => toggleTab(id)}
                      >
                        <p
                          className={
                            toggle === id
                              ? "inline-block px-8 py-4 text-sm font-semibold rounded shadow bg-white"
                              : "inline-block px-8 py-4 text-sm font-semibold bg-blue-50 text-gray-500"
                          }
                        >
                          {title}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {cards.map(({ id, title, content}) => (
                    <div
                      className={
                        toggle === id ? "block max-w-md" : "hidden max-w-md"
                      }
                      key={id}
                    >
                      <h2 className="mb-4 text-4xl font-semibold lg:mb-10">
                        {title}
                      </h2>
                      <p className="mb-6 leading-loose text-gray-500 lg:mb-10">
                        {content}
                      </p>
                      <a
                        className="inline-block px-12 py-4 mb-10 text-sm font-medium leading-normal text-white transition duration-200 bg-red-400 rounded lg:mb-0 hover:bg-red-300"
                        href="#"
                      >
                        Shop {title}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="relative w-full px-4 lg:w-1/2" >
                     <ImageTab toggle={toggle}/>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TabGroup;
