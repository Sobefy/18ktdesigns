import BlogCarousel from "@components/Home/RecentProjects/BlogCarousel/BlogCarousel";

/* eslint-disable @next/next/no-img-element */
const RecentProjects = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        className="absolute top-0 left-0 hidden mt-10 xl:block"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 hidden mb-10 xl:block"
        src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
      <div className="relative max-w-4xl px-4 py-10 mx-auto">
        <BlogCarousel loop />
      </div>
    </div>
  );
};

export default RecentProjects;
