"use client";

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "30px 20px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--text-muted)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "var(--neon-green)" }}>{">"}</span>
          <span>KESHAV-CMD</span>
          <span style={{ color: "var(--border-accent)" }}>|</span>
          <span>© {year}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="https://github.com/Keshav-cmd"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text-muted)",
              transition: "color var(--transition-fast)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--neon-green)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            GitHub
          </a>
          <a
            href="mailto:keshavjha15000@gmail.com"
            style={{
              color: "var(--text-muted)",
              transition: "color var(--transition-fast)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--neon-green)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Email
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span className="status-dot status-online" />
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
}