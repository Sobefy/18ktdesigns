import ComposedTitles from "@components/Common/ComposedTitles";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";
import { ImageGridContent } from "@lib/consts";
import ImageCard from "./ImageCard";
const ImageGrid = () => {
  return (
    <>
      <div className="container px-4 py-10 mx-auto">
        <div className="flex flex-wrap items-end justify-between mb-6 lg:mb-14">
          <div className="mb-4 md:mb-0">
            <div className="inline-block mb-8">
              <ComposedTitles titleText="Our Recent Works" titleSize="sm" />
            </div>
            <div className="mt-2">
              <ComposedTitles
                subtitleText="Check out these happy couples"
                subtitleSize="md"
              />
            </div>
          </div>
          <div className="inline-block w-full mb-2 mr-4 md:w-auto">
            <PrimaryButton
              text="Start a Project"
              size="md"
              onClick={() => {}}
            />
          </div>
        </div>
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="grid grid-cols-3 gap-4 -mx-3 ">
              {ImageGridContent.map((image) => (
                <ImageCard key={image.id} data={image} />
              ))}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </>
  );
};
export default ImageGrid;
