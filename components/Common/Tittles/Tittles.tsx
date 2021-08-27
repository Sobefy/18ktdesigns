
const Tittles = (props: { hDosText: string ; pDosText: string ; }) => {
  return (
        <>
        <h1 className="mb-6 lg:mb-12 text-2xl font-semibold">
          {props.hDosText}
        </h1>
        <p className="mb-6 lg:mb-14 text-gray-500 leading-relaxed">
        {props.pDosText}
        </p>
        </>
  );
};
export default Tittles;