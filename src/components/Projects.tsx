"use client";

import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  filterCategory: string;
  description: string;
  url: string;
  urlLabel: string;
  isLive: boolean;
  inDevelopment?: boolean;
  accentColor: string;
  secondaryColor: string;
  illustration: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Shadow of the Shougun",
    category: "2D Cinematic Game",
    filterCategory: "Games",
    description:
      "A cinematic 2D ninja infiltration experience built around atmosphere, stealth, and action.",
    url: "https://keshav-cmd.github.io/ShadowOfTheShougun/",
    urlLabel: "PLAY DEMO",
    isLive: true,
    accentColor: "var(--neon-magenta)",
    secondaryColor: "var(--neon-red)",
    illustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <defs>
          <radialGradient id="spot1" cx="50%" cy="60%" r="40%">
            <stop offset="0%" stopColor="#ff408133" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="400" height="200" fill="#0a0505" />
        <ellipse cx="200" cy="160" rx="180" ry="30" fill="#1a0a0a" />
        <circle cx="200" cy="120" r="60" fill="url(#spot1)" />
        {/* Ninja silhouette */}
        <path d="M190 80 L195 70 L205 70 L210 80 L215 100 L220 130 L210 130 L205 110 L200 130 L195 110 L190 130 L180 130 L185 100 Z" fill="#1a0808" stroke="#ff408166" strokeWidth="0.5" />
        {/* Sword */}
        <line x1="215" y1="90" x2="250" y2="75" stroke="#ff408188" strokeWidth="1.5" />
        <line x1="250" y1="75" x2="255" y2="73" stroke="#ff4081cc" strokeWidth="1" />
        {/* Moon */}
        <circle cx="320" cy="40" r="18" fill="#1a0a0a" stroke="#ff408133" strokeWidth="0.5" />
        <circle cx="323" cy="38" r="16" fill="none" stroke="#ff408122" strokeWidth="0.5" />
        {/* Stars */}
        <circle cx="50" cy="30" r="1" fill="#ff408144" />
        <circle cx="100" cy="50" r="0.8" fill="#ff408133" />
        <circle cx="150" cy="20" r="1.2" fill="#ff408155" />
        <circle cx="280" cy="25" r="0.8" fill="#ff408144" />
        <circle cx="350" cy="60" r="1" fill="#ff408133" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "NACA Airfoil Wind Tunnel",
    category: "Aerodynamics Simulation",
    filterCategory: "Simulations",
    description:
      "An interactive wind tunnel simulation exploring airflow around a NACA airfoil, bringing aerodynamic concepts to life in the browser.",
    url: "https://keshav-cmd.github.io/NACA-Airfoil-windtunnel/",
    urlLabel: "LAUNCH SIMULATION",
    isLive: true,
    accentColor: "var(--neon-cyan)",
    secondaryColor: "#0088aa",
    illustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="400" height="200" fill="#050a0f" />
        {/* Grid */}
        {Array.from({ length: 20 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 10} x2="400" y2={i * 10} stroke="#00e5ff08" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 40 }, (_, i) => (
          <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="200" stroke="#00e5ff08" strokeWidth="0.5" />
        ))}
        {/* Airfoil shape */}
        <path d="M80 100 Q120 75 200 85 Q280 90 320 100 Q280 108 200 112 Q120 118 80 100 Z" fill="#0a1520" stroke="#00e5ff66" strokeWidth="1" />
        {/* Flow lines */}
        {[60, 75, 90, 110, 125, 140].map((y, i) => (
          <path key={i} d={`M20 ${y} Q100 ${y - (y < 100 ? 8 : -8)} 200 ${y - (y < 100 ? 5 : -5)} Q300 ${y - (y < 100 ? 3 : -3)} 380 ${y}`} stroke="#00e5ff22" strokeWidth="0.8" fill="none" />
        ))}
        {/* Pressure visualization */}
        <circle cx="140" cy="88" r="3" fill="#00e5ff33" />
        <circle cx="160" cy="86" r="2.5" fill="#00e5ff22" />
        <circle cx="180" cy="87" r="2" fill="#00e5ff1a" />
        {/* Labels */}
        <text x="20" y="190" fill="#00e5ff44" fontSize="8" fontFamily="monospace">NACA 4-DIGIT SERIES</text>
        <text x="300" y="190" fill="#00e5ff44" fontSize="8" fontFamily="monospace">Re: ~10⁶</text>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Trajectory Lab",
    category: "Physics Simulation",
    filterCategory: "Simulations",
    description:
      "An interactive projectile-motion simulation designed to make trajectories and classical mechanics easier to explore visually.",
    url: "https://keshav-cmd.github.io/TrajectoryLab/",
    urlLabel: "RUN EXPERIMENT",
    isLive: true,
    accentColor: "var(--neon-cyan)",
    secondaryColor: "var(--neon-violet)",
    illustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="400" height="200" fill="#050508" />
        {/* Coordinate grid */}
        <line x1="50" y1="170" x2="370" y2="170" stroke="#b388ff22" strokeWidth="1" />
        <line x1="50" y1="170" x2="50" y2="20" stroke="#b388ff22" strokeWidth="1" />
        {/* Grid ticks */}
        {[110, 170, 230, 290, 350].map((x) => (
          <line key={x} x1={x} y1="168" x2={x} y2="172" stroke="#b388ff22" strokeWidth="0.5" />
        ))}
        {[140, 110, 80, 50].map((y) => (
          <line key={y} x1="48" y1={y} x2="52" y2={y} stroke="#b388ff22" strokeWidth="0.5" />
        ))}
        {/* Trajectory arc */}
        <path d="M60 165 Q120 40 200 60 Q280 80 350 165" stroke="#00e5ff" strokeWidth="2" fill="none" strokeDasharray="4 2" opacity="0.6" />
        <path d="M60 165 Q150 20 340 165" stroke="#b388ff" strokeWidth="1.5" fill="none" opacity="0.8" />
        {/* Points on trajectory */}
        <circle cx="60" cy="165" r="4" fill="#b388ff" />
        <circle cx="130" cy="80" r="3" fill="#b388ff88" />
        <circle cx="200" cy="40" r="3" fill="#b388ffaa" />
        <circle cx="270" cy="80" r="3" fill="#b388ff88" />
        <circle cx="340" cy="165" r="4" fill="#b388ff" />
        {/* Velocity vectors */}
        <line x1="60" y1="165" x2="85" y2="140" stroke="#00e5ff88" strokeWidth="1" markerEnd="url(#arrow)" />
        <line x1="200" y1="40" x2="230" y2="40" stroke="#00e5ff88" strokeWidth="1" />
        {/* Labels */}
        <text x="55" y="185" fill="#b388ff44" fontSize="7" fontFamily="monospace">v₀</text>
        <text x="195" y="30" fill="#b388ff44" fontSize="7" fontFamily="monospace">h_max</text>
        <text x="335" y="185" fill="#b388ff44" fontSize="7" fontFamily="monospace">R</text>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Skybound Adventure",
    category: "2D Browser Game",
    filterCategory: "Games",
    description:
      "A Mario-inspired 2D browser adventure featuring platforming gameplay and a colorful game-world experience.",
    url: "https://keshav-cmd.github.io/SKYBOUND-ADVENTURER/",
    urlLabel: "START ADVENTURE",
    isLive: true,
    accentColor: "var(--neon-green)",
    secondaryColor: "#44ff88",
    illustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="400" height="200" fill="#050a08" />
        {/* Sky gradient hint */}
        <rect width="400" height="120" fill="#0a1a0f" />
        {/* Clouds */}
        <ellipse cx="80" cy="40" rx="30" ry="12" fill="#00ff8810" />
        <ellipse cx="280" cy="30" rx="40" ry="14" fill="#00ff8808" />
        {/* Ground */}
        <rect x="0" y="160" width="400" height="40" fill="#0a1a0a" />
        <line x1="0" y1="160" x2="400" y2="160" stroke="#00ff8833" strokeWidth="1" />
        {/* Platforms */}
        <rect x="60" y="130" width="60" height="8" rx="2" fill="#0f2a0f" stroke="#00ff8844" strokeWidth="0.5" />
        <rect x="170" y="105" width="70" height="8" rx="2" fill="#0f2a0f" stroke="#00ff8844" strokeWidth="0.5" />
        <rect x="290" y="120" width="55" height="8" rx="2" fill="#0f2a0f" stroke="#00ff8844" strokeWidth="0.5" />
        {/* Player character (pixel-art-inspired) */}
        <rect x="185" y="89" width="12" height="16" fill="#00ff8866" rx="1" />
        <rect x="187" y="86" width="8" height="6" fill="#00ff8888" rx="1" />
        {/* Coins */}
        <circle cx="100" cy="118" r="4" fill="#ffd60033" stroke="#ffd60066" strokeWidth="0.5" />
        <circle cx="200" cy="93" r="4" fill="#ffd60033" stroke="#ffd60066" strokeWidth="0.5" />
        <circle cx="310" cy="108" r="4" fill="#ffd60033" stroke="#ffd60066" strokeWidth="0.5" />
        {/* HUD */}
        <text x="15" y="18" fill="#00ff8855" fontSize="8" fontFamily="monospace">SCORE: 2450</text>
        <text x="320" y="18" fill="#00ff8855" fontSize="8" fontFamily="monospace">♥ ♥ ♥</text>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Flappy Clone Deluxe",
    category: "Arcade Game",
    filterCategory: "Games",
    description:
      "A Flappy Bird-inspired browser game focused on simple controls, obstacle avoidance, and arcade-style gameplay.",
    url: "https://keshav-cmd.github.io/flappy-Clone-deluxe/",
    urlLabel: "PLAY GAME",
    isLive: true,
    accentColor: "var(--neon-green)",
    secondaryColor: "var(--neon-yellow)",
    illustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="400" height="200" fill="#050808" />
        {/* Pipes */}
        <rect x="100" y="0" width="30" height="60" fill="#0a200a" stroke="#00ff8833" strokeWidth="0.5" />
        <rect x="95" y="55" width="40" height="10" rx="2" fill="#0a200a" stroke="#00ff8844" strokeWidth="0.5" />
        <rect x="100" y="130" width="30" height="70" fill="#0a200a" stroke="#00ff8833" strokeWidth="0.5" />
        <rect x="95" y="125" width="40" height="10" rx="2" fill="#0a200a" stroke="#00ff8844" strokeWidth="0.5" />
        <rect x="220" y="0" width="30" height="90" fill="#0a200a" stroke="#00ff8833" strokeWidth="0.5" />
        <rect x="215" y="85" width="40" height="10" rx="2" fill="#0a200a" stroke="#00ff8844" strokeWidth="0.5" />
        <rect x="220" y="150" width="30" height="50" fill="#0a200a" stroke="#00ff8833" strokeWidth="0.5" />
        <rect x="215" y="145" width="40" height="10" rx="2" fill="#0a200a" stroke="#00ff8844" strokeWidth="0.5" />
        <rect x="340" y="0" width="30" height="45" fill="#0a200a" stroke="#00ff8833" strokeWidth="0.5" />
        <rect x="335" y="40" width="40" height="10" rx="2" fill="#0a200a" stroke="#00ff8844" strokeWidth="0.5" />
        <rect x="340" y="120" width="30" height="80" fill="#0a200a" stroke="#00ff8833" strokeWidth="0.5" />
        <rect x="335" y="115" width="40" height="10" rx="2" fill="#0a200a" stroke="#00ff8844" strokeWidth="0.5" />
        {/* Bird */}
        <circle cx="60" cy="95" r="10" fill="#ffd60044" stroke="#ffd60088" strokeWidth="1" />
        <circle cx="64" cy="92" r="2" fill="#ffd600aa" />
        {/* Score */}
        <text x="180" y="25" fill="#ffd60066" fontSize="16" fontFamily="monospace" textAnchor="middle">42</text>
        {/* Ground */}
        <rect x="0" y="185" width="400" height="15" fill="#0a1a0a" />
        <line x1="0" y1="185" x2="400" y2="185" stroke="#00ff8822" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Focus Forge",
    category: "Productivity Tool",
    filterCategory: "Tools",
    description:
      "A focus timer designed to help turn restlessness into structured work sessions and intentional breaks.",
    url: "https://keshav-cmd.github.io/FocusForge/",
    urlLabel: "OPEN FOCUS FORGE",
    isLive: true,
    accentColor: "var(--neon-green)",
    secondaryColor: "#44cc88",
    illustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="400" height="200" fill="#050a05" />
        {/* Timer circle */}
        <circle cx="200" cy="100" r="60" fill="none" stroke="#00ff8811" strokeWidth="1" />
        <circle cx="200" cy="100" r="55" fill="none" stroke="#00ff8822" strokeWidth="3" strokeDasharray="260 90" strokeLinecap="round" />
        <circle cx="200" cy="100" r="55" fill="none" stroke="#00ff8866" strokeWidth="3" strokeDasharray="200 150" strokeLinecap="round" />
        {/* Timer text */}
        <text x="200" y="96" fill="#00ff88cc" fontSize="22" fontFamily="monospace" textAnchor="middle">25:00</text>
        <text x="200" y="115" fill="#00ff8844" fontSize="8" fontFamily="monospace" textAnchor="middle">FOCUS SESSION</text>
        {/* Progress dots */}
        <circle cx="170" cy="170" r="4" fill="#00ff8866" />
        <circle cx="185" cy="170" r="4" fill="#00ff8866" />
        <circle cx="200" cy="170" r="4" fill="#00ff8833" />
        <circle cx="215" cy="170" r="4" fill="#00ff8822" />
        <circle cx="230" cy="170" r="4" fill="#00ff8822" />
        {/* Glow */}
        <circle cx="200" cy="100" r="70" fill="none" stroke="#00ff8808" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Knowledgify",
    category: "Knowledge-Sharing Platform",
    filterCategory: "Tools",
    description:
      "An experimental knowledge-sharing platform inspired by social media, bringing together scientific simulations, research papers, and educational discoveries in one place.",
    url: "https://github.com/Keshav-cmd/knowledgify",
    urlLabel: "VIEW SOURCE CODE",
    isLive: false,
    inDevelopment: true,
    accentColor: "var(--neon-yellow)",
    secondaryColor: "var(--neon-orange)",
    illustration: (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="400" height="200" fill="#0a0a05" />
        {/* Knowledge graph nodes */}
        <circle cx="200" cy="100" r="25" fill="#ffd60011" stroke="#ffd60044" strokeWidth="1" />
        <circle cx="120" cy="60" r="15" fill="#ffd60008" stroke="#ffd60033" strokeWidth="0.5" />
        <circle cx="280" cy="55" r="18" fill="#ffd60008" stroke="#ffd60033" strokeWidth="0.5" />
        <circle cx="100" cy="140" r="12" fill="#ffd60008" stroke="#ffd60033" strokeWidth="0.5" />
        <circle cx="300" cy="145" r="14" fill="#ffd60008" stroke="#ffd60033" strokeWidth="0.5" />
        <circle cx="170" cy="160" r="10" fill="#ffd60008" stroke="#ffd60022" strokeWidth="0.5" />
        <circle cx="260" cy="160" r="10" fill="#ffd60008" stroke="#ffd60022" strokeWidth="0.5" />
        {/* Connection lines */}
        <line x1="200" y1="100" x2="120" y2="60" stroke="#ffd60022" strokeWidth="0.5" />
        <line x1="200" y1="100" x2="280" y2="55" stroke="#ffd60022" strokeWidth="0.5" />
        <line x1="200" y1="100" x2="100" y2="140" stroke="#ffd60022" strokeWidth="0.5" />
        <line x1="200" y1="100" x2="300" y2="145" stroke="#ffd60022" strokeWidth="0.5" />
        <line x1="200" y1="100" x2="170" y2="160" stroke="#ffd60015" strokeWidth="0.5" />
        <line x1="200" y1="100" x2="260" y2="160" stroke="#ffd60015" strokeWidth="0.5" />
        {/* Center label */}
        <text x="200" y="103" fill="#ffd60066" fontSize="8" fontFamily="monospace" textAnchor="middle">K</text>
        {/* Status */}
        <text x="200" y="190" fill="#ffd60044" fontSize="7" fontFamily="monospace" textAnchor="middle">IN DEVELOPMENT</text>
      </svg>
    ),
  },
];

