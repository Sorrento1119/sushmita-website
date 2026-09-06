# Sushmita | 8-Bit Copy & Design Portfolio

A cozy, retro 8-bit interactive portfolio and skill omnibus for **Sushmita**, copywriter and brand strategist. Built with nostalgic pixel art aesthetics, procedural chiptune audio, interactive cutscenes, and responsive day/night world atmospheres.

---

## 🌟 Highlights & Features

- **Dynamic Day & Night Atmosphere**: Toggle between a vibrant daytime sky and a twilight pixel nightscape complete with floating clouds, celestial animations, and custom pixel lighting.
- **Procedural 8-Bit Chiptune Audio**: Pure Web Audio API chiptune sound effects for buttons, theme switches, and item selections without loading heavy audio assets. Includes quick mute/unmute audio toggle.
- **Interactive Skills Omnibus**: Categorized showcase of copywriting, content strategy, visual direction, and creative toolkits with interactive pixel cards and detail views.
- **The Cat's Cutscenes (About Lore)**: An animated 8-bit feline companion sharing episodic lore chapters, quirky anecdotes, and creative philosophies in an interactive dialogue box.
- **Zero-Friction Contact Hub**: Direct access to LinkedIn, email, and social channels with one-click clipboard copy actions and pixel badges.
- **Responsive Retro Design**: Authentic retro gaming aesthetic styled with custom pixel typography (*Press Start 2P*, *Pixelify Sans*, and *Silkscreen*), responsive layout, and custom pixel-art borders.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Sound Synthesis**: Native Web Audio API (`AudioContext`)
- **Typography**: Google Fonts (*Press Start 2P*, *Pixelify Sans*, *Silkscreen*)

---

## 📁 Project Structure

```text
├── public/              # Static assets and favicon
├── src/
│   ├── assets/          # Pixel art avatars and images
│   ├── components/
│   │   ├── PixelNavbar.tsx         # Retro header with mode & sound toggles
│   │   ├── PixelSkyBackground.tsx  # Dynamic day/night animated pixel sky
│   │   ├── PixelHero.tsx           # Hero greeting & core value propositions
│   │   ├── PixelSkillsSection.tsx  # Interactive skills omnibus & spellbook
│   │   ├── PixelCatAbout.tsx       # Pixel cat companion & interactive lore
│   │   ├── PixelContactSection.tsx # Contact cards & one-click copy links
│   │   └── PixelGround.tsx         # Layered 8-bit hills, terrain & footer
│   ├── utils/
│   │   └── audio.ts                # Procedural 8-bit Web Audio synthesizer
│   ├── App.tsx                     # Main application layout and state
│   ├── index.css                   # Global styles & font configuration
│   └── main.tsx                    # React application entry point
├── index.html                      # HTML template with Google Fonts
└── package.json                    # Project metadata and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server on port 3000.
- `npm run build`: Compiles TypeScript and creates an optimized production bundle in `dist/`.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs TypeScript compiler checks (`tsc --noEmit`).
