import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { BlogCarouselItem } from "@lib/types";
import Image from "next/image";

interface BlogCarouselCardProps {
  data: BlogCarouselItem;
}
const BlogCarouselCard = ({ data }: BlogCarouselCardProps) => {
  const {
    id,
    value,
    label,
    summary,
    image = null,
    imageWidth = 864,
    imageHeight = 384,
    imageUnit = "px",
  } = data;
  return (
    <div className="inline-flex flex-col items-center w-full whitespace-normal justify-items-center">
      <div className="relative max-w-4xl mx-auto">
        <div className="w-full mb-6 lg:mb-12">
          {image ? (
            <Image
              src={image}
              alt={value}
              width={`${imageWidth}${imageUnit}`}
              height={`${imageHeight}${imageUnit}`}
              objectFit="cover"
              className="rounded-lg"
            />
          ) : null}
        </div>
        <div>
          <div className="mb-6">
            <ComposedTitles subtitleText={`${label}`} subtitleSize />
          </div>

          <PrimaryDescription text={`${summary}`} textSize="gray" />
        </div>
      </div>
    </div>
  );
};
export default BlogCarouselCard;
