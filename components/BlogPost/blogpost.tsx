import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { blogposts } from "@lib/consts";
import Image from "next/image";
import BreadCrumbs from "../Common/BreadCrumbs/BreadCrumbs";

/* eslint-disable @next/next/no-img-element */
const blogpost = () => {
  const {
    title,
    authorName,
    date,
    subTitle,
    content,
    authorImage,
    imageWidth,
    imageUnit,
    imageHeight,
    contentImage,
  } = blogposts;
  return (
    <>
      <div className="relative pt-20">
        <img
          className="absolute top-0 left-0 hidden mt-24 lg:block"
          src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
          alt=""
        />
        <img
          className="absolute top-0 right-0 hidden mt-40 lg:block"
          src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt=""
        />
        <div className="container px-4 mx-auto mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <BreadCrumbs />
            <div className="mb-10">
              <ComposedTitles subtitleSize="md" subtitleText={title} />
            </div>
            <div className="flex items-center justify-center">
              <div className="mr-6">
                <Image
                  className="object-cover object-top w-16 h-16 rounded-full"
                  src={authorImage}
                  alt={authorImage}
                  width={`${imageWidth}${imageUnit}`}
                  height={`${imageHeight}${imageUnit}`}
                />
              </div>
              <div className="text-left">
                <div className="mb-2">
                  <ComposedTitles subtitleText={authorName} />
                </div>
                <PrimaryDescription text={date} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-112 lg:h-1/2">
          <Image
            className="object-cover object-top w-full h-full "
            src={contentImage}
            alt={contentImage}
            layout="fill"
          />
        </div>
      </div>
      <div className="py-10">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <ComposedTitles subtitleText={subTitle} subtitleSize="sm" />
            </div>
            <div className="mb-6">
              <PrimaryDescription textSize="gray" text={content} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default blogpost;
