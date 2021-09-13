import { useState } from "react";
import { cards } from "@lib/consts";

import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryButton from "@components/Common/PrimaryButton";
import Description from "@components/Common/Description";

/* eslint-disable @next/next/no-img-element */

export const TabGroup = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: number) => {
    setToggle(index);
  };
  const filteredCard = cards.filter((card) => card.id === toggle);
  const filteredCardSelected = filteredCard[0];
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
                          className={`inline-block px-8 py-4 text-sm font-semibold
                            ${
                              toggle === id
                                ? "rounded shadow bg-white"
                                : "bg-blue-50 text-gray-500"
                            }`}
                        >
                          {title}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="max-w-md" key={filteredCardSelected.id}>
                    <div className="mb-4 lg:mb-10">
                      <ComposedTitles
                        subtitleText={filteredCardSelected.title}
                        subtitleSize="md"
                      />
                    </div>
                    <div className="mb-6 leading-loose text-gray-500 lg:mb-10">
                      <Description text={filteredCardSelected.content} />
                    </div>
                    <div className="inline-block mb-10 lg:mb-0">
                      <PrimaryButton
                        text={filteredCardSelected.textButton}
                        size="lg"
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                </div>
                <div className="relative w-full px-4 lg:w-1/2">
                  <img
                    className="rounded-xl"
                    src={filteredCardSelected.img}
                    alt={filteredCardSelected.title}
                  />
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