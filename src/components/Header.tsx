"use client";

import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        fontFamily: "var(--font-mono)",
        borderBottom: `1px solid ${scrolled ? "var(--border-color)" : "transparent"}`,
        background: scrolled ? "var(--bg-glass)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all var(--transition-normal)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Identity */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="#home"
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--neon-green)",
              letterSpacing: "0.05em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>{">"}</span>
            KESHAV-CMD
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
            }}
            className="hide-mobile"
          >
            <span className="status-dot status-online" />
            SYSTEM: ONLINE
          </div>
        </div>

        {/* Center: Nav (desktop) */}
        <nav
          style={{ display: "flex", gap: "24px", alignItems: "center" }}
          className="hide-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.78rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color var(--transition-fast)",
                padding: "4px 0",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--neon-green)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "0.75rem",
          }}
        >
          <span
            style={{ color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}
            className="hide-mobile"
          >
            {time}
          </span>
          <span style={{ color: "var(--text-muted)" }} className="hide-mobile">
            USER: visitor
          </span>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="show-mobile"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "4px",
              padding: "4px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              style={{
                width: "20px",
                height: "2px",
                background: "var(--neon-green)",
                transition: "all var(--transition-fast)",
                transform: mobileMenuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              style={{
                width: "20px",
                height: "2px",
                background: "var(--neon-green)",
                transition: "all var(--transition-fast)",
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: "20px",
                height: "2px",
                background: "var(--neon-green)",
                transition: "all var(--transition-fast)",
                transform: mobileMenuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "49px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--bg-primary)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.1rem",
                color: "var(--text-primary)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span style={{ color: "var(--neon-green)", marginRight: "8px" }}>
                {">"}
              </span>
              {link.label}
            </a>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              marginTop: "16px",
            }}
          >
            <span className="status-dot status-online" />
            SYSTEM: ONLINE — {time}
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important;
          }
          .show-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .show-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}