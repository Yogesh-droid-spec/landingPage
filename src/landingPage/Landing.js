import React from "react";
// Sections
import "../style/flexboxgrid.min.css";
import '../style/index.css';
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Features";
import Projects from "../components/Sections/HowItWorks";
import Blog from "../components/Sections/Testimonials";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      
      <Contact />
      <Footer />
    </>
  );
}


