interface DescriptionProps {
    DescriptionText: string;
  }
const Description = ({ DescriptionText }: DescriptionProps) => {
    return (
          <>
          <p className="mb-6 lg:mb-14 text-gray-500 leading-relaxed">
          {DescriptionText}
          </p>
          </>
    );
  };
  export default Description;