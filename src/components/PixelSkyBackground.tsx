import React, { useMemo } from 'react';

interface PixelSkyBackgroundProps {
  mode: 'day' | 'night';
}

export const PixelSkyBackground: React.FC<PixelSkyBackgroundProps> = ({ mode }) => {
  // Deterministic stars for night mode
  const stars = useMemo(() => {
    return [
      { top: '8%', left: '12%', size: 'md', delay: '0s' },
      { top: '14%', left: '26%', size: 'sm', delay: '1.2s' },
      { top: '6%', left: '42%', size: 'lg', delay: '0.5s' },
      { top: '16%', left: '60%', size: 'sm', delay: '2.1s' },
      { top: '9%', left: '76%', size: 'md', delay: '0.8s' },
      { top: '20%', left: '88%', size: 'lg', delay: '1.7s' },
      { top: '26%', left: '15%', size: 'sm', delay: '2.5s' },
      { top: '32%', left: '35%', size: 'md', delay: '1.0s' },
      { top: '28%', left: '84%', size: 'sm', delay: '0.3s' },
      { top: '11%', left: '95%', size: 'md', delay: '1.9s' },
      { top: '22%', left: '5%', size: 'sm', delay: '1.4s' },
    ];
  }, []);

  return (
    <>
      {/* 1. FIXED SKY GRADIENT (Preserves the rich sunset/sky gradient across the hero section & viewport) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-20 transition-colors duration-700">
        {mode === 'day' ? (
          // Bright, cheerful 8-bit Daytime Sky
          <div 
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `linear-gradient(
                180deg,
                #38bdf8 0%,
                #60a5fa 22%,
                #93c5fd 44%,
                #bfdbfe 62%,
                #fed7aa 80%,
                #fef08a 94%,
                #fffbeb 100%
              )`
            }}
          />
        ) : (
          // Deep, atmospheric 8-bit Launch Week Twilight/Night Sky
          <div 
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `linear-gradient(
                180deg,
                #241042 0%,
                #3d1863 18%,
                #652277 34%,
                #9c2e74 48%,
                #cf4e65 62%,
                #eb6953 74%,
                #f79758 86%,
                #fde39a 96%,
                #fff4ca 100%
              )`
            }}
          />
        )}

        {/* 8-Bit Pixel Dither Grid Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: mode === 'day'
              ? `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                 radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)`
              : `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px),
                 radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
            backgroundSize: '4px 4px',
            backgroundPosition: '0 0, 2px 2px'
          }}
        />
      </div>

      {/* 2. UPPER ATMOSPHERE LAYER (Sun/Moon, Stars, Clouds - resides in the Hero section and scrolls off naturally) */}
      <div className="absolute top-0 inset-x-0 h-[100vh] min-h-[600px] pointer-events-none overflow-hidden select-none -z-10">
        {/* DAY MODE: Pixel Sun with rays (Responsive: smaller & moved to top-right corner on mobile) */}
        {mode === 'day' && (
          <div className="absolute top-2 right-2 sm:top-10 sm:right-20 md:right-32 w-10 h-10 sm:w-20 sm:h-20 transition-all duration-700">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Sun Glow */}
              <div className="absolute w-12 h-12 sm:w-24 sm:h-24 bg-[#fde047] opacity-40 blur-md" />
              {/* Sun Core (Octagonal 8-bit pixel shape) */}
              <div 
                className="w-8 h-8 sm:w-16 sm:h-16 bg-[#ffc83b] border sm:border-2 border-black relative"
                style={{
                  boxShadow: 'inset -2px -2px 0 0 #f59e0b, inset 2px 2px 0 0 #fffbeb, 2px 2px 0 0 rgba(0,0,0,0.15)'
                }}
              >
                {/* Cute smiling pixel sun face */}
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div className="flex justify-between w-4 sm:w-7 px-0.5 sm:px-1 mb-0.5 sm:mb-1">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-black" />
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-black" />
                  </div>
                  <div className="w-2 sm:w-3 h-0.5 sm:h-1 bg-black" />
                </div>
              </div>
              {/* Pixel Sun Rays */}
              <div className="absolute -top-1 sm:-top-2 w-2 sm:w-3 h-1 sm:h-2 bg-[#ffc83b] border border-black" />
              <div className="absolute -bottom-1 sm:-bottom-2 w-2 sm:w-3 h-1 sm:h-2 bg-[#ffc83b] border border-black" />
              <div className="absolute -left-1 sm:-left-2 w-1 sm:w-2 h-2 sm:h-3 bg-[#ffc83b] border border-black" />
              <div className="absolute -right-1 sm:-right-2 w-1 sm:w-2 h-2 sm:h-3 bg-[#ffc83b] border border-black" />
            </div>
          </div>
        )}

        {/* NIGHT MODE: Pixel Moon & Twinkling Stars (Responsive: smaller & moved to top-right corner on mobile) */}
        {mode === 'night' && (
          <>
            {/* Pixel Moon */}
            <div className="absolute top-2 right-2 sm:top-10 sm:right-20 md:right-32 w-9 h-9 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-all duration-700">
              <div className="relative w-full h-full">
                <div 
                  className="w-full h-full bg-[#fdf2d0] pixelated relative"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
                    boxShadow: 'inset -3px -3px 0 0 #e4cf9b'
                  }}
                >
                  {/* Moon craters */}
                  <div className="absolute top-1.5 left-2 sm:top-3 sm:left-4 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-[#e2ce99]" />
                  <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-2 h-1.5 sm:w-4 sm:h-3 bg-[#e2ce99]" />
                  <div className="absolute top-5 left-1.5 sm:top-10 sm:left-3 w-1 h-1 sm:w-2 sm:h-2 bg-[#e2ce99]" />
                </div>
                <div className="absolute -inset-1 sm:-inset-2 bg-[#fff6d6] opacity-25 blur-sm -z-10" />
              </div>
            </div>

            {/* Twinkling Pixel Stars */}
            {stars.map((star, idx) => (
              <div
                key={idx}
                className="absolute text-white"
                style={{
                  top: star.top,
                  left: star.left,
                  animation: `pulse 2.5s infinite ease-in-out ${star.delay}`,
                }}
              >
                {star.size === 'lg' ? (
                  <svg width="14" height="14" viewBox="0 0 7 7" className="fill-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
                    <rect x="3" y="0" width="1" height="7" />
                    <rect x="0" y="3" width="7" height="1" />
                    <rect x="2" y="2" width="3" height="3" />
                  </svg>
                ) : star.size === 'md' ? (
                  <svg width="10" height="10" viewBox="0 0 5 5" className="fill-[#fff8dc] opacity-90">
                    <rect x="2" y="0" width="1" height="5" />
                    <rect x="0" y="2" width="5" height="1" />
                    <rect x="2" y="2" width="1" height="1" />
                  </svg>
                ) : (
                  <div className="w-1.5 h-1.5 bg-[#ffffff] opacity-75 shadow-[0_0_3px_#fff]" />
                )}
              </div>
            ))}
          </>
        )}

        {/* Floating 8-bit Pixel Clouds in the upper sky */}
        <div className="absolute w-full h-full">
          <div 
            className={`absolute top-14 -left-32 transition-opacity duration-700 ${mode === 'day' ? 'opacity-90' : 'opacity-80'}`}
            style={{ animation: 'floatCloud1 55s linear infinite' }}
          >
            <PixelCloud mode={mode} scale={1} />
          </div>

          <div 
            className={`absolute top-44 -left-48 transition-opacity duration-700 ${mode === 'day' ? 'opacity-80' : 'opacity-70'}`}
            style={{ animation: 'floatCloud2 70s linear infinite 15s' }}
          >
            <PixelCloud mode={mode} scale={0.8} />
          </div>

          <div 
            className={`absolute top-72 -left-60 transition-opacity duration-700 ${mode === 'day' ? 'opacity-70' : 'opacity-55'}`}
            style={{ animation: 'floatCloud3 90s linear infinite 35s' }}
          >
            <PixelCloud mode={mode} scale={1.15} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatCloud1 {
          0% { transform: translateX(-150px); }
          100% { transform: translateX(calc(100vw + 300px)); }
        }
        @keyframes floatCloud2 {
          0% { transform: translateX(-200px); }
          100% { transform: translateX(calc(100vw + 350px)); }
        }
        @keyframes floatCloud3 {
          0% { transform: translateX(-250px); }
          100% { transform: translateX(calc(100vw + 400px)); }
        }
      `}</style>
    </>
  );
};

function PixelCloud({ mode, scale = 1 }: { mode: 'day' | 'night'; scale?: number }) {
  const isDay = mode === 'day';
  return (
    <div 
      className="relative flex flex-col items-center select-none"
      style={{ transform: `scale(${scale})` }}
    >
      <div className={`w-16 h-3 ${isDay ? 'bg-[#ffffff] shadow-[0_2px_0_#bae6fd]' : 'bg-[#fdfdfd] shadow-[0_2px_0_#d9d6e8]'}`} />
      <div className={`w-28 h-4 ${isDay ? 'bg-[#ffffff] shadow-[0_2px_0_#bae6fd]' : 'bg-[#ffffff] shadow-[0_2px_0_#d9d6e8]'} -mt-1`} />
      <div className={`w-40 h-5 ${isDay ? 'bg-[#ffffff] shadow-[0_3px_0_#93c5fd]' : 'bg-[#ffffff] shadow-[0_3px_0_#c3bedb]'} -mt-1`} />
      <div className={`w-48 h-4 ${isDay ? 'bg-[#f0f9ff] shadow-[0_3px_0_#7dd3fc]' : 'bg-[#f8f6fc] shadow-[0_3px_0_#b5aecd]'} -mt-1`} />
      <div className={`w-36 h-2 ${isDay ? 'bg-[#e0f2fe]' : 'bg-[#ebe7f5]'} -mt-0.5`} />
    </div>
  );
}
