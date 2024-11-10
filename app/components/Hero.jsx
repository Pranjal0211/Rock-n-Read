// app/components/Hero.js
"use client";

import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

const Hero = () => {
  useEffect(() => {
    // Initialize fullpage.js
    new fullpage("#fullpage", {
      autoScrolling: true,
      navigation: true,
    });

    // Cleanup on component unmount
    return () => {
      fullpage.destroy("all");
    };
  }, []);

  return (
    <div id="fullpage">
      {/* Page 1 */}
      <div className="section bg-hero flex items-center justify-center h-screen">
        <h1 className="text-white text-4xl font-bold">Welcome to Rock ‘n’ Read</h1>
      </div>

      {/* Page 2 */}
      <div className="section bg-orange-500 flex items-center justify-center h-screen">
        <h1 className="text-white text-4xl font-bold">Engaging Children Through Music</h1>
      </div>

      {/* Page 3 */}
      <div className="section bg-purple-500 flex items-center justify-center h-screen">
        <h1 className="text-white text-4xl font-bold">Empowering Learning and Literacy</h1>
      </div>
    </div>
  );
};

export default Hero;
