"use client";

const Footer = () => {
  const handleContactClick = () => {
    // Replace this alert with your actual contact page route
    window.location.href = "/contact"; // Redirect to a contact page
  };

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Organization Details */}
          <div>
            <h3 className="text-xl font-bold mb-4">The Rock ‘n’ Read Project</h3>
            <p>
              A Minnesota 501(c)(3) non-profit organization committed to making
              literacy accessible and engaging through the power of music.
            </p>
            <p className="text-center">612-710-0651</p>
            <p className="text-center">Info@rnrproject.org</p>
          </div>

          {/* Section 2: Newsletter Sign-Up */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter Sign-Up</h3>
            <form className="flex flex-wrap gap-4 items-center">
            <input
                type="text"
                placeholder="Your full name"
                className="flex-1 px-4 py-2 rounded-md text-gray-800 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="flex-1 bg-accentYellow text-primary px-4 py-2 rounded-md hover:bg-yellow-600 transition"
              >
                Subscribe
              </button>
            </form>
            <p className=" flex-1 text-sm mt-2">
              Stay updated with new resources, tips, and program updates.
            </p>
          </div>

          {/* Section 3: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Have questions or need more information?</p>
            <button
              className="mt-4 bg-accentRed text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} The Rock 'n' Read Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
