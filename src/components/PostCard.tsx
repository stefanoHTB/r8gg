type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const PostCard = (props: CardProps) => {
  const { title, description, imageSrc } = props;

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gradient-to-t from-gray-800 via-gray-900 to-black shadow-md overflow-hidden rounded-md">
      {/* Display the image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />

      <div className="p-4">
        {/* Display the title */}
        <h2 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h2>

        {/* Display the description */}
        <p className="mt-2 text-black dark:text-white">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