const categories = ["All", "Games", "Simulations", "Tools"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="section">
      <div className="section-header">Project Showcase</div>
      <h2 className="section-title">
        <span style={{ color: "var(--neon-green)" }}>./</span>projects
        <span style={{ color: "var(--text-muted)", fontSize: "0.6em", marginLeft: "12px" }}>
          [{filteredProjects.length}]
        </span>
      </h2>

      {/* Filter tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveFilter(cat);
              setShowAll(false);
            }}
            style={{
              padding: "6px 16px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              border: `1px solid ${activeFilter === cat ? "var(--neon-green)" : "var(--border-color)"}`,
              borderRadius: "4px",
              background: activeFilter === cat ? "var(--neon-green-glow)" : "transparent",
              color: activeFilter === cat ? "var(--neon-green)" : "var(--text-muted)",
              transition: "all var(--transition-fast)",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px",
        }}
      >
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Show all button */}
      {!showAll && filteredProjects.length > 6 && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => setShowAll(true)}
            className="btn-secondary"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            View All Projects [{filteredProjects.length}]
          </button>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? project.accentColor + "66" : "var(--border-color)"}`,
        borderRadius: "8px",
        overflow: "hidden",
        transition: "all var(--transition-normal)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 8px 32px ${project.accentColor}15` : "none",
        position: "relative",
        animation: `fadeInUp 0.5s ease ${index * 0.1}s both`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div
        style={{
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${project.accentColor}88, transparent)`,
          opacity: hovered ? 1 : 0.3,
          transition: "opacity var(--transition-normal)",
        }}
      />

      {/* Illustration */}
      <div
        style={{
          width: "100%",
          height: "160px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {project.illustration}

        {/* Overlay gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40px",
            background: "linear-gradient(transparent, var(--bg-card))",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "20px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                marginBottom: "4px",
                display: "block",
              }}
            >
              {String(project.id).padStart(2, "0")}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--text-bright)",
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>
          </div>
          {project.inDevelopment ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "3px 8px",
                fontSize: "0.65rem",
                fontFamily: "var(--font-mono)",
                color: "var(--neon-yellow)",
                border: "1px solid var(--neon-yellow)",
                borderRadius: "3px",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}
            >
              <span className="status-dot status-dev" />
              IN DEV
            </span>
          ) : (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "3px 8px",
                fontSize: "0.65rem",
                fontFamily: "var(--font-mono)",
                color: "var(--neon-green)",
                border: "1px solid var(--neon-green-dim)",
                borderRadius: "3px",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}
            >
              <span className="status-dot status-online" />
              LIVE
            </span>
          )}
        </div>

        {/* Category */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: project.accentColor,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "12px",
          }}
        >
          {project.category}
        </span>

        {/* Description */}
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "20px",
          }}
        >
          {project.description}
        </p>

        {/* Action button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            border: `1px solid ${project.accentColor}88`,
            borderRadius: "4px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            fontWeight: 500,
            color: project.accentColor,
            letterSpacing: "0.05em",
            transition: "all var(--transition-normal)",
            background: hovered ? `${project.accentColor}11` : "transparent",
            textDecoration: "none",
          }}
        >
          {project.urlLabel}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
}