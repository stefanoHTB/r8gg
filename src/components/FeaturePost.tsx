import { Link } from "react-router-dom";

type FeaturedPostProps = {
  post: {
    title: string;
    description: string;
    imageSrc: string;
  };
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="col-span-2 md:col-span-1 max-w-4xl mx-auto bg-white shadow-md overflow-hidden rounded-md mb-8">
      {/* Display the image */}
      <Link to={`/blog/0`} className="block">
        <img
          src={post.imageSrc}
          alt={post.title}
          className="w-full h-96 object-cover object-center"
        />
      </Link>

      <div className="p-4">
        {/* Display the title */}
        <Link
          to={`/blog/0`}
          className="text-xl font-semibold text-gray-800 block hover:underline"
        >
          {post.title}
        </Link>

        {/* Display the description */}
        <p className="mt-2 text-gray-600">{post.description}</p>
      </div>
    </div>
  );
};

export default FeaturedPost;
