type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const PostCard = (props: CardProps) => {
  const { title, description, imageSrc } = props;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-md">
      {/* Display the image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />

      <div className="p-4">
        {/* Display the title */}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

        {/* Display the description */}
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
