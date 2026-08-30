"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      <div
        style={{
          position: "relative",
          background: "#050505",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <main id="main-content" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}>
          <Hero />
          <Work />
          <About />
          <TechStack />
          <Process />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
