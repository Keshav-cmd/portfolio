"use client";

import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import BootSequence from "@/components/BootSequence";
import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [bootSkipped, setBootSkipped] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("keshav-cmd-booted");
    if (hasVisited) {
      setBooted(true);
      setBootSkipped(true);
    }
  }, []);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
    sessionStorage.setItem("keshav-cmd-booted", "true");
  }, []);

  const handleSkipBoot = useCallback(() => {
    setBooted(true);
    setBootSkipped(true);
    sessionStorage.setItem("keshav-cmd-booted", "true");
  }, []);

  if (!booted) {
    return (
      <BootSequence
        onComplete={handleBootComplete}
        onSkip={handleSkipBoot}
      />
    );
  }

  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <ParticleField />
      <Header />
      <main>
        <Hero />
        <Terminal />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}