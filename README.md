# Rishabh Sharma — Developer Portfolio

A developer portfolio designed in the visual language of Linear.app — featuring a grayscale, glassmorphic, and sharp-edged aesthetic. Built with React 18, TypeScript, Tailwind CSS, and Framer Motion.

---

## ⚡ Tech Stack & Architecture

- **Frontend Core**: React 18 + TypeScript scaffolded with Vite.
- **Routing**: React Router v6 utilizing `BrowserRouter` for clean, standard path-based routing.
- **Motion & Transitions**: Framer Motion for scroll-triggered reveals, page transitions, and staggered navigation overlays.
- **Styling**: Tailwind CSS with custom theme variables (pure grayscale palette, strict zero-rounded corners).
- **Icons**: Lucide React for consistent line-weight vector art.

---

## 📂 Core Projects

### 1. [LayerZero](https://github.com/render-TheVoid/layerzero)
AI-powered content summarization platform featuring a hybrid cloud/local LLM architecture.
* **Ingestion Pipeline**: Scraping web URLs via JSDOM and Mozilla Readability, parsing DOCX files with mammoth, and PDFs with pdf-parse.
* **Hybrid Inference**: Supports cloud models (Gemini 2.5 Flash, GPT OSS 120B, Sarvam 30B) or local/private models (Gemma 4 via Ollama).
* **Security & Infra**: Hardened Express.js backend with JWT in httpOnly cookies, bcrypt hashing, express-rate-limit, and multi-container Docker Compose.

### 2. [KaushalAI](https://github.com/render-TheVoid/kaushal-ai)
AI-powered job marketplace for India's informal workforce (Rural-optimized).
* **Skills Assessment**: Gemini 2.5 Flash driving adaptive, conversational skill tests.
* **Verifiable Credentials**: On-the-fly QR-verifiable certificate generation via jsPDF and html2canvas.
* **Accessibility**: Fully localized UI across Hindi, Marathi, and English using i18next.
* **Recognition**: *1st Place, Ideas to Impact 2026 Innovation Hackathon (Awadh Incubation Foundation, KMCLU Lucknow)*.

### 3. [DeepSynth](https://github.com/render-TheVoid/deepsynth)
Offline-first, completely private local LLM chat interface.
* **Local Agent**: Runs Gemma 3 4B (4-bit quantized) offline via Ollama.
* **Humorous Persona**: System instructions layered with a custom sarcastic personality.
* **Secured Dev**: Protected by Auth0 JWT validation, containerized with Docker Compose.

### 4. [Calculator](https://github.com/render-TheVoid/calculator)
A full-stack joke project that operates like a standard calculator, but with consequences.
* **State Trigger**: Calculation evaluations equal to exactly `67` trigger a payload validation.
* **Stripe Wall**: Redirects the user to a secure Stripe Elements checkout flow charging $67 to continue using the app.

---

## 🛠️ Development Setup

### Installation
Clone the repository and install the npm dependencies:
```bash
npm install
```

### Dev Server
Spin up the hot-reloading Vite server locally:
```bash
npm run dev
```

### Compilation & Build
Compile TypeScript declarations and bundle the static web asset assets:
```bash
npm run build
```

### Linter
Analyze source code files for formatting and potential runtime bugs:
```bash
npm run lint
```

---

## 🚀 Deployment

The portfolio bundles into lightweight, static HTML, CSS, and JS assets. For hosting on a standard VPS or static provider, serve the contents of the `dist/` directory and ensure your server is configured to rewrite all request URIs to `index.html` (standard SPA routing fallback).
