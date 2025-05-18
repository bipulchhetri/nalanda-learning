import About from "@/components/About";
import Blog from "@/components/BlogPosts";
import BoardOfDirectors from "@/components/BoardOfDirectors";
import ChooseUsSection from "@/components/ChooseUsSection";
import CTABlock from "@/components/CTABlock";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/footer";
import GallerySection from "@/components/GallerySection";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProgramsSection from "@/components/ProgramsSection";

import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
<main>
  
  <Navbar/>
  <Hero/>
  <About/>
  <ChooseUsSection/>
  <VideoSection/> 
  <BoardOfDirectors/>
  <CTABlock/>
  <ProgramsSection/>
  <GallerySection/>
  <EventsSection/>
  <Blog/>
  <Footer/>
</main>
  );
}
