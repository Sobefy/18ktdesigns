interface TittleProps {
  TittleText: string;
}
const Tittle = ({ TittleText }: TittleProps) => {
  return (
        <>
        <h1 className="mb-6 lg:mb-12 text-2xl font-semibold">
          {TittleText}
        </h1>
        </>
  );
};
export default Tittle;