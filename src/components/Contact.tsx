"use client";

import React, { useState, useCallback } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "keshavjha15000@gmail.com";
  const github = "https://github.com/Keshav-cmd";

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        alert(`Email: ${email}`);
      }
      document.body.removeChild(textArea);
    }
  }, []);

  return (
    <section id="contact" className="section">
      <div className="section-header">Connection Interface</div>
      <h2 className="section-title">
        <span style={{ color: "var(--neon-green)" }}>root@keshav-cmd:~$</span>{" "}
        ./connect
      </h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {/* Terminal-style contact display */}
        <div className="neon-card" style={{ marginBottom: "24px" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--neon-green)",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>$</span>
            cat contact.txt
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.88rem",
              lineHeight: 2,
              color: "var(--text-secondary)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ color: "var(--neon-cyan)", minWidth: "70px" }}>EMAIL:</span>
              <a
                href={`mailto:${email}`}
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "color var(--transition-fast)",
                  wordBreak: "break-all",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--neon-green)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
              >
                {email}
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ color: "var(--neon-cyan)", minWidth: "70px" }}>GITHUB:</span>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "color var(--transition-fast)",
                  wordBreak: "break-all",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--neon-green)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
              >
                github.com/Keshav-cmd
              </a>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={`mailto:${email}`}
            className="btn-primary"
            style={{
              textDecoration: "none",
              flex: "1 1 auto",
              justifyContent: "center",
              minWidth: "140px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            SEND EMAIL
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              textDecoration: "none",
              flex: "1 1 auto",
              justifyContent: "center",
              minWidth: "140px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            OPEN GITHUB
          </a>

          <button
            onClick={copyEmail}
            className="btn-secondary"
            style={{
              flex: "1 1 auto",
              justifyContent: "center",
              minWidth: "140px",
              borderColor: copied ? "var(--neon-green)" : undefined,
              color: copied ? "var(--neon-green)" : undefined,
            }}
          >
            {copied ? (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                COPIED!
              </>
            ) : (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                COPY EMAIL
              </>
            )}
          </button>
        </div>

        {/* Subtle message */}
        <p
          style={{
            marginTop: "32px",
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}
        >
          Always excited to work on interesting projects.
          <br />
          <span style={{ color: "var(--neon-green-dim)" }}>
            Let&apos;s build something amazing together.
          </span>
        </p>
      </div>
    </section>
  );
}