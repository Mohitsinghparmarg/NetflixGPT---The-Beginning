
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p>Email: <a href="mailto:example@example.com" className="text-blue-400">example@example.com</a></p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
            {/* Add other social media links similarly */}          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <a href="/about" className="text-blue-400 hover:underline">About Us</a>
            <a href="/contact" className="text-blue-400 hover:underline ml-4">Contact Us</a>
            <a href="/privacy" className="text-blue-400 hover:underline ml-4">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
