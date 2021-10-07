import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import BudgetingCards from "@components/HowItWorks/Budgeting/BugetingCards";
import { budgetInfo } from "@lib/consts";
const Budgeting = () => {
  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-center mb-16 -mx-4">
          <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
            <ComposedTitles titleText="How pricing works" titleSize="sm" />
            <div className="mt-8">
              <ComposedTitles
                subtitleText="Budgeting your piece"
                subtitleSize="md"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-md lg:ml-auto lg:mt-8">
              <PrimaryDescription
                text="We know that buying an engagement ring is a once-in-a lifetime
                  purchase. It needs to be perfect! When you schedule an
                  appointment with us, one of our expert jewelers will ask about
                  what's important and meaningful to you - like whether it
                  should have diamonds on every side or look more vintage - so
                  they can help design something uniquely yours."
                textSize="gray"
              />
            </div>
          </div>
        </div>
        {budgetInfo.map((budget) => (
          <BudgetingCards key={budget.id} data={budget} />
        ))}
      </div>
    </div>
  );
};

export default Budgeting;
