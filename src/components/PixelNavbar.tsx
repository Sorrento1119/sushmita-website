import React, { useState, useEffect } from 'react';
import { Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { playPixelBlip } from '../utils/audio';

interface PixelNavbarProps {
  mode: 'day' | 'night';
  onToggleMode: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
  onOpenContact?: () => void;
}

export const PixelNavbar: React.FC<PixelNavbarProps> = ({
  mode,
  onToggleMode,
  isMuted,
  onToggleSound,
}) => {
  const [activeTab, setActiveTab] = useState('HOME');

  const isDay = mode === 'day';

  const navItems = ['HOME', 'SKILLS', 'ABOUT', 'CONTACT'];

  // Scroll Spy to keep active tab highlighted accurately as user scrolls through sections
  useEffect(() => {
    const handleScroll = () => {
      // 1. If near the top of the page, HOME is active
      if (window.scrollY < 180) {
        setActiveTab('HOME');
        return;
      }

      // 2. If scrolled near the bottom of the page, CONTACT is active
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveTab('CONTACT');
        return;
      }

      // 3. Viewport-relative threshold (260px from top of window)
      const triggerThreshold = 260;
      const contactEl = document.getElementById('contact');
      const aboutEl = document.getElementById('about');
      const skillsEl = document.getElementById('skills');

      if (contactEl && contactEl.getBoundingClientRect().top <= triggerThreshold) {
        setActiveTab('CONTACT');
      } else if (aboutEl && aboutEl.getBoundingClientRect().top <= triggerThreshold) {
        setActiveTab('ABOUT');
      } else if (skillsEl && skillsEl.getBoundingClientRect().top <= triggerThreshold) {
        setActiveTab('SKILLS');
      } else {
        setActiveTab('HOME');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    playPixelBlip(isMuted, 'select');
    if (item === 'CONTACT') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item === 'SKILLS') {
      const el = document.getElementById('skills');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item === 'ABOUT') {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-2.5 sm:top-4 inset-x-0 z-50 w-full px-2 sm:px-6 pointer-events-none flex justify-center">
      {/* DESKTOP VIEW (sm and up): Centered Nav Pill with Controls Off-Center on Right */}
      <div className="hidden sm:flex relative w-full max-w-6xl mx-auto items-center justify-center">
        {/* The Pill-Shaped Navigation Bar (Centrally Anchored in the Viewport) */}
        <nav 
          className="pointer-events-auto flex items-center px-3 py-1.5 bg-[#171717]/95 border-3 border-black rounded-full shadow-[4px_4px_0_#000] backdrop-blur-xs select-none"
          aria-label="Main Navigation"
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item;
              return (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`px-3.5 py-1 font-['Silkscreen'] text-xs md:text-sm rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#fec832] text-black font-bold shadow-[2px_2px_0_#000]'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Action Controls: Sound FX (Icon only), Day/Night (Icon only) */}
        <div className="pointer-events-auto absolute right-2 flex items-center gap-1.5 select-none">
          {/* Sound FX Toggle (Icon Only) */}
          <button
            onClick={() => {
              if (isMuted) {
                playPixelBlip(false, 'select');
              }
              onToggleSound();
            }}
            className={`w-8 h-8 rounded-full border-3 border-black shadow-[3px_3px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center transition-all cursor-pointer ${
              isMuted
                ? 'bg-[#334155] text-[#94a3b8] hover:bg-[#1e293b]'
                : isDay
                  ? 'bg-[#fed7aa] text-[#431407] hover:bg-[#fdba74]'
                  : 'bg-[#3b1959] text-[#fef08a] hover:bg-[#4c2273]'
            }`}
            title={isMuted ? 'Sound FX: OFF (Click to turn on)' : 'Sound FX: ON (Click to mute)'}
            aria-label={isMuted ? 'Turn on sound effects' : 'Mute sound effects'}
          >
            {isMuted ? (
              <VolumeX size={14} className="text-red-400 shrink-0" />
            ) : (
              <Volume2 size={14} className="text-emerald-500 shrink-0 animate-pulse" />
            )}
          </button>

          {/* Day / Night Theme Switcher (Icon Only) */}
          <button
            onClick={() => {
              playPixelBlip(isMuted, 'powerup');
              onToggleMode();
            }}
            className={`w-8 h-8 rounded-full border-3 border-black shadow-[3px_3px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center transition-all cursor-pointer ${
              isDay
                ? 'bg-[#fef08a] text-[#b45309] hover:bg-[#fde047]'
                : 'bg-[#2e174b] text-[#ffd066] hover:bg-[#3d1f63]'
            }`}
            title={`Switch to ${isDay ? 'Night' : 'Day'} Mode`}
            aria-label={`Switch to ${isDay ? 'Night' : 'Day'} Mode`}
          >
            {isDay ? (
              <Sun size={15} className="text-[#ea580c] shrink-0" />
            ) : (
              <Moon size={15} className="text-[#ffd066] shrink-0" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE VIEW (< sm): Symmetrical Single Row with SFX on Left, Nav Pill in Center, Day/Night on Right */}
      <div className="flex sm:hidden items-center justify-center gap-1.5 w-full max-w-sm mx-auto select-none">
        {/* Left Side: Sound FX Toggle */}
        <button
          onClick={() => {
            if (isMuted) {
              playPixelBlip(false, 'select');
            }
            onToggleSound();
          }}
          className={`pointer-events-auto w-8 h-8 rounded-full border-2 border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none flex items-center justify-center shrink-0 transition-all cursor-pointer ${
            isMuted
              ? 'bg-[#334155] text-[#94a3b8]'
              : isDay
                ? 'bg-[#fed7aa] text-[#431407]'
                : 'bg-[#3b1959] text-[#fef08a]'
          }`}
          title={isMuted ? 'Sound FX: OFF' : 'Sound FX: ON'}
          aria-label="Toggle Sound"
        >
          {isMuted ? (
            <VolumeX size={13} className="text-red-400 shrink-0" />
          ) : (
            <Volume2 size={13} className="text-emerald-500 shrink-0 animate-pulse" />
          )}
        </button>

        {/* Center: The Navigation Pill */}
        <nav 
          className="pointer-events-auto flex items-center px-1.5 py-1 bg-[#171717]/95 border-2 border-black rounded-full shadow-[3px_3px_0_#000] backdrop-blur-xs select-none"
          aria-label="Mobile Navigation"
        >
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeTab === item;
              return (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`px-2 py-0.5 font-['Silkscreen'] text-[10px] rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#fec832] text-black font-bold shadow-[1px_1px_0_#000]'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Side: Day / Night Theme Switcher */}
        <button
          onClick={() => {
            playPixelBlip(isMuted, 'powerup');
            onToggleMode();
          }}
          className={`pointer-events-auto w-8 h-8 rounded-full border-2 border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none flex items-center justify-center shrink-0 transition-all cursor-pointer ${
            isDay
              ? 'bg-[#fef08a] text-[#b45309]'
              : 'bg-[#2e174b] text-[#ffd066]'
          }`}
          title="Toggle Day/Night"
          aria-label="Toggle Day/Night"
        >
          {isDay ? (
            <Sun size={14} className="text-[#ea580c] shrink-0" />
          ) : (
            <Moon size={14} className="text-[#ffd066] shrink-0" />
          )}
        </button>
      </div>
    </header>
  );
};
