interface TitleProps {
  text: string;
}
const Title = ({ text }: TitleProps) => {
  return (
    <>
      <h1 className="mb-6 lg:mb-12 text-2xl font-semibold">{text}</h1>
    </>
  );
};
export default Title;
