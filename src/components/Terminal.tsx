"use client";

import React, { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";

interface TerminalLine {
  type: "input" | "output" | "error" | "system" | "ascii";
  text: string;
  color?: string;
}

const COMMANDS: Record<string, string> = {
  help: "help",
  about: "about",
  whoami: "whoami",
  skills: "skills",
  projects: "projects",
  education: "education",
  contact: "contact",
  resume: "resume",
  clear: "clear",
  neofetch: "neofetch",
  "sudo hire-me": "sudo hire-me",
};

const AVAILABLE_COMMANDS = Object.keys(COMMANDS);

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "system",
      text: "KESHAV-CMD Terminal v2.0 — Type 'help' for available commands.",
      color: "var(--text-muted)",
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const addLines = useCallback((newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const processCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();

      addLines([{ type: "input", text: `$ ${cmd}` }]);

      if (!trimmed) return;

      setHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);

      switch (trimmed) {
        case "help":
          addLines([
            { type: "output", text: "" },
            { type: "system", text: "┌─ Available Commands ─────────────────────┐", color: "var(--neon-green)" },
            { type: "output", text: "│  help        — Show this help message    │" },
            { type: "output", text: "│  about       — About Keshav Jha          │" },
            { type: "output", text: "│  whoami      — Developer identity         │" },
            { type: "output", text: "│  skills      — Technical skills           │" },
            { type: "output", text: "│  projects    — List all projects          │" },
            { type: "output", text: "│  education   — Education details          │" },
            { type: "output", text: "│  contact     — Contact information        │" },
            { type: "output", text: "│  resume      — Resume information         │" },
            { type: "output", text: "│  neofetch    — System info display        │" },
            { type: "output", text: "│  sudo hire-me — 😎                        │" },
            { type: "output", text: "│  clear       — Clear terminal             │" },
            { type: "system", text: "└──────────────────────────────────────────┘", color: "var(--neon-green)" },
            { type: "output", text: "" },
          ]);
          break;

        case "about":
          addLines([
            { type: "output", text: "" },
            { type: "system", text: "~/profile/about.md", color: "var(--neon-cyan)" },
            { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
            { type: "output", text: "" },
            { type: "output", text: "I'm Keshav Jha, aka KESHAV-CMD — a developer who" },
            { type: "output", text: "enjoys turning ideas into interactive digital" },
            { type: "output", text: "experiences. From physics simulations and browser-" },
            { type: "output", text: "based games to experimental web applications, I" },
            { type: "output", text: "build projects that combine engineering curiosity," },
            { type: "output", text: "creativity, and code." },
            { type: "output", text: "" },
            { type: "output", text: "Currently exploring the possibilities of web" },
            { type: "output", text: "development, simulation, and interactive software." },
            { type: "output", text: "" },
          ]);
          break;

        case "whoami":
          addLines([
            { type: "output", text: "" },
            { type: "system", text: "Developer Identity", color: "var(--neon-green)" },
            { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
            { type: "output", text: "  Name:     Keshav Jha" },
            { type: "output", text: "  Alias:    KESHAV-CMD" },
            { type: "output", text: "  Role:     Developer" },
            { type: "output", text: "  Focus:    Web, Games, Simulations" },
            { type: "output", text: "  Status:   Building cool stuff" },
            { type: "output", text: "" },
          ]);
          break;

        case "skills":
          addLines([
            { type: "output", text: "" },
            { type: "system", text: "Technical Skills", color: "var(--neon-cyan)" },
            { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
            { type: "output", text: "" },
            { type: "system", text: "  [Frontend]", color: "var(--neon-green)" },
            { type: "output", text: "    HTML • CSS • JavaScript • React.js" },
            { type: "output", text: "" },
            { type: "system", text: "  [Backend]", color: "var(--neon-violet)" },
            { type: "output", text: "    Python • Node.js • Express.js" },
            { type: "output", text: "" },
            { type: "system", text: "  [Database]", color: "var(--neon-cyan)" },
            { type: "output", text: "    MongoDB" },
            { type: "output", text: "" },
            { type: "system", text: "  [Tools]", color: "var(--neon-magenta)" },
            { type: "output", text: "    Git • GitHub • Linux" },
            { type: "output", text: "" },
          ]);
          break;

        case "projects":
          addLines([
            { type: "output", text: "" },
            { type: "system", text: "Project Index — 7 projects", color: "var(--neon-green)" },
            { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
            { type: "output", text: "" },
            { type: "system", text: "  01. Shadow of the Shougun", color: "var(--neon-magenta)" },
            { type: "output", text: "      2D Cinematic Game — [LIVE]" },
            { type: "output", text: "" },
            { type: "system", text: "  02. NACA Airfoil Wind Tunnel", color: "var(--neon-cyan)" },
            { type: "output", text: "      Aerodynamics Simulation — [LIVE]" },
            { type: "output", text: "" },
            { type: "system", text: "  03. Trajectory Lab", color: "var(--neon-cyan)" },
            { type: "output", text: "      Physics Simulation — [LIVE]" },
            { type: "output", text: "" },
            { type: "system", text: "  04. Skybound Adventure", color: "var(--neon-green)" },
            { type: "output", text: "      2D Browser Game — [LIVE]" },
            { type: "output", text: "" },
            { type: "system", text: "  05. Flappy Clone Deluxe", color: "var(--neon-green)" },
            { type: "output", text: "      Arcade Game — [LIVE]" },
            { type: "output", text: "" },
            { type: "system", text: "  06. Focus Forge", color: "var(--neon-green)" },
            { type: "output", text: "      Productivity Tool — [LIVE]" },
            { type: "output", text: "" },
            { type: "system", text: "  07. Knowledgify", color: "var(--neon-yellow)" },
            { type: "output", text: "      Knowledge Platform — [IN DEVELOPMENT]" },
            { type: "output", text: "" },
            { type: "output", text: "  → Scroll down or visit #projects for details" },
            { type: "output", text: "" },
          ]);
          break;

        case "education":
          addLines([
            { type: "output", text: "" },
            { type: "system", text: "Education", color: "var(--neon-cyan)" },
            { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
            { type: "output", text: "  Class 12 — PCM" },
            { type: "output", text: "  (Physics, Chemistry, Mathematics)" },
            { type: "output", text: "" },
          ]);
          break;

        case "contact":
          addLines([
            { type: "output", text: "" },
            { type: "system", text: "Contact Information", color: "var(--neon-green)" },
            { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
            { type: "output", text: "  Email:  keshavjha15000@gmail.com" },
            { type: "output", text: "  GitHub: https://github.com/Keshav-cmd" },
            { type: "output", text: "" },
            { type: "output", text: "  → Visit #contact section for quick actions" },
            { type: "output", text: "" },
          ]);
          break;

        case "resume":
          addLines([
            { type: "output", text: "" },
            { type: "system", text: "Resume", color: "var(--neon-cyan)" },
            { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
            { type: "output", text: "  Resume available on request." },
            { type: "output", text: "  Contact: keshavjha15000@gmail.com" },
            { type: "output", text: "" },
          ]);
          break;

        case "clear":
          setLines([]);
          return;

        case "neofetch":
          addLines([
            { type: "output", text: "" },
            { type: "ascii", text: "  ██╗  ██╗ ██████╗███╗   ███╗██████╗ ", color: "var(--neon-green)" },
            { type: "ascii", text: "  ██║ ██╔╝██╔════╝████╗ ████║██╔══██╗", color: "var(--neon-green)" },
            { type: "ascii", text: "  █████╔╝ ██║     ██╔████╔██║██║  ██║", color: "var(--neon-green)" },
            { type: "ascii", text: "  ██╔═██╗ ██║     ██║╚██╔╝██║██║  ██║", color: "var(--neon-cyan)" },
            { type: "ascii", text: "  ██║  ██╗╚██████╗██║ ╚═╝ ██║██████╔╝", color: "var(--neon-cyan)" },
            { type: "ascii", text: "  ╚═╝  ╚═╝ ╚═════╝╚═╝     ╚═╝╚═════╝ ", color: "var(--neon-cyan)" },
            { type: "output", text: "" },
            { type: "output", text: "  keshav@cmd" },
            { type: "output", text: "  ─────────────────────────" },
            { type: "output", text: "  OS:       KESHAV-CMD Terminal v2.0" },
            { type: "output", text: "  Host:     The Internet" },
            { type: "output", text: "  Kernel:   Curiosity-Driven" },
            { type: "output", text: "  Shell:    React + TypeScript" },
            { type: "output", text: "  Terminal: Portfolio v2.0" },
            { type: "output", text: "  Projects: 7 (6 live, 1 in dev)" },
            { type: "output", text: "  Languages: JS, Python, HTML, CSS" },
            { type: "output", text: "  Uptime:   Always building" },
            { type: "output", text: "" },
          ]);
          break;

        case "sudo hire-me":
          addLines([
            { type: "output", text: "" },
            { type: "system", text: "  🚀 ACCESS GRANTED", color: "var(--neon-green)" },
            { type: "output", text: "" },
            { type: "output", text: "  Thanks for your interest!" },
            { type: "output", text: "  I'm always excited to work on" },
            { type: "output", text: "  interesting projects." },
            { type: "output", text: "" },
            { type: "output", text: "  Let's connect:" },
            { type: "output", text: "  📧 keshavjha15000@gmail.com" },
            { type: "output", text: "  🐙 github.com/Keshav-cmd" },
            { type: "output", text: "" },
            { type: "system", text: "  Ready to build something amazing together.", color: "var(--neon-cyan)" },
            { type: "output", text: "" },
          ]);
          break;

        default:
          addLines([
            {
              type: "error",
              text: `  command not found: ${trimmed}`,
              color: "var(--neon-red)",
            },
            {
              type: "output",
              text: "  Type 'help' for available commands.",
            },
            { type: "output", text: "" },
          ]);
      }
    },
    [addLines]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        processCommand(input);
        setInput("");
        setSuggestions([]);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (history.length > 0) {
          const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex !== -1) {
          const newIndex = historyIndex + 1;
          if (newIndex >= history.length) {
            setHistoryIndex(-1);
            setInput("");
          } else {
            setHistoryIndex(newIndex);
            setInput(history[newIndex]);
          }
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const match = AVAILABLE_COMMANDS.filter((c) =>
          c.startsWith(input.toLowerCase())
        );
        if (match.length === 1) {
          setInput(match[0]);
          setSuggestions([]);
        } else if (match.length > 1) {
          setSuggestions(match);
        }
      }
    },
    [input, history, historyIndex, processCommand]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInput(val);
      if (val.length > 0) {
        const match = AVAILABLE_COMMANDS.filter((c) =>
          c.startsWith(val.toLowerCase())
        );
        setSuggestions(match.length > 0 && match.length <= 5 ? match : []);
      } else {
        setSuggestions([]);
      }
    },
    []
  );

  return (
    <section
      id="terminal"
      style={{
        padding: "0 20px 80px",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="section-header">Interactive Terminal</div>

      <div
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* Terminal title bar */}
        <div
          style={{
            padding: "10px 16px",
            borderBottom: "1px solid var(--border-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "var(--bg-tertiary)",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#ff5f57",
              }}
            />
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#febc2e",
              }}
            />
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#28c840",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
            }}
          >
            keshav-cmd — bash
          </span>
          <div style={{ width: "52px" }} />
        </div>

        {/* Terminal output */}
        <div
          ref={outputRef}
          style={{
            padding: "16px",
            maxHeight: "400px",
            overflowY: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: "0.82rem",
            lineHeight: 1.6,
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                color:
                  line.color ||
                  (line.type === "input"
                    ? "var(--neon-green)"
                    : line.type === "error"
                    ? "var(--neon-red)"
                    : line.type === "system"
                    ? "var(--neon-cyan)"
                    : line.type === "ascii"
                    ? line.color || "var(--neon-green)"
                    : "var(--text-secondary)"),
                whiteSpace: "pre",
                minHeight: line.text === "" ? "1em" : undefined,
              }}
            >
              {line.text}
            </div>
          ))}

          {/* Suggestions */}
          {suggestions.length > 1 && (
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
                marginTop: "4px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {suggestions.map((s) => (
                <span key={s} style={{ color: "var(--neon-green-dim)" }}>
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* Input line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "4px",
            }}
          >
            <span style={{ color: "var(--neon-green)", marginRight: "8px" }}>
              <span>root@keshav-cmd</span>
              <span style={{ color: "var(--text-muted)" }}>:</span>
              <span style={{ color: "var(--neon-cyan)" }}>~</span>
              <span style={{ color: "var(--text-muted)" }}>$ </span>
            </span>
            <div style={{ position: "relative", flex: 1 }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  caretColor: "var(--neon-green)",
                }}
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}