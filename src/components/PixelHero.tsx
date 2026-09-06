import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { playPixelBlip } from '../utils/audio';

interface PixelHeroProps {
  mode: 'day' | 'night';
  isMuted: boolean;
}

export const PixelHero: React.FC<PixelHeroProps> = ({ mode, isMuted }) => {
  const isDay = mode === 'day';

  const handleCtaClick = () => {
    playPixelBlip(isMuted, 'powerup');
    window.open('https://www.linkedin.com/in/sushmita-pillai/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-16 md:pb-20 flex flex-col items-center text-center">
      
      {/* 1. Main Title: "Hi, I’m Sushmita!" */}
      <h1 
        className={`font-['Press_Start_2P'] text-xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight sm:leading-tight transition-colors duration-500 break-words ${
          isDay 
            ? 'text-[#18181b]' 
            : 'text-[#fffaf0]'
        }`}
        style={{
          textShadow: isDay
            ? '2px 2px 0 #60a5fa, 4px 4px 0 #2563eb, 6px 6px 0 #1e3a8a, 8px 8px 0 #0f172a'
            : '2px 2px 0 #4a1d75, 4px 4px 0 #331254, 6px 6px 0 #210a38, 8px 8px 0 #0d0219'
        }}
      >
        <span>Hi,</span>
        <span className="inline-block ml-1 sm:ml-1.5">I'm</span>{' '}
        <span 
          className={isDay ? 'text-[#ffd23f]' : 'text-[#ffdf78]'}
          style={{
            textShadow: isDay
              ? '2px 2px 0 #000000, 4px 4px 0 #2563eb, 6px 6px 0 #1e3a8a, 8px 8px 0 #0f172a'
              : undefined
          }}
        >
          Sushmita!
        </span>
      </h1>

      {/* 2. Below that: "I help brands stop sounding like brands. I help strategies stop sounding like decks." */}
      <div className="mt-6 sm:mt-8 max-w-2xl mx-auto">
        <p 
          className={`font-['Pixelify_Sans'] text-xl sm:text-2xl md:text-[28px] font-normal leading-snug sm:leading-normal transition-colors duration-500 ${
            isDay ? 'text-[#1e293b]' : 'text-[#fed7aa]'
          }`}
        >
          I help brands{' '}
          <span 
            className={`px-2 py-0.5 border border-black shadow-[2px_2px_0_#000] inline-block my-0.5 ${
              isDay 
                ? 'bg-[#fec832] text-[#1e1b4b]' 
                : 'bg-[#ff4a7d] text-white'
            }`}
          >
            stop sounding like brands
          </span>
          . I help strategies{' '}
          <span 
            className={`px-2 py-0.5 border border-black shadow-[2px_2px_0_#000] inline-block my-0.5 ${
              isDay 
                ? 'bg-[#f97316] text-white' 
                : 'bg-[#fec832] text-[#120822]'
            }`}
          >
            stop sounding like decks
          </span>
          .
        </p>
      </div>

      {/* 3. Below that in a retro box */}
      <div 
        className={`w-full max-w-2xl mt-8 sm:mt-10 border-3 sm:border-4 border-black text-left relative transition-all duration-500 ${
          isDay
            ? 'bg-[#fffef9] shadow-[4px_4px_0_#0f172a] sm:shadow-[8px_8px_0_#0f172a]'
            : 'bg-[#18102a]/95 shadow-[4px_4px_0_#080312] sm:shadow-[8px_8px_0_#080312]'
        }`}
      >
        {/* Retro Window Top Bar */}
        <div 
          className={`px-3 sm:px-3.5 py-2 border-b-2 sm:border-b-3 border-black flex items-center justify-between ${
            isDay ? 'bg-[#fed7aa]' : 'bg-[#2b1645]'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#ff5757] border border-black" />
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#fec832] border border-black" />
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#55ea7e] border border-black" />
            <span 
              className={`font-['Silkscreen'] text-[9px] sm:text-xs ml-1 sm:ml-2 tracking-wider uppercase font-bold ${
                isDay ? 'text-[#332014]' : 'text-[#fed7aa]'
              }`}
            >
              [ SUSHMITA.TXT ]
            </span>
          </div>

          <div 
            className={`font-['Silkscreen'] text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 border border-black ${
              isDay ? 'bg-[#fff5ea] text-[#7c2d12]' : 'bg-[#18102a] text-[#ffd066]'
            }`}
          >
            ● READ ONLY
          </div>
        </div>

        {/* Retro Window Content */}
        <div className="p-4 sm:p-7 md:p-8 space-y-4 sm:space-y-5">
          <p 
            className={`font-['Pixelify_Sans'] text-base sm:text-xl md:text-[22px] leading-relaxed font-semibold transition-colors duration-500 ${
              isDay ? 'text-[#1c1917]' : 'text-[#fff9f0]'
            }`}
          >
            Design taught me layout, breathing room, and visual rhythm.{' '}
            <span className={isDay ? 'text-[#b91c1c] underline decoration-2 underline-offset-4' : 'text-[#ffd066] underline decoration-2 underline-offset-4'}>
              Copywriting gives it teeth.
            </span>
          </p>

          <p 
            className={`font-['Pixelify_Sans'] text-base sm:text-xl md:text-[22px] leading-relaxed transition-colors duration-500 ${
              isDay ? 'text-[#292524]' : 'text-[#f5ebd7]'
            }`}
          >
            If someone needs a 40-slide presentation to understand what your company sells, your product isn't complicated;{' '}
            <span 
              className={`font-bold ${
                isDay ? 'text-[#c2410c]' : 'text-[#ff9bb3]'
              }`}
            >
              your words are just lazy.
            </span>
          </p>
        </div>
      </div>

      {/* 4. Below that: a CTA */}
      <div className="mt-8 sm:mt-10 w-full sm:w-auto">
        <button
          onClick={handleCtaClick}
          className={`w-full sm:w-auto px-5 sm:px-9 py-3.5 sm:py-4 font-['Press_Start_2P'] text-[11px] sm:text-sm font-bold border-3 sm:border-4 border-black shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 cursor-pointer ${
            isDay
              ? 'bg-[#f97316] hover:bg-[#ea580c] text-white'
              : 'bg-[#fec832] hover:bg-[#ffd754] text-[#120822]'
          }`}
        >
          <Mail size={16} />
          <span>TALK TO SUSHMITA</span>
          <ArrowRight size={16} />
        </button>
      </div>

    </section>
  );
};
