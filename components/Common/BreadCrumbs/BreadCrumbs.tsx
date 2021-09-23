import { BreadCrumbsItems } from "@lib/consts";
const BreadCrumbs = () => {
  const BreadClass = (index: number) => {
    const last = BreadCrumbsItems.length - 1;
    switch (index) {
      case 0:
        return "/";
      case 1:
        return "/";
      case 2:
        return "/";
      case last:
        return "/";
      default:
        return "";
    }
  };
  return (
    <div className="flex items-center justify-center mb-8 text-xs font-semibold text-gray-500">
      {BreadCrumbsItems.map((item) => (
        <>
          <a href={item.src} key={item.id}>
            {item.title}
          </a>
          <label className="inline-block px-1">{BreadClass(item.id)}</label>
        </>
      ))}
    </div>
  );
};

export default BreadCrumbs;
