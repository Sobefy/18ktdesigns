import BackButton from "../../BackButton/BackButton";
import Title from "../../Title";
import Description from "../../Description";
import Select from "../../Select";
import Checkbox from "../../Checkbox";
import NextButton from "../../NextButton";
import InfoPopUp from "../../InfoPopUp";

const SetYourBudget = () => {
  const minPrice = [
    {
      id: 1,
      value: "any",
      label: "Any",
    },
    {
      id: 2,
      value: "200",
      label: "$200",
    },
    {
      id: 3,
      value: "300",
      label: "$300",
    },
    {
      id: 4,
      value: "400",
      label: "$400",
    },
    {
      id: 5,
      value: "500",
      label: "$500",
    },
    {
      id: 6,
      value: "600",
      label: "$600",
    },
    {
      id: 7,
      value: "700",
      label: "$700",
    },
    {
      id: 8,
      value: "800",
      label: "$800",
    },
    {
      id: 9,
      value: "900",
      label: "$900",
    },
    {
      id: 10,
      value: "1000",
      label: "$1000",
    },
    {
      id: 11,
      value: "1100",
      label: "$1100",
    },
    {
      id: 12,
      value: "1200",
      label: "$1200",
    },
    {
      id: 13,
      value: "1300",
      label: "$1300",
    },
    {
      id: 14,
      value: "1400",
      label: "$1400",
    },
    {
      id: 15,
      value: "1500",
      label: "$1500",
    },
    {
      id: 16,
      value: "1600",
      label: "$1600",
    },
    {
      id: 17,
      value: "1700",
      label: "$1700",
    },
    {
      id: 18,
      value: "1800",
      label: "$1800",
    },
    {
      id: 19,
      value: "1900",
      label: "$1900",
    },
    {
      id: 20,
      value: "2000",
      label: "$2000",
    },
    {
      id: 21,
      value: "2100",
      label: "$2100",
    },
    {
      id: 22,
      value: "2300",
      label: "$2300",
    },

    {
      id: 24,
      value: "2400",
      label: "$2400",
    },{
      id: 25,
      value: "2500",
      label: "$3500",
    },

    {
      id: 30,
      value: "3000",
      label: "$3000",
    },{
      id: 31,
      value: "3500",
      label: "$3500",
    },
    {
      id: 32,
      value: "4000",
      label: "$4000",
    },
    {
      id: 33,
      value: "4500",
      label: "$4500",
    },
    {
      id: 34,
      value: "5000",
      label: "$5000",
    },
    {
      id: 35,
      value: "5500",
      label: "$5500",
    },
    {
      id: 36,
      value: "6000",
      label: "$6000",
    },
    {
      id: 37,
      value: "6500",
      label: "$6500",
    },
    {
      id: 38,
      value: "7000",
      label: "$7000",
    },
    {
      id: 39,
      value: "7500",
      label: "$7500",
    },
    {
      id: 40,
      value: "8000",
      label: "$8000",
    },
    {
      id: 41,
      value: "8500",
      label: "$8500",
    },
    {
      id: 42,
      value: "9000",
      label: "$9000",
    },
    {
      id: 43,
      value: "9500",
      label: "$9500",
    },
    {
      id: 44,
      value: "10000",
      label: "$10000",
    },
    {
      id: 45,
      value: "11000",
      label: "$11000",
    },
    {
      id: 46,
      value: "12000",
      label: "$12000",
    },
    {
      id: 47,
      value: "13000",
      label: "$13000",
    },
    {
      id: 48,
      value: "14000",
      label: "$14000",
    },
    {
      id: 49,
      value: "15000",
      label: "$15000",
    },
    {
      id: 50,
      value: "16000",
      label: "$16000",
    },
    {
      id: 51,
      value: "17000",
      label: "$17000",
    },
    {
      id: 52,
      value: "18000",
      label: "$18000",
    },
    {
      id: 53,
      value: "19000",
      label: "$19000",
    },
    {
      id: 54,
      value: "20000",
      label: "$20000",
    },
    {
      id: 55,
      value: "21000",
      label: "$21000",
    },
    {
      id: 56,
      value: "22000",
      label: "$22000",
    },
    {
      id: 57,
      value: "23000",
      label: "$23000",
    },
    {
      id: 58,
      value: "24000",
      label: "$24000",
    },
    {
      id: 59,
      value: "24000+",
      label: "$24000+",
    },
  ];
  const maxPrice = [
    {
      id: 1,
      value: "any",
      label: "Any",
    },
    {
      id: 2,
      value: "200",
      label: "$200",
    },
    {
      id: 3,
      value: "300",
      label: "$300",
    },
    {
      id: 4,
      value: "400",
      label: "$400",
    },
    {
      id: 5,
      value: "500",
      label: "$500",
    },
    {
      id: 6,
      value: "600",
      label: "$600",
    },
    {
      id: 7,
      value: "700",
      label: "$700",
    },
    {
      id: 8,
      value: "800",
      label: "$800",
    },
    {
      id: 9,
      value: "900",
      label: "$900",
    },
    {
      id: 10,
      value: "1000",
      label: "$1000",
    },
    {
      id: 11,
      value: "1100",
      label: "$1100",
    },
    {
      id: 12,
      value: "1200",
      label: "$1200",
    },
    {
      id: 13,
      value: "1300",
      label: "$1300",
    },
    {
      id: 14,
      value: "1400",
      label: "$1400",
    },
    {
      id: 15,
      value: "1500",
      label: "$1500",
    },
    {
      id: 16,
      value: "1600",
      label: "$1600",
    },
    {
      id: 17,
      value: "1700",
      label: "$1700",
    },
    {
      id: 18,
      value: "1800",
      label: "$1800",
    },
    {
      id: 19,
      value: "1900",
      label: "$1900",
    },
    {
      id: 20,
      value: "2000",
      label: "$2000",
    },
    {
      id: 21,
      value: "2100",
      label: "$2100",
    },
    {
      id: 22,
      value: "2300",
      label: "$2300",
    },

    {
      id: 24,
      value: "2400",
      label: "$2400",
    },{
      id: 25,
      value: "2500",
      label: "$3500",
    },

    {
      id: 30,
      value: "3000",
      label: "$3000",
    },{
      id: 31,
      value: "3500",
      label: "$3500",
    },
    {
      id: 32,
      value: "4000",
      label: "$4000",
    },
    {
      id: 33,
      value: "4500",
      label: "$4500",
    },
    {
      id: 34,
      value: "5000",
      label: "$5000",
    },
    {
      id: 35,
      value: "5500",
      label: "$5500",
    },
    {
      id: 36,
      value: "6000",
      label: "$6000",
    },
    {
      id: 37,
      value: "6500",
      label: "$6500",
    },
    {
      id: 38,
      value: "7000",
      label: "$7000",
    },
    {
      id: 39,
      value: "7500",
      label: "$7500",
    },
    {
      id: 40,
      value: "8000",
      label: "$8000",
    },
    {
      id: 41,
      value: "8500",
      label: "$8500",
    },
    {
      id: 42,
      value: "9000",
      label: "$9000",
    },
    {
      id: 43,
      value: "9500",
      label: "$9500",
    },
    {
      id: 44,
      value: "10000",
      label: "$10000",
    },
    {
      id: 45,
      value: "11000",
      label: "$11000",
    },
    {
      id: 46,
      value: "12000",
      label: "$12000",
    },
    {
      id: 47,
      value: "13000",
      label: "$13000",
    },
    {
      id: 48,
      value: "14000",
      label: "$14000",
    },
    {
      id: 49,
      value: "15000",
      label: "$15000",
    },
    {
      id: 50,
      value: "16000",
      label: "$16000",
    },
    {
      id: 51,
      value: "17000",
      label: "$17000",
    },
    {
      id: 52,
      value: "18000",
      label: "$18000",
    },
    {
      id: 53,
      value: "19000",
      label: "$19000",
    },
    {
      id: 54,
      value: "20000",
      label: "$20000",
    },
    {
      id: 55,
      value: "21000",
      label: "$21000",
    },
    {
      id: 56,
      value: "22000",
      label: "$22000",
    },
    {
      id: 57,
      value: "23000",
      label: "$23000",
    },
    {
      id: 58,
      value: "24000",
      label: "$24000",
    },
    {
      id: 59,
      value: "24000+",
      label: "$24000+",
    },
  ];

  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <div className="flex">
          <BackButton text="Back" />
          <Title text="Set Your Budget" />
          <InfoPopUp />
        </div>
        <Description text="If you have a specific price point in mind, let us know so we can help guide you towards options that fit your budget." />
        <Select defaultOptionLabel="Min" options={minPrice} />
        <Select defaultOptionLabel="Max" options={maxPrice} />
        <Checkbox text="I'm not sure" />
        <NextButton text="Next" />
      </div>
    </div>
  );
};
export default SetYourBudget;
