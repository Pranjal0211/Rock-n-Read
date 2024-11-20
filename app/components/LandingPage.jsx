import { Italic } from 'lucide-react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/headphone-girl.webp" // Adjust to your actual image path
          alt="Rock ‘n’ Read Project"
          layout="fill" // Fill the parent element
          objectFit="cover" // Maintain aspect ratio
          className="absolute inset-0"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-5xl font-extrabold text-white mb-6">The Rock 'n' Read Project</h1>
          <h3 className="font-playfair italic bold text-2xl text-gray-300 mb-6">
            Rock 'n' Read aims to engage children in singing and developing basic music skills 
            to enhance their reading and learning abilities. Join us in making literacy fun, interactive, and accessible for every child.
          </h3>
          <button className="font-roboto text-lg px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
