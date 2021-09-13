/* eslint-disable @next/next/no-img-element */
interface ServiceSvgProps {
  bottom?: boolean;
}
const ServicesSvg = ({ bottom }: ServiceSvgProps) => {
  return (
    <>
      {bottom ? (
        <img
          className="absolute top-0 left-0 hidden ml-24 -mt-24 lg:block"
          src="zeus-assets/icons/line-little.svg"
          alt=""
        />
      ) : (
        <img
          className="absolute top-0 left-0 hidden ml-24 -mt-10 lg:block"
          src="zeus-assets/icons/line-little-top.svg"
          alt=""
        />
      )}
    </>
  );
};

export default ServicesSvg;
