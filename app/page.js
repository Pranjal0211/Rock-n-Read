import Image from "next/image";
import Head from 'next/head';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import ProgramInfo from "./components/ProgramInfo";
import Footer from "./components/Footer";
import RealStories from "./components/RealStories";
import ResourceLibrary from "./components/ResourceLib";
import BrainPage from "./components/BrainPage";
//import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
    <div className="snap-container"> //to make it scroll prettily like fullpage js
        <Navbar />
        {/* Scrollable Content */}
      <div className="snap-section">
        <LandingPage />
      </div>
      <div className="snap-section">
        <ProgramInfo />
      </div>
      <div className="snap-section">
        <BrainPage />
      </div>
      <div className="snap-section">
        <ResourceLibrary />
      </div>
      <div className="snap-section">
        <RealStories />
      </div>
      </div>  
      
        <Footer />
      
      
    </div>

    // <> 
    //   <Navbar />
    //   <LandingPage />
    //   <ProgramInfo />
    //   <BrainPage />
    //   <ResourceLibrary />
    //   <RealStories />
    //   <Footer />
    // </>
  );
}
