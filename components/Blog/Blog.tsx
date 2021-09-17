import { blogCardInfo } from "@lib/consts";
import BlogCards from "./BlogCards";

const Blog = () => {
  return (
    <div className="container px-4 py-20 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-16">
        {blogCardInfo.map((blog) => (
          <BlogCards key={blog.id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
