"use client";

import React, { useState, useEffect, useRef } from "react";

interface BootSequenceProps {
  onComplete: () => void;
  onSkip: () => void;
}

const bootLines = [
  { text: "KESHAV-CMD SYSTEM v2.0.25", delay: 0, color: "var(--neon-green)" },
  { text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", delay: 100, color: "var(--border-accent)" },
  { text: "> Initializing developer profile...", delay: 300, color: "var(--text-secondary)" },
  { text: "  [OK] Profile loaded: Keshav Jha", delay: 700, color: "var(--neon-green)" },
  { text: "> Loading project modules...", delay: 1000, color: "var(--text-secondary)" },
  { text: "  [OK] 7 projects indexed", delay: 1400, color: "var(--neon-green)" },
  { text: "> Establishing interface...", delay: 1700, color: "var(--text-secondary)" },
  { text: "  [OK] Terminal ready", delay: 2000, color: "var(--neon-green)" },
  { text: "  [OK] Dashboard online", delay: 2200, color: "var(--neon-green)" },
  { text: "> Running system diagnostics...", delay: 2500, color: "var(--text-secondary)" },
  { text: "  [OK] All systems nominal", delay: 2800, color: "var(--neon-green)" },
  { text: "", delay: 3000, color: "var(--text-primary)" },
  { text: "Welcome, visitor.", delay: 3200, color: "var(--neon-cyan)" },
];

export default function BootSequence({ onComplete, onSkip }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    bootLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
        setProgress(Math.round(((index + 1) / bootLines.length) * 100));
      }, line.delay);
      timerRef.current.push(timer);
    });

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3800);
    timerRef.current.push(completeTimer);

    return () => {
      timerRef.current.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--bg-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
        }}
      >
        {bootLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            style={{
              color: line.color,
              marginBottom: "4px",
              lineHeight: 1.6,
              opacity: 0,
              animation: "fadeInUp 0.3s ease forwards",
            }}
          >
            {line.text || "\u00A0"}
          </div>
        ))}

        {visibleLines > 0 && (
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "2px",
                background: "var(--border-color)",
                borderRadius: "1px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "var(--neon-green)",
                  borderRadius: "1px",
                  transition: "width 0.3s ease",
                  boxShadow: "0 0 6px var(--neon-green-dim)",
                }}
              />
            </div>
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
                minWidth: "36px",
              }}
            >
              {progress}%
            </span>
          </div>
        )}
      </div>

      <button
        onClick={onSkip}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          background: "none",
          border: "1px solid var(--border-color)",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "all var(--transition-fast)",
          letterSpacing: "0.05em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--neon-green-dim)";
          e.currentTarget.style.color = "var(--text-secondary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-color)";
          e.currentTarget.style.color = "var(--text-muted)";
        }}
        aria-label="Skip boot sequence"
      >
        SKIP [ESC]
      </button>
    </div>
  );
}