import { Italic } from 'lucide-react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-primary to-accentYellow"> {/* Gradient background */}
      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="bg-neutralGray shadow-lg rounded-lg p-8 text-center"> {/* Card style for text */}
          <h1 className="text-5xl font-extrabold text-primary mb-4">The Rock 'n' Read Project</h1>
          <h3 className="text-3xl font-bold text-accentRed mb-4">Sing Today... Read Forever</h3>
          <p className="text-lg text-textGray mb-6">
            We aims to engage children in singing and developing basic music skills to enhance their reading and learning abilities.  
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-accentRed transition duration-300 transform hover:scale-105"> {/* Button styling */}
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1"> {/* Added padding here */}
      <div className="relative h-full w-full p-5 overflow-hidden">
        <Image
          src="/guitar-girl.jpeg" // Adjust to your actual image path
          alt="Rock ‘n’ Read Project"
          layout="fill" // Fill the parent element
          objectFit="cover" // Cover the area while maintaining aspect ratio
          //className="absolute inset-0"
          className="rounded-lg" // Optional: adds rounded corners
        />
      </div>
    </div>
    </div>
  );
};

export default LandingPage;

///guitar-girl.jpeg