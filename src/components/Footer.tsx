import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-stone-950 text-black dark:text-white py-12 border-t dark:border-stone-900">
      <div className="container mx-auto flex flex-wrap items-center justify-around">
        {/* Navigation Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="list-none">
            <FooterLink href="/" text="Home" />
            <FooterLink href="/about" text="About Us" />
            <FooterLink href="/links" text="Links" />
            <FooterLink href="/" text="Blog" />
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Blog Categories</h3>
          <ul className="list-none">
            <FooterLink href="#" text="Technology" />
            <FooterLink href="#" text="Shopify" />
            <FooterLink href="#" text="Devops" />
            <FooterLink href="#" text="Coding" />
          </ul>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="text-center mt-8">
        <p className="text-sm">
          &copy; 2024 Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => (
  <li className="mb-2">
    <a href={href} className="hover:text-blue-300">
      {text}
    </a>
  </li>
);
