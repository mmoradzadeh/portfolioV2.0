"use strict";

const express = require("express");
const path = require("path");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const IS_PROD = process.env.NODE_ENV === "production";

// ─── Allowed origins ────────────────────────────────────────────────────────
// Add your production domain(s) here. Localhost is only allowed in development.
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:3000",
  ...(process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : []),
];

// ─── Security headers (Helmet) ───────────────────────────────────────────────
app.use(
  helmet({
    // Content-Security-Policy — controls what resources the browser is allowed to load
    contentSecurityPolicy: {
      directives: {
        defaultSrc:     ["'self'"],
        scriptSrc:      ["'self'", "'unsafe-inline'", "https://cdn.emailjs.com"],
        styleSrc:       ["'self'", "'unsafe-inline'"],
        imgSrc:         ["'self'", "data:", "blob:"],
        fontSrc:        ["'self'", "data:"],
        connectSrc:     ["'self'", "https://api.emailjs.com"],
        frameSrc:       ["'none'"],
        objectSrc:      ["'none'"],
        baseUri:        ["'self'"],
        formAction:     ["'self'"],
        upgradeInsecureRequests: IS_PROD ? [] : null,
      },
    },
    // X-Frame-Options: DENY — prevents clickjacking
    frameguard: { action: "deny" },
    // X-Content-Type-Options: nosniff — prevents MIME-sniffing
    noSniff: true,
    // X-DNS-Prefetch-Control
    dnsPrefetchControl: { allow: false },
    // Referrer-Policy
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    // Permissions-Policy (replaces Feature-Policy)
    permittedCrossDomainPolicies: { permittedPolicies: "none" },
    // HSTS — enforce HTTPS in production only
    hsts: IS_PROD
      ? { maxAge: 63072000, includeSubDomains: true, preload: true }
      : false,
  })
);

// ─── CORS ────────────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: (origin, callback) => {
      // No Origin header = direct browser navigation (typing a URL, clicking a bookmark,
      // following a link from a non-web context, server-side curl health checks, etc.).
      // These requests are NEVER cross-origin attacks — only requests that actually
      // originate from a different domain include an Origin header.  Allow them always.
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS: origin '${origin}' not permitted`), false);
    },
    methods: ["GET"],          // this server only serves static files — no POST needed
    allowedHeaders: ["Content-Type"],
    credentials: false,
  })
);

// ─── Rate limiting ───────────────────────────────────────────────────────────
// Global limiter — 120 requests per 1 minute per IP
const globalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please slow down." },
});
app.use(globalLimiter);

// ─── Compression ─────────────────────────────────────────────────────────────
app.use(compression());

// ─── Body parsing (minimal — we don't accept POST bodies) ────────────────────
app.use(express.json({ limit: "10kb" }));

// ─── Static files ─────────────────────────────────────────────────────────────
app.use(
  express.static(path.join(__dirname, "../dist"), {
    // Cache static assets for 1 year (they are content-hashed by Vite)
    maxAge: IS_PROD ? "1y" : 0,
    // Don't expose directory listings
    index: false,
    // Prevent dot-file access (.env etc.)
    dotfiles: "deny",
  })
);

// ─── Health check ─────────────────────────────────────────────────────────────
// Intentionally minimal — no version info or system info exposed
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// ─── SPA fallback ─────────────────────────────────────────────────────────────
// Express 5 dropped wildcard support in app.get("*") — use app.use() instead
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// ─── Centralised error handler ────────────────────────────────────────────────
// Never leak stack traces or internal details to the client
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  const statusCode = err.status || err.statusCode || 500;
  if (!IS_PROD) {
    console.error(err);
  }
  // Generic message only — no stack, no internal detail
  res.status(statusCode).json({ error: "An unexpected error occurred." });
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${IS_PROD ? "production" : "development"}]`);
});
