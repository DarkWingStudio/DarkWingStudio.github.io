"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {loaded && (
        <div
          style={{
            position: "relative",
            background: "#050505",
            minHeight: "100vh",
          }}
        >
          <Navbar />

          <main>
            <Hero />
            <Work />
            <About />
            <TechStack />
            <Process />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
