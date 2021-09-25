import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { reviewsCards } from "@lib/consts";
import Image from "next/image";
const ReviewsCards = () => {
  return (
    <div className="flex flex-wrap items-center justify-around -m-3">
      {reviewsCards.map((item) => (
        <div className="w-full p-3 md:w-1/2 lg:w-1/3" key={item.id}>
          <div className="p-6 border rounded-xl">
            <div className="mb-10">
              <PrimaryDescription textSize="blue" text={item.content} />
            </div>
            <div className="mb-6">
              <Image
                className="object-cover object-top w-12 h-12 rounded-full"
                src={item.authorImage}
                alt={item.nameAuthor}
                width={`${item.imageWidth}${item.imageUnit}`}
                height={`${item.imageHeight}${item.imageUnit}`}
              />
            </div>
            <div className="mb-2">
              <ComposedTitles subtitleText={item.nameAuthor} />
            </div>
            <PrimaryDescription text={item.job} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsCards;
