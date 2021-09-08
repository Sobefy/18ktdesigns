interface ServiceCardsProps {
  position: string;
}
const ServicesCards = ({ position }: ServiceCardsProps) => {
  return (
    <>
      <span className="flex items-center justify-center w-12 h-12 mb-6 text-sm rounded-full lg:mb-8 bg-blue-50">
        {position}
      </span>
    </>
  );
};

export default ServicesCards;
