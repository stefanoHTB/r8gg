import PostCard from "../components/PostCard";
import blogs from "../blogs.json"; // Import the fake data
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Latest Blog Posts</h1>
      {/* <FeaturedPost post={firstBlogPost} /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <Link key={index} to={`/blog/${index}`}>
            <PostCard
              key={index}
              title={blog.title}
              description={blog.description}
              imageSrc={blog.imageSrc}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
