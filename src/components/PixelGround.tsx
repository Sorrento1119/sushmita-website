import React, { useMemo } from 'react';

interface PixelGroundProps {
  mode: 'day' | 'night';
  children: React.ReactNode;
}

export const PixelGround: React.FC<PixelGroundProps> = ({ mode, children }) => {
  const isDay = mode === 'day';

  // Deterministic positions for surface pixel flowers/plants
  const flowers = useMemo(() => [
    { left: '4%', type: 'yellow', scale: 1 },
    { left: '11%', type: 'red', scale: 0.9 },
    { left: '19%', type: 'white', scale: 1.1 },
    { left: '28%', type: 'yellow', scale: 0.85 },
    { left: '37%', type: 'red', scale: 1 },
    { left: '46%', type: 'white', scale: 0.9 },
    { left: '55%', type: 'yellow', scale: 1.1 },
    { left: '64%', type: 'red', scale: 0.95 },
    { left: '73%', type: 'white', scale: 1 },
    { left: '82%', type: 'yellow', scale: 0.9 },
    { left: '91%', type: 'red', scale: 1.05 },
    { left: '96%', type: 'white', scale: 0.85 },
  ], []);

  // Deterministic positions for underground rocks/crystals in dirt
  const dirtMinerals = useMemo(() => [
    { top: '90px', left: '7%', size: 'lg', color: isDay ? '#92400e' : '#6b21a8' },
    { top: '160px', left: '15%', size: 'sm', color: isDay ? '#b45309' : '#a855f7' },
    { top: '220px', left: '88%', size: 'md', color: isDay ? '#78350f' : '#4c1d95' },
    { top: '130px', left: '78%', size: 'sm', color: isDay ? '#d97706' : '#38bdf8' },
    { top: '310px', left: '25%', size: 'lg', color: isDay ? '#92400e' : '#581c87' },
    { top: '280px', left: '62%', size: 'md', color: isDay ? '#b45309' : '#9333ea' },
    { top: '420px', left: '12%', size: 'md', color: isDay ? '#78350f' : '#3b0764' },
    { top: '390px', left: '85%', size: 'lg', color: isDay ? '#92400e' : '#a855f7' },
    { top: '490px', left: '48%', size: 'sm', color: isDay ? '#d97706' : '#38bdf8' },
    { top: '560px', left: '32%', size: 'md', color: isDay ? '#b45309' : '#6b21a8' },
    { top: '530px', left: '75%', size: 'sm', color: isDay ? '#78350f' : '#c084fc' },
  ], [isDay]);

  // Night mode fireflies
  const fireflies = useMemo(() => [
    { top: '-25px', left: '8%', delay: '0s' },
    { top: '-40px', left: '22%', delay: '1.4s' },
    { top: '-15px', left: '42%', delay: '0.7s' },
    { top: '-35px', left: '58%', delay: '2.1s' },
    { top: '-20px', left: '76%', delay: '1.1s' },
    { top: '-45px', left: '92%', delay: '2.8s' },
  ], []);

  return (
    <div className="relative w-full mt-10 sm:mt-16 overflow-hidden">
      
      {/* 1. DISTANT 8-BIT MOUNTAINS & ROLLING HILLS (SOLIDLY ATTACHED TO GROUND HORIZON) */}
      <div className="relative w-full pointer-events-none select-none -mb-1 z-0">
        <svg
          viewBox="0 0 1200 130"
          preserveAspectRatio="none"
          className="w-full h-24 sm:h-32 md:h-40 block"
        >
          {/* Layer 1: Distant 8-Bit Mountain Peaks (solidly rooted down to y=130) */}
          <path
            d="M 0,130 L 0,80 L 40,80 L 40,68 L 80,68 L 80,52 L 130,52 L 130,36 L 180,36 L 180,20 L 230,20 L 230,36 L 270,36 L 270,52 L 320,52 L 320,68 L 370,68 L 370,56 L 420,56 L 420,40 L 470,40 L 470,24 L 520,24 L 520,12 L 570,12 L 570,24 L 620,24 L 620,40 L 670,40 L 670,56 L 730,56 L 730,44 L 780,44 L 780,28 L 830,28 L 830,16 L 870,16 L 870,28 L 920,28 L 920,44 L 970,44 L 970,60 L 1030,60 L 1030,46 L 1080,46 L 1080,32 L 1130,32 L 1130,50 L 1170,50 L 1170,72 L 1200,72 L 1200,130 Z"
            fill={isDay ? '#93c5fd' : '#271146'}
          />

          {/* Snowy / Highlighted Caps on the Far Mountain Peaks */}
          {/* Peak 1 (x: 180-230) */}
          <polygon
            points="180,36 180,20 230,20 230,36 210,36 210,28 195,28 195,36"
            fill={isDay ? '#ffffff' : '#581c87'}
          />
          {/* Peak 2 (x: 470-570) */}
          <polygon
            points="470,30 520,24 520,12 570,12 570,24 545,30 535,22 505,22 495,30"
            fill={isDay ? '#ffffff' : '#6b21a8'}
          />
          {/* Peak 3 (x: 830-870) */}
          <polygon
            points="830,28 830,16 870,16 870,28 855,28 850,22 840,28"
            fill={isDay ? '#ffffff' : '#581c87'}
          />
          {/* Peak 4 (x: 1080-1130) */}
          <polygon
            points="1080,42 1080,32 1130,32 1130,42 1115,42 1110,36 1095,42"
            fill={isDay ? '#ffffff' : '#4c1d95'}
          />

          {/* Layer 2: Midground Rolling Green Pixel Hills (solidly rooted down to y=130) */}
          <path
            d="M 0,130 L 0,82 L 50,82 L 50,72 L 110,72 L 110,62 L 180,62 L 180,50 L 260,50 L 260,60 L 330,60 L 330,72 L 400,72 L 400,60 L 470,60 L 470,48 L 550,48 L 550,58 L 630,58 L 630,70 L 700,70 L 700,56 L 780,56 L 780,44 L 860,44 L 860,56 L 930,56 L 930,68 L 1000,68 L 1000,56 L 1070,56 L 1070,68 L 1140,68 L 1140,80 L 1200,80 L 1200,130 Z"
            fill={isDay ? '#4ade80' : '#1e1b4b'}
          />

          {/* Stepped Hill Shading / Depth Layer (solidly rooted down to y=130) */}
          <path
            d="M 0,130 L 0,98 L 70,98 L 70,86 L 170,86 L 170,74 L 270,74 L 270,84 L 380,84 L 380,74 L 490,74 L 490,84 L 610,84 L 610,74 L 730,74 L 730,64 L 850,64 L 850,74 L 970,74 L 970,84 L 1090,84 L 1090,96 L 1200,96 L 1200,130 Z"
            fill={isDay ? '#22c55e' : '#172554'}
          />
        </svg>
      </div>

      {/* 2. THE 8-BIT STEPPED GRASS RIDGE (TOP EDGE OF GROUND) */}
      <div className="relative w-full z-10 select-none">
        
        {/* 8-Bit Pine Trees planted firmly along the ground line */}
        <div className="absolute -top-11 sm:-top-12 left-[6%] z-10 hidden xs:block">
          <GroundPineTree mode={mode} scale={0.9} />
        </div>
        <div className="absolute -top-12 sm:-top-13 left-[23%] z-10">
          <GroundPineTree mode={mode} scale={1.1} />
        </div>
        <div className="absolute -top-11 sm:-top-12 left-[49%] z-10 hidden sm:block">
          <GroundPineTree mode={mode} scale={0.85} />
        </div>
        <div className="absolute -top-12 sm:-top-13 left-[74%] z-10">
          <GroundPineTree mode={mode} scale={1.05} />
        </div>
        <div className="absolute -top-11 sm:-top-12 left-[91%] z-10 hidden xs:block">
          <GroundPineTree mode={mode} scale={0.95} />
        </div>

        {/* Stepped Pixel Grass Tooth Edge (SVG for crisp pixel rendering) */}
        <div className="w-full h-4 overflow-hidden leading-none -mb-px">
          <svg 
            width="100%" 
            height="16" 
            viewBox="0 0 480 16" 
            preserveAspectRatio="none" 
            className="w-full h-4 block"
          >
            <defs>
              <pattern id="pixel-grass-pattern" width="32" height="16" patternUnits="userSpaceOnUse">
                {/* 8-bit stepped grass silhouette */}
                <rect x="0" y="8" width="8" height="8" fill={isDay ? '#16a34a' : '#15803d'} />
                <rect x="2" y="4" width="4" height="4" fill={isDay ? '#22c55e' : '#22c55e'} />
                <rect x="8" y="12" width="8" height="4" fill={isDay ? '#16a34a' : '#15803d'} />
                <rect x="10" y="8" width="4" height="4" fill={isDay ? '#22c55e' : '#22c55e'} />
                <rect x="16" y="4" width="8" height="12" fill={isDay ? '#16a34a' : '#15803d'} />
                <rect x="18" y="0" width="4" height="4" fill={isDay ? '#4ade80' : '#4ade80'} />
                <rect x="24" y="8" width="8" height="8" fill={isDay ? '#16a34a' : '#15803d'} />
                <rect x="26" y="4" width="4" height="4" fill={isDay ? '#22c55e' : '#22c55e'} />
              </pattern>
            </defs>
            <rect width="100%" height="16" fill="url(#pixel-grass-pattern)" />
          </svg>
        </div>

        {/* Solid Vibrant Grass Band (Top layer of turf) */}
        <div 
          className={`w-full h-5 border-t-2 border-black/80 flex items-center justify-between px-4 relative ${
            isDay ? 'bg-[#22c55e]' : 'bg-[#15803d]'
          }`}
          style={{
            boxShadow: isDay
              ? 'inset 0 3px 0 #4ade80, inset 0 -3px 0 #15803d'
              : 'inset 0 3px 0 #22c55e, inset 0 -3px 0 #14532d',
          }}
        >
          {/* Surface Wildflowers */}
          {flowers.map((f, idx) => (
            <div 
              key={idx} 
              className="absolute -top-3 pointer-events-none"
              style={{ left: f.left, transform: `scale(${f.scale})` }}
            >
              <PixelFlower mode={mode} type={f.type} />
            </div>
          ))}

          {/* Night Mode Fireflies gently bobbing above the grass */}
          {!isDay && fireflies.map((ff, idx) => (
            <div
              key={`ff-${idx}`}
              className="absolute w-2 h-2 rounded-full pointer-events-none"
              style={{
                top: ff.top,
                left: ff.left,
                backgroundColor: '#fef08a',
                boxShadow: '0 0 6px 2px rgba(254, 240, 138, 0.8), 0 0 10px 4px rgba(74, 222, 128, 0.4)',
                animation: `fireflyDrift 3.5s ease-in-out infinite alternate ${ff.delay}`,
              }}
            />
          ))}
        </div>

        {/* Loam / Soil Transition Line */}
        <div 
          className={`w-full h-3 border-b-2 border-black/90 ${
            isDay ? 'bg-[#15803d]' : 'bg-[#14532d]'
          }`}
        />
      </div>

      {/* 3. SOLID SUBTERRANEAN EARTH / DIRT STRATA */}
      <div 
        className={`relative w-full transition-colors duration-700 ${
          isDay 
            ? 'bg-[#5c2d0c] text-[#fffbeb]' 
            : 'bg-[#160a29] text-[#fed7aa]'
        }`}
        style={{
          backgroundImage: isDay
            ? `radial-gradient(rgba(0, 0, 0, 0.25) 2px, transparent 2px),
               radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)`
            : `radial-gradient(rgba(0, 0, 0, 0.4) 2px, transparent 2px),
               radial-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 8px 8px',
        }}
      >
        {/* Dirt Texture / Bedrock Flecks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {dirtMinerals.map((m, idx) => (
            <div
              key={idx}
              className="absolute border border-black/40"
              style={{
                top: m.top,
                left: m.left,
                width: m.size === 'lg' ? '12px' : m.size === 'md' ? '8px' : '5px',
                height: m.size === 'lg' ? '10px' : m.size === 'md' ? '7px' : '5px',
                backgroundColor: m.color,
                boxShadow: '1px 1px 0 rgba(0,0,0,0.5)',
              }}
            />
          ))}

          {/* Large Subterranean Stone Bricks / Strata accents */}
          <div 
            className="absolute top-40 -left-6 w-24 h-10 border-2 border-black/60 opacity-60"
            style={{ backgroundColor: isDay ? '#451a03' : '#0d0419' }}
          />
          <div 
            className="absolute top-80 -right-8 w-32 h-12 border-2 border-black/60 opacity-60"
            style={{ backgroundColor: isDay ? '#451a03' : '#0d0419' }}
          />
          <div 
            className="absolute top-[480px] left-[15%] w-28 h-9 border-2 border-black/60 opacity-50 hidden sm:block"
            style={{ backgroundColor: isDay ? '#3f1802' : '#0a0314' }}
          />
          <div 
            className="absolute top-[620px] right-[20%] w-36 h-11 border-2 border-black/60 opacity-50 hidden sm:block"
            style={{ backgroundColor: isDay ? '#3f1802' : '#0a0314' }}
          />
        </div>

        {/* Content Sitting on the Ground: Contact Section and Footer */}
        <div className="relative z-20">
          {children}
        </div>

      </div>

      <style>{`
        @keyframes fireflyDrift {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-8px) translateX(6px);
            opacity: 1;
          }
          100% {
            transform: translateY(-16px) translateX(-4px);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

// 8-Bit Pixel Wildflower
function PixelFlower({ mode, type }: { mode: 'day' | 'night'; type: string }) {
  const isDay = mode === 'day';

  if (!isDay) {
    // Night: Glowing bioluminescent mushroom / orchid
    return (
      <div className="flex flex-col items-center">
        <div className="w-2 h-1.5 bg-[#a855f7] border border-black rounded-t-sm shadow-[0_0_4px_#c084fc]" />
        <div className="w-1 h-1.5 bg-[#06b6d4] border-x border-black" />
      </div>
    );
  }

  if (type === 'red') {
    return (
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2 bg-[#ef4444] border border-black flex items-center justify-center">
          <div className="w-1 h-0.5 bg-[#fef08a]" />
        </div>
        <div className="w-0.5 h-1.5 bg-[#15803d]" />
      </div>
    );
  }

  if (type === 'yellow') {
    return (
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2 bg-[#facc15] border border-black flex items-center justify-center">
          <div className="w-1 h-0.5 bg-[#ea580c]" />
        </div>
        <div className="w-0.5 h-1.5 bg-[#15803d]" />
      </div>
    );
  }

  // White daisy
  return (
    <div className="flex flex-col items-center">
      <div className="w-2.5 h-2 bg-[#ffffff] border border-black flex items-center justify-center">
        <div className="w-1 h-0.5 bg-[#f59e0b]" />
      </div>
      <div className="w-0.5 h-1.5 bg-[#15803d]" />
    </div>
  );
}

// 8-Bit Pixel Pine Tree standing firmly on the ground
function GroundPineTree({ mode, scale = 1 }: { mode: 'day' | 'night'; scale?: number }) {
  const isDay = mode === 'day';
  return (
    <div 
      className="flex flex-col items-center pointer-events-none select-none drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
      style={{ transform: `scale(${scale})`, transformOrigin: 'bottom center' }}
    >
      {/* Top crown */}
      <div className={`w-2.5 h-2 border border-black ${isDay ? 'bg-[#4ade80]' : 'bg-[#10b981]'}`} />
      {/* Upper branch tier */}
      <div className={`w-5 h-2.5 border border-black -mt-0.5 ${isDay ? 'bg-[#22c55e]' : 'bg-[#059669]'}`} />
      {/* Mid branch tier */}
      <div className={`w-8 h-3 border border-black -mt-0.5 ${isDay ? 'bg-[#16a34a]' : 'bg-[#047857]'}`} />
      {/* Base foliage */}
      <div className={`w-11 h-3.5 border border-black -mt-0.5 ${isDay ? 'bg-[#15803d]' : 'bg-[#064e3b]'}`} />
      {/* Wood trunk rooted into the grass */}
      <div className={`w-3 h-3 border border-black -mt-0.5 ${isDay ? 'bg-[#78350f]' : 'bg-[#1e1b4b]'}`} />
    </div>
  );
}

