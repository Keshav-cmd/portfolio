"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">Configuration File</div>
      <h2 className="section-title">
        <span style={{ color: "var(--neon-green)" }}>~/</span>profile/about.md
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {/* About card */}
        <div className="neon-card">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--neon-cyan)",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>#</span>
            DEVELOPER PROFILE
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              <span style={{ color: "var(--neon-green)" }}>name:</span>{" "}
              <span style={{ color: "var(--text-primary)" }}>Keshav Jha</span>
            </p>
            <p style={{ marginBottom: "16px" }}>
              <span style={{ color: "var(--neon-green)" }}>alias:</span>{" "}
              <span style={{ color: "var(--text-primary)" }}>KESHAV-CMD</span>
            </p>
            <p style={{ marginBottom: "16px" }}>
              <span style={{ color: "var(--neon-green)" }}>focus:</span>{" "}
              <span style={{ color: "var(--text-primary)" }}>
                Web Development, Simulations, Games
              </span>
            </p>
            <p style={{ marginBottom: "16px" }}>
              <span style={{ color: "var(--neon-green)" }}>status:</span>{" "}
              <span style={{ color: "var(--text-primary)" }}>
                Building and exploring
              </span>
            </p>
            <div
              style={{
                marginTop: "20px",
                paddingTop: "16px",
                borderTop: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                fontFamily: "var(--font-sans)",
                fontSize: "0.92rem",
              }}
            >
              <p>
                I'm a curious developer who enjoys building interactive browser
                experiences — from scientific simulations that visualize physics
                concepts, to cinematic games with atmosphere and depth, to useful
                tools that solve real problems.
              </p>
              <p style={{ marginTop: "12px" }}>
                Every project is a chance to explore something new, experiment
                with ideas, and push my understanding of what's possible with
                code and the browser as a platform.
              </p>
            </div>
          </div>
        </div>

        {/* Education card */}
        <div className="neon-card">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--neon-violet)",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>#</span>
            EDUCATION
          </div>

          <div
            style={{
              padding: "20px",
              border: "1px solid var(--border-color)",
              borderRadius: "6px",
              background: "var(--bg-tertiary)",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                color: "var(--text-bright)",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Class 12 — PCM
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              Physics, Chemistry, Mathematics
            </div>
          </div>

          {/* Interests */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--neon-cyan)",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>#</span>
            INTERESTS
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              "Physics Simulations",
              "Game Development",
              "Interactive Web",
              "Scientific Visualization",
              "Open Source",
              "Linux",
            ].map((interest) => (
              <span
                key={interest}
                style={{
                  padding: "4px 12px",
                  border: "1px solid var(--border-color)",
                  borderRadius: "3px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)",
                  background: "var(--bg-secondary)",
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}