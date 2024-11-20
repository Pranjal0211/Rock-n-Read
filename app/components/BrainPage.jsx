const BrainPage = () => {
    return (
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/brain.webp')", // Replace with your image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-80">
          <h2 className="text-4xl font-bold text-white mb-6">
            It’s All About the Brain!
          </h2>
          <p className="text-2xl text-gray-300 max-w-2xl mb-6 font-roboto">
            Brain research has found that sound processing and retention is the
            key to language and literacy. Singing and learning basic music skills
            are primary ways to prepare all young brains for reading.
          </p>
          <button className="font-roboto text-lg px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300">
            More about Brain Research
          </button>
        </div>
      </section>
    );
  };
  
  export default BrainPage;
  