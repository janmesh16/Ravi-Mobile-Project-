# Ravi Mobile

> **Next-Generation Digital Storefront & Precision Workshop Portal**  
> Location: Shahada, District Nandurbar, Maharashtra, India  
> Repository: [https://github.com/janmesh16/Ravi-Mobile-Project-](https://github.com/janmesh16/Ravi-Mobile-Project-)

---

## 🛠️ Technology Stack & Architecture

- **Runtime & Framework:** React 19 + TypeScript (Strict Type Safety)
- **Bundler:** Vite 8 (Ultra-fast Hot Module Replacement)
- **Design System:** Custom CSS Design Tokens (`src/styles/tokens.css` & `src/styles/base.css`)
- **Approved Direction:** **Precision Workshop + Modern Bazaar Warmth** (Hybrid Alternate C)
- **Multilingual Support:** English (EN), Marathi (मराठी), and Hindi (हिन्दी)
- **Quality Tooling:** ESLint 10 with TypeScript-ESLint, Strict Type Checking

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js `v20+` or `v26+`
- npm `v10+`

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/janmesh16/Ravi-Mobile-Project-.git
cd Ravi-Mobile-Project-

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Start local development server
npm run dev
```

### 3. Build & Quality Verification
```bash
# Type-check and production bundle build
npm run build

# Run linter
npm run lint

# Preview production build locally
npm run preview
```

---

## 📂 Project Directory Structure

```
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules for node_modules, dist, and .env
├── eslint.config.js      # Modern flat ESLint configuration
├── index.html            # HTML5 shell with Google Fonts & local SEO meta
├── package.json          # Manifest declaring React 19, TypeScript & Vite
├── tsconfig.json         # TypeScript project configuration
├── vite.config.ts        # Vite configuration
└── src/
    ├── App.css           # Layout scaffolding & responsive dock styles
    ├── App.tsx           # Root component (Hybrid Alternate C layout)
    ├── index.css         # Central CSS importing tokens & base resets
    ├── main.tsx          # DOM root mount point
    ├── config/
    │   └── shop.ts       # Typed shop configuration & WhatsApp link engine
    └── styles/
        ├── base.css      # Accessible reset, focus rings & Devanagari rhythm
        └── tokens.css    # Color roles, spacing, radii & typographic tokens
```

---

## 🔒 Security & Environment Variables

Never commit `.env` or sensitive phone credentials to version control. All environment parameters are documented in `.env.example`:

- `VITE_WHATSAPP_NUMBER`: 10-digit WhatsApp phone with country code (e.g. `9198xxxxxxxx`).
- `VITE_SHOP_PHONE`: Voice telephone number for customer calls.
- `VITE_SHOP_FULL_ADDRESS`: Physical shop address in Shahada, Maharashtra.
- `VITE_GOOGLE_MAPS_URL`: Google Maps directions URL for store visits.

---

## 📜 License

Private & Proprietary — Developed for Ravi Mobile, Shahada.
