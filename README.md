# Cinematic Hacking-Style Demo (React + Vite + Tailwind)

WARNING / IMPORTANT NOTICE
- This project is a fictional, frontend-only simulation created for educational/movie/demo purposes.
- DEVELOPER NOTE: DO NOT use this to collect credentials, track real IPs, or for any real reconnaissance. See Safety & Constraints below.

What this demo includes
- React + Vite frontend only (no backend)
- Tailwind CSS for neon/terminal styling
- Permanent red disclaimer banner at top of every page: "DEMO ONLY — This site is a local, fictional simulation. No data is collected or transmitted."
- Consent modal required on first visit
- Login page (client-side check against a single demo pair only)
  - Demo credentials: username: `muhammad_saqib_demo`, password: `demo242242`
  - Inputs are checked client-side only and NOT logged, stored, or sent anywhere.
- Dashboard with tiles and tools:
  - Trace Finder (SIM)
  - IP Visualizer (SIM)
  - Packet Console (SIM)
  - Exploit Archive (UI-only)
  - Network Map (SIM)
- Interactive fake terminal with typed/streaming output and animation speed control
- Animated particle background and packet waterfall (two bonus UI features)
- Downloadable "movie frame" PNG snapshot of the terminal (client-side only)
- Accessibility considerations: keyboard navigable inputs, labeled controls, sufficient contrast

Safety & Constraints (must-read)
- SIMULATION ONLY - NO REAL TRACKING: All simulation functions are explicitly labeled in the source with comments.
- No network calls to real IP/geo APIs or analytics — the app does not call any external IP or geolocation service.
- No credentials are sent or stored; the login check is a simple client-side comparison to constants and inputs are immediately discarded.
- No third-party tracking libraries are used.
- The consent modal makes users acknowledge the fictional/local nature of the demo before viewing tools.
- Do not use this project to deceive or phish — it is for education and visual demos only.

Developer notes
- Fake data lives in `/src/data/` and uses deterministic seeded RNG utilities so simulations are repeatable.
- If you'd like to replace fake data or expand the simulation, search for `// SIMULATION ONLY` comments.

Quick start (local)
1. Ensure Node 18+ and npm/yarn/pnpm installed.
2. Create a Vite React project and copy these files into the `src/` tree and root as appropriate.
3. Install dev dependencies:
   - react, react-dom (Vite template)
   - tailwindcss/postcss/autoprefixer (setup Tailwind)
4. Build and run with `npm run dev` (or your Vite script).

File structure (selected files provided in this repo snippet)
- index.html
- package.json
- tailwind.config.cjs
- postcss.config.cjs
- src/
  - main.jsx
  - index.css
  - App.jsx
  - data/
    - fake-hops.js
    - fake-ips.js
  - utils/
    - seededRandom.js
    - ipGenerator.js
  - components/ (20+ files)
    - HeaderDisclaimer.jsx
    - ConsentModal.jsx
    - Login.jsx
    - Dashboard.jsx
    - Sidebar.jsx
    - Tile.jsx
    - Terminal.jsx
    - TraceFinder.jsx
    - IPVisualizer.jsx
    - PacketConsole.jsx
    - ExploitArchive.jsx
    - NetworkMap.jsx
    - Settings.jsx
    - ParticleBackground.jsx
    - PacketWaterfall.jsx
    - SnapshotButton.jsx
    - ...and supporting small components

Accessibility & polish
- Terminal input accessible by keyboard (Enter to execute)
- Buttons have aria-labels
- Color contrast tuned for neon green on dark background
- Responsive layout that targets desktop, works on tablet

License / Attribution
- This demo is fictional and educational. Use responsibly.

If you want, I can:
- Generate a full package.json and index.html setup for Vite
- Add build scripts or a CI workflow
- Expand the fake data sets or add additional scripted terminal commands
