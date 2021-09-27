import { BreadCrumbsType } from "@lib/types";
interface BreadCrumbsProps {
  data: BreadCrumbsType[];
}
const BreadCrumbs = ({ data }: BreadCrumbsProps) => {
  return (
    <div className="flex items-center justify-center mb-8 text-xs font-semibold text-gray-500">
      {data.map((item, i, array) => (
        <div key={item.id}>
          <a href={item.url}>{item.title}</a>
          {i !== array.length - 1 ? (
            <label className="inline-block px-1">/</label>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
