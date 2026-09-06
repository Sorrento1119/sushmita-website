import React, { useState } from 'react';
import { PixelSkyBackground } from './components/PixelSkyBackground';
import { PixelNavbar } from './components/PixelNavbar';
import { PixelHero } from './components/PixelHero';
import { PixelSkillsSection } from './components/PixelSkillsSection';
import { PixelCatAbout } from './components/PixelCatAbout';
import { PixelContactSection } from './components/PixelContactSection';
import { PixelGround } from './components/PixelGround';

export default function App() {
  const [mode, setMode] = useState<'day' | 'night'>('day');
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMode = () => {
    setMode((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  const handleToggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  const isDay = mode === 'day';

  return (
    <div 
      className={`relative min-h-screen flex flex-col justify-between overflow-x-hidden font-['Pixelify_Sans'] transition-colors duration-700 ${
        mode === 'day'
          ? 'selection:bg-[#f97316] selection:text-white'
          : 'selection:bg-[#ff4a7d] selection:text-white'
      }`}
    >
      {/* 2 Main Sky Effects: Distinct Day & Night 8-bit Background */}
      <PixelSkyBackground mode={mode} />

      {/* Retro 8-Bit Navbar (Floating / Sticky) */}
      <PixelNavbar
        mode={mode}
        onToggleMode={handleToggleMode}
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content: Hero Section + Skills Omnibus + Cat About Section + Contact Details */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <PixelHero
          mode={mode}
          isMuted={isMuted}
        />

        {/* Skills Showcase (Retro Spiral Omnibus) */}
        <PixelSkillsSection
          mode={mode}
          isMuted={isMuted}
        />

        {/* About Section: Cute 8-Bit Cat Storyteller */}
        <PixelCatAbout
          mode={mode}
          isMuted={isMuted}
        />
      </main>

      {/* 8-Bit Ground Terrain: Rolling hills, grass ridge, wildflowers, and subterranean earth covering Contact & Footer */}
      <PixelGround mode={mode}>
        {/* Contact Section at the ground level */}
        <PixelContactSection
          mode={mode}
          isMuted={isMuted}
        />

        {/* Retro 8-Bit Footer rooted in the bedrock foundation */}
        <footer className="relative z-30 w-full py-8 px-4 text-center border-t-2 border-black/40 backdrop-blur-xs">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#ea580c] border border-black" />
              <span className={`font-['Press_Start_2P'] text-[10px] font-bold ${isDay ? 'text-[#fffbeb]' : 'text-[#fed7aa]'}`}>
                SUSHMITA • PORTFOLIO
              </span>
            </div>

            <a
              href="https://www.linkedin.com/in/sushmita-pillai/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-['Press_Start_2P'] text-[9px] px-3 py-1.5 border border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 cursor-pointer ${
                isDay ? 'bg-[#fed7aa] text-black hover:bg-[#fdba74]' : 'bg-[#581c87] text-[#fef08a] hover:bg-[#6b21a8]'
              }`}
            >
              SAY HELLO ►
            </a>
          </div>
        </footer>
      </PixelGround>
    </div>
  );
}
