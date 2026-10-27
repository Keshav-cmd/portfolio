"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const fullText = "whoami";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTypedText(fullText);
      setShowContent(true);
      return;
    }

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowContent(true), 400);
      }
    }, 120);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 2,
        padding: "80px 20px 40px",
      }}
    >
      <div style={{ maxWidth: "800px", width: "100%" }}>
        {/* Terminal prompt */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            marginBottom: "24px",
            color: "var(--text-secondary)",
          }}
        >
          <span style={{ color: "var(--neon-green)" }}>root@keshav-cmd</span>
          <span style={{ color: "var(--text-muted)" }}>:</span>
          <span style={{ color: "var(--neon-cyan)" }}>~</span>
          <span style={{ color: "var(--text-muted)" }}>$ </span>
          <span style={{ color: "var(--text-primary)" }}>{typedText}</span>
          <span className="cursor-blink" style={{ color: "var(--neon-green)" }}>
            ▊
          </span>
        </div>

        {/* Content reveal */}
        <div
          style={{
            opacity: showContent ? 1 : 0,
            transform: showContent ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--text-bright)",
              lineHeight: 1.1,
              marginBottom: "8px",
            }}
          >
            Keshav Jha
          </h1>

          {/* Alias */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(1rem, 3vw, 1.3rem)",
              color: "var(--neon-green)",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>aka</span>
            <span className="glow-green">KESHAV-CMD</span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "var(--text-secondary)",
              maxWidth: "620px",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            A developer who enjoys turning ideas into interactive digital
            experiences. From physics simulations and browser-based games to
            experimental web applications, I build projects that combine
            engineering curiosity, creativity, and code. Currently exploring
            the possibilities of web development, simulation, and interactive
            software.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">
              <span style={{ color: "inherit" }}>./</span>explore-projects
            </a>
            <a href="#contact" className="btn-secondary">
              cat contact.txt
            </a>
          </div>

          {/* Status bar */}
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="status-dot status-online" />
              Available for projects
            </span>
            <span>7 projects deployed</span>
            <span>Class 12 — PCM</span>
          </div>
        </div>
      </div>
    </section>
  );
}