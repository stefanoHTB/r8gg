import PostCard from "../components/PostCard";
import blogs from "../blogs.json"; // Import the fake data
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Message from "../components/Message";
import { useEffect } from "react";
import ReactGA from "react-ga";

const HomePage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className="container mx-auto mt-8 bg-white dark:bg-stone-950 pb-20	">
      <Banner
        title={"Crafting Excellence: Your Gateway to Shopify App Mastery"}
        description={
          "Embark on a journey of Shopify app development mastery. Our concise and practical guides to empowers you to create robust and scalable apps tailored to your business needs. "
        }
        button1Text={"Learn More"}
        button2Text={"Links"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 pb-20 p-5">
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
      <Message
        description={
          "Empower yourself with the knowledge and skills needed to excel in Shopify app development. Whether you aspire to create innovative solutions for your business or offer your creations to a global audience, our guide is your companion in transforming aspirations into reality. Begin your transformative journey into Shopify app development today, and redefine what's possible in the world of e-commerce."
        }
      />
    </div>
  );
};

export default HomePage;
