import { blogCardInfo } from "@lib/consts";
import BlogCards from "./BlogCards";

const Blog = () => {
  return (
    <div className="container px-4 py-20 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-16">
        {blogCardInfo.map((blog, index) => (
          <BlogCards key={blog.id} index={index} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
