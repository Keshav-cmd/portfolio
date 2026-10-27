"use client";

import React, { useState } from "react";

interface SkillCategory {
  name: string;
  color: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    color: "var(--neon-green)",
    icon: "◈",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    name: "Backend",
    color: "var(--neon-violet)",
    icon: "◉",
    skills: ["Python", "Node.js", "Express.js"],
  },
  {
    name: "Database",
    color: "var(--neon-cyan)",
    icon: "◎",
    skills: ["MongoDB"],
  },
  {
    name: "Developer Tools",
    color: "var(--neon-magenta)",
    icon: "◆",
    skills: ["Git", "GitHub", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header">System Monitor</div>
      <h2 className="section-title">
        <span style={{ color: "var(--neon-green)" }}>cat</span> skills.config
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {skillCategories.map((category, index) => (
          <SkillCard key={category.name} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="neon-card"
      style={{
        animation: `fadeInUp 0.5s ease ${index * 0.15}s both`,
        borderColor: hovered ? `${category.color}44` : "var(--border-color)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "16px",
          paddingBottom: "12px",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <span
          style={{
            fontSize: "1.1rem",
            color: category.color,
            filter: hovered ? `drop-shadow(0 0 4px ${category.color})` : "none",
            transition: "filter var(--transition-normal)",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: category.color,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {category.name}
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
          }}
        >
          [{category.skills.length}]
        </span>
      </div>

      {/* Skills list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {category.skills.map((skill) => (
          <div
            key={skill}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              color: "var(--text-secondary)",
              padding: "6px 8px",
              borderRadius: "4px",
              transition: "all var(--transition-fast)",
              background: hovered ? "var(--bg-tertiary)" : "transparent",
            }}
          >
            <span style={{ color: category.color, fontSize: "0.6rem" }}>▸</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}