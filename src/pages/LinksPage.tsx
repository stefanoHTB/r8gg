const LinksPage = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-md">
      <h1 className="text-3xl font-bold mb-6">Connect with Us</h1>

      <div className="flex flex-col space-y-4">
        {/* YouTube Link */}
        <a
          href="https://www.youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          YouTube
        </a>

        {/* Twitter Link */}
        <a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Twitter
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default LinksPage;
