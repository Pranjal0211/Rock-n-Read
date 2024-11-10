import Image from "next/image";
import Head from 'next/head';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import ProgramInfo from "./components/ProgramInfo";
import Footer from "./components/Footer";
import RealStories from "./components/RealStories";
import ResourceLibrary from "./components/ResourceLib";
//import Footer from '../components/Footer';

export default function Home() {
  return (
    <> 
      <Navbar />
      <LandingPage />
      <ProgramInfo />
      <ResourceLibrary />
      <RealStories />
      <Footer />
    </>
  );
}
