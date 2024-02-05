import { useParams } from "react-router-dom";
import blogs from "../blogs.json"; // Import the fake data
import { useEffect } from "react";

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const index = parseInt(id!, 10);
  const blog = blogs[index];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="container mx-auto mt-8 text-black dark:text-white p-5">
      <h1 className="text-4xl font-semibold mb-4">{blog.title}</h1>
      <img src={blog.imageSrc} alt={blog.title} className="mb-4" />
      {/* Loop through paragraphs */}
      {blog.paragraphs ? (
        blog.paragraphs!.map((paragraph, index) => (
          <div key={index} className="mb-4">
            <p>{paragraph.content}</p>
            <br />
            {paragraph.image && (
              <img
                src={paragraph.image}
                alt={`Paragraph Image ${index + 1}`}
                className="mb-2"
              />
            )}
          </div>
        ))
      ) : (
        <p>No paragraphs available for this blog.</p>
      )}
      {/* Styled Date Div */}
      <div className="mt-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
        <p className="text-gray-600 dark:text-gray-400">Date: {blog.date}</p>
      </div>
    </div>
  );
};

export default BlogPage;
