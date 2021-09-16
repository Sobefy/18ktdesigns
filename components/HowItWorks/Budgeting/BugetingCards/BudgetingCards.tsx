import BudgetListSvg from "@components/Common/BudgetListSvg";
import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryButton from "@components/Common/PrimaryButton";
import { BudgetInfoType } from "@lib/types";

interface BudgetingCardsProps {
  data: BudgetInfoType;
}
const BudgetingCards = ({ data }: BudgetingCardsProps) => {
  const { id, weight, purity, diamondCarat, materials, complexity, price } =
    data;
  const printBlueCard = () => {
    if (id === 2) {
      return "bg-blue-50";
    }
    return "border";
  };
  const printBlueButton = () => {
    if (id === 2) {
      return "blue";
    }
    return "lg";
  };
  return (
    <div className={`p-6 mb-6  lg:p-12 rounded-xl ${printBlueCard()}`}>
      <div className="flex flex-wrap items-center -mx-4">
        <div className="self-start w-full px-4 mb-10 lg:w-1/5 lg:mb-0">
          <ComposedTitles subtitleText={weight} subtitleSize="sm" />
        </div>
        <div className="w-full px-4 mb-10 md:w-1/2 lg:w-2/5 lg:mb-0">
          <ul className="text-base lg:text-lg">
            <li className="flex items-center mb-6">
              <BudgetListSvg />
              <p className="font-medium">Gold Purity: {purity}</p>
            </li>
            <li className="flex items-center mb-6">
              <BudgetListSvg />
              <p className="font-medium">Diamond Carat: {diamondCarat}</p>
            </li>
            <li className="flex items-center mb-6">
              <BudgetListSvg />
              <p className="font-medium">
                Materials and Gemstones: {materials}
              </p>
            </li>
            <li className="flex items-center mb-6">
              <BudgetListSvg />
              <p className="font-medium">Complexity: {complexity}</p>
            </li>
          </ul>
        </div>
        <div className="w-full px-4 mb-10 md:w-1/2 lg:w-1/5 lg:mb-0">
          <div className="flex justify-center mb-2">
            <span className="self-start inline-block mr-1 text-xl font-semibold text-gray-500">
              $
            </span>
            <p className="self-end text-5xl font-semibold font-heading">
              {price}
            </p>
          </div>
          <p className="text-sm text-center text-gray-500 lg:text-right">
            Starting price
          </p>
        </div>
        <div className="w-full px-4 text-center lg:w-1/5 lg:text-right ">
          <div className="lg:inline-block md:w-auto">
            <PrimaryButton
              text="Quote Now"
              size={printBlueButton()}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetingCards;
