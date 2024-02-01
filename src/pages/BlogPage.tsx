import { useParams } from "react-router-dom";
import blogs from "../blogs.json"; // Import the fake data

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const index = parseInt(id!, 10);
  const blog = blogs[index];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">{blog.title}</h1>
      <img src={blog.imageSrc} alt={blog.title} className="mb-4" />
      <p>{blog.description}</p>
      <p>Date: {blog.date}</p>
    </div>
  );
};

export default BlogPage;
