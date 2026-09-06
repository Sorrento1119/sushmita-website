import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  ArrowRight,
  Cat
} from 'lucide-react';
import { playPixelBlip } from '../utils/audio';

interface PixelCatAboutProps {
  mode: 'day' | 'night';
  isMuted: boolean;
  onOpenContact?: () => void;
}

interface DialogueCutscene {
  id: number;
  chapter: string;
  text: string;
  catComment: string;
  pose: 'kerning' | 'notebooks' | 'anime' | 'questions' | 'bedtime' | 'dota' | 'hexcode' | 'lore';
  side: 'left' | 'right';
  badgeColor: string;
}

const DIALOGUE_SCENES: DialogueCutscene[] = [
  {
    id: 1,
    chapter: "SCENE 1",
    text: "Has a design degree. Uses it mostly to judge fonts and kerning.",
    catComment: "I've seen her cringe at a restaurant menu for 10 straight minutes because the letter 'T' was 2 pixels too close to 'O'.",
    pose: 'kerning',
    side: 'left',
    badgeColor: '#f97316'
  },
  {
    id: 2,
    chapter: "SCENE 2",
    text: "Owns 27 notebooks. Uses 2 (or maybe 1).",
    catComment: "The other 25 are pristine, expensive, and currently serving as my heated afternoon nap throne.",
    pose: 'notebooks',
    side: 'right',
    badgeColor: '#ec4899'
  },
  {
    id: 3,
    chapter: "SCENE 3",
    text: "Watches filler episodes anyway. Reads every caption anyway. Completionist (or useless?).",
    catComment: "She will sit through 18 filler episodes of Naruto just to ensure zero narrative lore is left behind.",
    pose: 'anime',
    side: 'left',
    badgeColor: '#8b5cf6'
  },
  {
    id: 4,
    chapter: "SCENE 4",
    text: "Believes the best ideas come from the people who ask the most annoying questions. She is those people.",
    catComment: "'Why are we doing this? Does anyone actually care? What if we did the exact opposite?' — every brainstorm ever.",
    pose: 'questions',
    side: 'right',
    badgeColor: '#eab308'
  },
  {
    id: 5,
    chapter: "SCENE 5",
    text: "Will rewrite a tagline in her head before bed. Has never told anyone.",
    catComment: "Her eyes are closed, but her brain is actively stress-testing 40 different rhyme schemes at 1:45 AM.",
    pose: 'bedtime',
    side: 'left',
    badgeColor: '#3b82f6'
  },
  {
    id: 6,
    chapter: "SCENE 6",
    text: "Has completed Dota 2 matches at 2am and called it \"research into human behaviour under pressure.”",
    catComment: "High-stakes communication stress diagnostics. Definitely not just refusing to go to bed on a losing streak.",
    pose: 'dota',
    side: 'right',
    badgeColor: '#e11d48'
  },
  {
    id: 7,
    chapter: "SCENE 7",
    text: "Believes every emotion has a hex code.",
    catComment: "Quiet confidence is #3b82f6. Imposter syndrome is #64748b. The urge to rewrite copy is #f97316.",
    pose: 'hexcode',
    side: 'left',
    badgeColor: '#10b981'
  },
  {
    id: 8,
    chapter: "SCENE 8",
    text: "Reads about things she'll never use. Brings them up six months later at exactly the right moment.",
    catComment: "That obscure 2011 documentary about railway typography? Boom. Keynote pitch winner six months later.",
    pose: 'lore',
    side: 'right',
    badgeColor: '#6366f1'
  }
];

export const PixelCatAbout: React.FC<PixelCatAboutProps> = ({
  mode,
  isMuted
}) => {
  const [purringCatId, setPurringCatId] = useState<number | null>(null);

  const isDay = mode === 'day';

  const handlePetCat = (id: number) => {
    playPixelBlip(isMuted, 'meow');
    setPurringCatId(id);
    setTimeout(() => {
      setPurringCatId(null);
    }, 1500);
  };

  return (
    <section id="about" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 scroll-mt-16 sm:scroll-mt-20 flex flex-col items-center">
      
      {/* SECTION HEADER: Visual Novel Story Mode Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div 
          className={`inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 border-3 border-black shadow-[4px_4px_0_#000] relative ${
            isDay 
              ? 'bg-[#fec832] text-[#1e1b4b]' 
              : 'bg-[#581c87] text-[#fdf4ff]'
          }`}
        >
          <Cat size={20} className={isDay ? 'text-[#b45309]' : 'text-[#f472b6]'} />
          <h2 className="font-['Press_Start_2P'] text-xs sm:text-sm tracking-wider uppercase font-bold">
            ABOUT SUSHMITA
          </h2>
        </div>
      </div>

      {/* VISUAL NOVEL STORY STREAM: Alternating Left & Right Dialogue Scenes */}
      <div className="w-full flex flex-col space-y-12 sm:space-y-16">
        {DIALOGUE_SCENES.map((scene) => {
          const isLeft = scene.side === 'left';
          const isPurring = purringCatId === scene.id;

          return (
            <div 
              key={scene.id}
              className={`w-full flex flex-col items-center gap-6 sm:gap-8 ${
                isLeft 
                  ? 'md:flex-row md:items-center' 
                  : 'md:flex-row-reverse md:items-center'
              }`}
            >
              {/* 8-Bit Cat Character in Specific Pose */}
              <div className="shrink-0 flex flex-col items-center">
                <div 
                  onClick={() => handlePetCat(scene.id)}
                  className="group relative cursor-pointer select-none transition-transform hover:scale-105 active:scale-95"
                  title="Click to hear me meow!"
                >
                  {/* Purr Heart Pop-up */}
                  {isPurring && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-1 z-30 animate-bounce">
                      <Heart size={16} className="text-[#ef4444] fill-[#ef4444]" />
                      <span className="font-['Silkscreen'] text-[10px] font-bold text-black bg-[#fef08a] px-1.5 py-0.5 border border-black shadow-[2px_2px_0_#000]">
                        MEOW!
                      </span>
                    </div>
                  )}

                  {/* Character Frame */}
                  <div 
                    className={`w-36 h-36 sm:w-44 sm:h-44 border-3 border-black p-2 flex items-center justify-center relative transition-colors shadow-[5px_5px_0_#000] ${
                      isDay 
                        ? 'bg-[#fffdf8]' 
                        : 'bg-[#1a102e]'
                    }`}
                    style={{
                      backgroundImage: isDay
                        ? 'radial-gradient(rgba(0,0,0,0.06) 1.5px, transparent 1.5px)'
                        : 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)',
                      backgroundSize: '8px 8px'
                    }}
                  >
                    {/* Corner Pixel Screws */}
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black" />
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-black" />
                    <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-black" />
                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-black" />

                    {/* Distinct 8-Bit Cat Graphic by Pose */}
                    <CatPoseGraphic pose={scene.pose} isPurring={isPurring} />
                  </div>

                  {/* Cat Mat / Base Stand */}
                  <div 
                    className={`w-28 sm:w-36 h-3 border-2 border-black -mt-1.5 mx-auto shadow-[2px_2px_0_#000] ${
                      isDay ? 'bg-[#fed7aa]' : 'bg-[#701a75]'
                    }`}
                  />
                </div>

                {/* Subtitle / Click hint */}
                <span className={`font-['Silkscreen'] text-[9px] mt-2 opacity-80 ${isDay ? 'text-[#64748b]' : 'text-[#cbd5e1]'}`}>
                  [ CLICK TO PET 🐾 ]
                </span>
              </div>

              {/* JRPG Visual Novel Dialogue Box (Faithfully inspired by Rorona screenshot) */}
              <div className="flex-1 w-full relative">
                
                {/* Visual Novel Nameplate Attached to Top of Dialogue Box */}
                <div 
                  className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 border-3 border-black relative z-20 shadow-[3px_3px_0_#000] ${
                    isLeft ? 'ml-2 sm:ml-8' : 'mr-2 sm:mr-8 md:ml-auto'
                  } ${
                    isDay 
                      ? 'bg-[#fed7aa] text-[#431407]' 
                      : 'bg-[#4a1d75] text-[#fef08a]'
                  }`}
                  style={{ marginBottom: '-3px' }}
                >
                  {/* Gem icon mimicking Rorona frame badge */}
                  <div 
                    className="w-3 h-3 rounded-full border border-black shadow-[1px_1px_0_#000]"
                    style={{ backgroundColor: scene.badgeColor }}
                  />
                  <span className="font-['Press_Start_2P'] text-[10px] sm:text-[11px] font-normal tracking-tight">
                    {scene.chapter}
                  </span>
                </div>

                {/* The Dialogue Window (Warm Parchment / Velvet RPG Box) */}
                <div 
                  className={`border-3 sm:border-4 border-black p-4 sm:p-7 relative transition-all duration-300 shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000] ${
                    isDay 
                      ? 'bg-[#fffaf0]' 
                      : 'bg-[#201336]'
                  }`}
                  style={{
                    borderRadius: '8px'
                  }}
                >
                  {/* Subtle Dialogue Pointer pointing toward the cat */}
                  <div 
                    className={`hidden md:block absolute top-8 w-4 h-4 border-3 border-black transform rotate-45 ${
                      isLeft 
                        ? '-left-2.5 border-r-0 border-t-0 bg-[#fffaf0] dark:bg-[#201336]' 
                        : '-right-2.5 border-l-0 border-b-0 bg-[#fffaf0] dark:bg-[#201336]'
                    } ${isDay ? 'bg-[#fffaf0]' : 'bg-[#201336]'}`}
                  />

                  {/* Primary Fact Text (Direct Quote) - Clean font-normal for pristine numeral legibility */}
                  <div className="py-1">
                    <p 
                      className={`font-['Pixelify_Sans'] text-xl sm:text-2xl md:text-[27px] font-normal leading-relaxed ${
                        isDay ? 'text-[#18181b]' : 'text-[#fffdf5]'
                      }`}
                    >
                      "{scene.text}"
                    </p>
                  </div>

                  {/* Visual Novel Cutscene Blinking Prompt Indicator (▼) at bottom right */}
                  <div className="flex justify-end mt-3 pr-1">
                    <div className="flex items-center gap-1.5 font-['Silkscreen'] text-[10px] opacity-75">
                      <span className={isDay ? 'text-[#64748b]' : 'text-[#cbd5e1]'}>CONTINUE</span>
                      <span className="text-[#ea580c] font-bold animate-bounce">▼</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Storyline Conclusion / CTA Box */}
      <div className="mt-16 sm:mt-20 w-full max-w-2xl text-center">
        <div 
          className={`p-6 sm:p-8 border-3 sm:border-4 border-black shadow-[6px_6px_0_#000] ${
            isDay ? 'bg-[#fed7aa]' : 'bg-[#2b1747]'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={18} className="text-[#ea580c]" />
            <h4 className={`font-['Press_Start_2P'] text-xs sm:text-sm ${isDay ? 'text-[#1e1b4b]' : 'text-white'}`}>
              END OF CAT REPORT
            </h4>
            <Sparkles size={18} className="text-[#ea580c]" />
          </div>

          <p className={`font-['Pixelify_Sans'] text-base sm:text-lg mb-5 ${isDay ? 'text-[#431407]' : 'text-[#fed7aa]'}`}>
            Ready to channel all this curiosity, perfectionism, and late-night strategic thinking into your brand?
          </p>

          <a
            href="https://www.linkedin.com/in/sushmita-pillai/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playPixelBlip(isMuted, 'powerup')}
            className={`px-4 sm:px-8 py-3 font-['Press_Start_2P'] text-[11px] sm:text-xs font-bold border-3 border-black shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer max-w-full ${
              isDay
                ? 'bg-[#ea580c] hover:bg-[#c2410c] text-white'
                : 'bg-[#fec832] hover:bg-[#ffd754] text-[#120822]'
            }`}
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

    </section>
  );
};

/* =========================================================================
   8-BIT CAT GRAPHICS FOR EACH POSE
   Custom pixel designs for all 8 scenarios:
   1. kerning   (magnifying glass + spectacles)
   2. notebooks (sleeping atop a 27-notebook tower)
   3. anime     (headphones + popcorn bowl)
   4. questions (detective coat/hat + big '?' sign)
   5. bedtime   (nightcap in bed dreaming taglines)
   6. dota      (2am glowing headset & screen)
   7. hexcode   (artist beret + palette + swatch)
   8. lore      (wizard hat + ancient spellbook)
   ========================================================================= */

interface CatPoseGraphicProps {
  pose: 'kerning' | 'notebooks' | 'anime' | 'questions' | 'bedtime' | 'dota' | 'hexcode' | 'lore';
  isPurring: boolean;
}

function CatPoseGraphic({ pose, isPurring }: CatPoseGraphicProps) {
  const purrClass = isPurring ? 'animate-bounce' : '';

  switch (pose) {
    case 'kerning':
      // Pose 1: Cat with round spectacles & magnifying glass inspecting kerning
      return (
        <svg viewBox="0 0 32 32" className={`w-28 h-28 sm:w-32 sm:h-32 ${purrClass}`} style={{ shapeRendering: 'crispEdges' }}>
          {/* Ears */}
          <rect x="7" y="4" width="4" height="5" fill="#000" />
          <rect x="8" y="5" width="2" height="3" fill="#f97316" />
          <rect x="21" y="4" width="4" height="5" fill="#000" />
          <rect x="22" y="5" width="2" height="3" fill="#f97316" />
          {/* Head */}
          <rect x="8" y="8" width="16" height="11" fill="#000" />
          <rect x="9" y="9" width="14" height="9" fill="#f97316" />
          {/* Spectacles on Eyes */}
          <rect x="10" y="11" width="5" height="4" fill="#000" />
          <rect x="11" y="12" width="3" height="2" fill="#bae6fd" />
          <rect x="15" y="12" width="2" height="1" fill="#000" />
          <rect x="17" y="11" width="5" height="4" fill="#000" />
          <rect x="18" y="12" width="3" height="2" fill="#bae6fd" />
          {/* Nose & Mouth */}
          <rect x="15" y="15" width="2" height="1" fill="#f43f5e" />
          <rect x="14" y="16" width="4" height="1" fill="#000" />
          {/* Body */}
          <rect x="10" y="19" width="12" height="9" fill="#000" />
          <rect x="11" y="20" width="10" height="7" fill="#f97316" />
          <rect x="13" y="20" width="6" height="7" fill="#fffbeb" />
          {/* Magnifying Glass in right paw */}
          <rect x="21" y="15" width="6" height="6" fill="#000" />
          <rect x="22" y="16" width="4" height="4" fill="#67e8f9" />
          <rect x="20" y="20" width="2" height="4" fill="#854d0e" />
          {/* Kerning Ruler indicator below */}
          <rect x="4" y="28" width="24" height="3" fill="#000" />
          <rect x="5" y="29" width="22" height="1" fill="#fef08a" />
          <rect x="8" y="28" width="1" height="2" fill="#ea580c" />
          <rect x="14" y="28" width="1" height="2" fill="#ea580c" />
          <rect x="20" y="28" width="1" height="2" fill="#ea580c" />
        </svg>
      );

    case 'notebooks':
      // Pose 2: Cat napping on top of a tall pile of 27 notebooks
      return (
        <svg viewBox="0 0 32 32" className={`w-28 h-28 sm:w-32 sm:h-32 ${purrClass}`} style={{ shapeRendering: 'crispEdges' }}>
          {/* Stack of 5 thick notebooks forming a pedestal */}
          {/* Book 1 (bottom) */}
          <rect x="4" y="27" width="24" height="4" fill="#000" />
          <rect x="5" y="28" width="22" height="2" fill="#ec4899" />
          {/* Book 2 */}
          <rect x="5" y="23" width="22" height="4" fill="#000" />
          <rect x="6" y="24" width="20" height="2" fill="#3b82f6" />
          {/* Book 3 */}
          <rect x="6" y="19" width="20" height="4" fill="#000" />
          <rect x="7" y="20" width="18" height="2" fill="#10b981" />
          {/* Book 4 */}
          <rect x="7" y="15" width="18" height="4" fill="#000" />
          <rect x="8" y="16" width="16" height="2" fill="#f59e0b" />
          {/* Cute Loaf/Sleeping Cat on top of Book 4 */}
          {/* Cat Loaf Body */}
          <rect x="8" y="9" width="16" height="6" fill="#000" />
          <rect x="9" y="10" width="14" height="5" fill="#f97316" />
          {/* Sleeping Ears */}
          <rect x="9" y="7" width="3" height="3" fill="#000" />
          <rect x="10" y="8" width="1" height="1" fill="#f472b6" />
          <rect x="15" y="7" width="3" height="3" fill="#000" />
          <rect x="16" y="8" width="1" height="1" fill="#f472b6" />
          {/* Closed Sleeping Eyes (- -) */}
          <rect x="10" y="11" width="3" height="1" fill="#000" />
          <rect x="15" y="11" width="3" height="1" fill="#000" />
          <rect x="14" y="12" width="1" height="1" fill="#f43f5e" />
          {/* Zzz sleeping bubbles */}
          <rect x="22" y="6" width="2" height="1" fill="#3b82f6" />
          <rect x="25" y="3" width="3" height="2" fill="#3b82f6" />
          {/* Notebook badge text: "27" */}
          <rect x="13" y="24" width="6" height="2" fill="#000" />
          <rect x="14" y="24" width="4" height="1" fill="#fff" />
        </svg>
      );

    case 'anime':
      // Pose 3: Cat wearing big retro headphones, holding popcorn watching screen
      return (
        <svg viewBox="0 0 32 32" className={`w-28 h-28 sm:w-32 sm:h-32 ${purrClass}`} style={{ shapeRendering: 'crispEdges' }}>
          {/* Headphones Band */}
          <rect x="8" y="5" width="16" height="3" fill="#000" />
          <rect x="9" y="6" width="14" height="1" fill="#ef4444" />
          {/* Headphone Ear Cups */}
          <rect x="6" y="8" width="4" height="7" fill="#000" />
          <rect x="7" y="9" width="2" height="5" fill="#ef4444" />
          <rect x="22" y="8" width="4" height="7" fill="#000" />
          <rect x="23" y="9" width="2" height="5" fill="#ef4444" />
          {/* Cat Head */}
          <rect x="9" y="8" width="14" height="11" fill="#000" />
          <rect x="10" y="9" width="12" height="9" fill="#f97316" />
          {/* Sparkling Big Anime Eyes */}
          <rect x="11" y="11" width="3" height="4" fill="#000" />
          <rect x="11" y="11" width="1" height="2" fill="#fff" />
          <rect x="12" y="13" width="2" height="2" fill="#60a5fa" />
          <rect x="18" y="11" width="3" height="4" fill="#000" />
          <rect x="18" y="11" width="1" height="2" fill="#fff" />
          <rect x="19" y="13" width="2" height="2" fill="#60a5fa" />
          {/* Nose & Open O-Mouth */}
          <rect x="15" y="15" width="2" height="1" fill="#f43f5e" />
          <rect x="15" y="16" width="2" height="2" fill="#000" />
          {/* Body */}
          <rect x="10" y="19" width="12" height="8" fill="#000" />
          <rect x="11" y="20" width="10" height="6" fill="#f97316" />
          {/* Popcorn Bowl held by paws */}
          <rect x="11" y="23" width="10" height="7" fill="#000" />
          <rect x="12" y="24" width="8" height="5" fill="#fde047" />
          <rect x="13" y="22" width="2" height="2" fill="#ffffff" />
          <rect x="16" y="22" width="2" height="2" fill="#ffffff" />
          <rect x="14" y="25" width="4" height="1" fill="#dc2626" />
        </svg>
      );

    case 'questions':
      // Pose 4: Detective cat holding big interrogative '?' sign
      return (
        <svg viewBox="0 0 32 32" className={`w-28 h-28 sm:w-32 sm:h-32 ${purrClass}`} style={{ shapeRendering: 'crispEdges' }}>
          {/* Detective Deerstalker Hat */}
          <rect x="7" y="5" width="18" height="4" fill="#000" />
          <rect x="8" y="6" width="16" height="2" fill="#78350f" />
          <rect x="11" y="3" width="10" height="3" fill="#000" />
          <rect x="12" y="4" width="8" height="2" fill="#92400e" />
          {/* Cat Head */}
          <rect x="9" y="9" width="14" height="10" fill="#000" />
          <rect x="10" y="10" width="12" height="8" fill="#f97316" />
          {/* Smug / Inquisitive Brow & Eyes */}
          <rect x="11" y="11" width="3" height="1" fill="#000" />
          <rect x="12" y="13" width="2" height="2" fill="#000" />
          <rect x="18" y="11" width="3" height="1" fill="#000" />
          <rect x="18" y="12" width="2" height="3" fill="#000" />
          {/* Mouth (smirk) */}
          <rect x="15" y="15" width="1" height="1" fill="#f43f5e" />
          <rect x="16" y="16" width="3" height="1" fill="#000" />
          {/* Body with detective trenchcoat */}
          <rect x="10" y="19" width="12" height="9" fill="#000" />
          <rect x="11" y="20" width="10" height="7" fill="#b45309" />
          {/* Paws holding a giant sign with "?" */}
          <rect x="22" y="10" width="8" height="16" fill="#000" />
          <rect x="23" y="11" width="6" height="14" fill="#fef08a" />
          {/* Question mark on sign */}
          <rect x="24" y="13" width="4" height="2" fill="#000" />
          <rect x="26" y="15" width="2" height="3" fill="#000" />
          <rect x="25" y="18" width="2" height="2" fill="#000" />
          <rect x="25" y="22" width="2" height="2" fill="#dc2626" />
        </svg>
      );

    case 'bedtime':
      // Pose 5: Cat in nightcap in bed rewriting taglines at night
      return (
        <svg viewBox="0 0 32 32" className={`w-28 h-28 sm:w-32 sm:h-32 ${purrClass}`} style={{ shapeRendering: 'crispEdges' }}>
          {/* Nightcap / Sleeping Hat drooping left */}
          <rect x="5" y="8" width="4" height="4" fill="#000" />
          <rect x="6" y="9" width="2" height="2" fill="#fff" />
          <rect x="8" y="5" width="14" height="4" fill="#000" />
          <rect x="9" y="6" width="12" height="2" fill="#6366f1" />
          {/* Cat Face in Bed */}
          <rect x="9" y="9" width="14" height="9" fill="#000" />
          <rect x="10" y="10" width="12" height="7" fill="#f97316" />
          {/* Sleepy Eyes (thinking) */}
          <rect x="11" y="12" width="3" height="2" fill="#000" />
          <rect x="18" y="12" width="3" height="2" fill="#000" />
          {/* Pillow and Blanket */}
          <rect x="6" y="18" width="20" height="11" fill="#000" />
          <rect x="7" y="19" width="18" height="9" fill="#818cf8" />
          {/* Pattern on blanket */}
          <rect x="9" y="21" width="3" height="3" fill="#c7d2fe" />
          <rect x="16" y="21" width="3" height="3" fill="#c7d2fe" />
          <rect x="12" y="25" width="3" height="3" fill="#c7d2fe" />
          {/* Thought Bubble with Taglines "A > B?" */}
          <rect x="22" y="3" width="8" height="6" fill="#000" />
          <rect x="23" y="4" width="6" height="4" fill="#fef08a" />
          <rect x="24" y="5" width="4" height="2" fill="#ea580c" />
        </svg>
      );

    case 'dota':
      // Pose 6: 2AM Dota 2 Match with neon glowing headset & mechanical keyboard
      return (
        <svg viewBox="0 0 32 32" className={`w-28 h-28 sm:w-32 sm:h-32 ${purrClass}`} style={{ shapeRendering: 'crispEdges' }}>
          {/* Neon Gamer Headset */}
          <rect x="8" y="4" width="16" height="3" fill="#000" />
          <rect x="9" y="5" width="14" height="1" fill="#06b6d4" />
          <rect x="6" y="7" width="4" height="7" fill="#000" />
          <rect x="7" y="8" width="2" height="5" fill="#06b6d4" />
          <rect x="22" y="7" width="4" height="7" fill="#000" />
          <rect x="23" y="8" width="2" height="5" fill="#06b6d4" />
          {/* Cat Head */}
          <rect x="9" y="8" width="14" height="10" fill="#000" />
          <rect x="10" y="9" width="12" height="8" fill="#f97316" />
          {/* Focused Gamer Eyes reflected with blue screen glow */}
          <rect x="11" y="11" width="3" height="3" fill="#000" />
          <rect x="12" y="11" width="2" height="2" fill="#38bdf8" />
          <rect x="18" y="11" width="3" height="3" fill="#000" />
          <rect x="18" y="11" width="2" height="2" fill="#38bdf8" />
          {/* 2:00 AM clock indicator */}
          <rect x="3" y="2" width="9" height="5" fill="#000" />
          <rect x="4" y="3" width="7" height="3" fill="#e11d48" />
          {/* Glowing mechanical keyboard in front */}
          <rect x="6" y="22" width="20" height="7" fill="#000" />
          <rect x="7" y="23" width="18" height="5" fill="#1e1b4b" />
          {/* RGB keycaps */}
          <rect x="8" y="24" width="2" height="1" fill="#f43f5e" />
          <rect x="11" y="24" width="2" height="1" fill="#22c55e" />
          <rect x="14" y="24" width="2" height="1" fill="#3b82f6" />
          <rect x="17" y="24" width="2" height="1" fill="#eab308" />
          <rect x="20" y="24" width="2" height="1" fill="#ec4899" />
          {/* Cat Paws frantically clicking */}
          <rect x="10" y="20" width="3" height="3" fill="#fffbeb" />
          <rect x="18" y="20" width="3" height="3" fill="#fffbeb" />
        </svg>
      );

    case 'hexcode':
      // Pose 7: Artist cat with beret, paintbrush, and color palette
      return (
        <svg viewBox="0 0 32 32" className={`w-28 h-28 sm:w-32 sm:h-32 ${purrClass}`} style={{ shapeRendering: 'crispEdges' }}>
          {/* French Artist Beret */}
          <rect x="7" y="4" width="18" height="4" fill="#000" />
          <rect x="8" y="5" width="16" height="2" fill="#e11d48" />
          <rect x="15" y="2" width="2" height="3" fill="#000" />
          {/* Cat Head */}
          <rect x="9" y="8" width="14" height="10" fill="#000" />
          <rect x="10" y="9" width="12" height="8" fill="#f97316" />
          {/* Artistic Winking Eye */}
          <rect x="11" y="11" width="3" height="3" fill="#000" />
          <rect x="12" y="12" width="1" height="1" fill="#fff" />
          {/* Wink */}
          <rect x="18" y="12" width="4" height="1" fill="#000" />
          {/* Nose & Cheerful mouth */}
          <rect x="15" y="14" width="2" height="1" fill="#f43f5e" />
          <rect x="14" y="15" width="4" height="1" fill="#000" />
          {/* Artist Pallette with colorful paint blobs (#hex) */}
          <rect x="3" y="19" width="10" height="9" fill="#000" />
          <rect x="4" y="20" width="8" height="7" fill="#fed7aa" />
          {/* Swatches */}
          <rect x="5" y="21" width="2" height="2" fill="#ef4444" />
          <rect x="8" y="21" width="2" height="2" fill="#3b82f6" />
          <rect x="5" y="24" width="2" height="2" fill="#eab308" />
          <rect x="8" y="24" width="2" height="2" fill="#10b981" />
          {/* Paintbrush in right paw */}
          <rect x="22" y="16" width="3" height="10" fill="#000" />
          <rect x="23" y="17" width="1" height="8" fill="#78350f" />
          <rect x="22" y="14" width="3" height="3" fill="#10b981" />
        </svg>
      );

    case 'lore':
      // Pose 8: Scholar/Wizard cat with pointed hat and ancient encyclopedia
      return (
        <svg viewBox="0 0 32 32" className={`w-28 h-28 sm:w-32 sm:h-32 ${purrClass}`} style={{ shapeRendering: 'crispEdges' }}>
          {/* Wizard Hat with Gold Stars */}
          <rect x="14" y="2" width="4" height="3" fill="#000" />
          <rect x="12" y="4" width="8" height="3" fill="#000" />
          <rect x="7" y="7" width="18" height="3" fill="#000" />
          <rect x="8" y="8" width="16" height="1" fill="#6366f1" />
          <rect x="13" y="5" width="2" height="2" fill="#facc15" />
          {/* Cat Head */}
          <rect x="9" y="10" width="14" height="9" fill="#000" />
          <rect x="10" y="11" width="12" height="7" fill="#f97316" />
          {/* Wise / Knowing Eyes */}
          <rect x="11" y="12" width="3" height="2" fill="#000" />
          <rect x="12" y="12" width="1" height="1" fill="#fff" />
          <rect x="18" y="12" width="3" height="2" fill="#000" />
          <rect x="19" y="12" width="1" height="1" fill="#fff" />
          {/* Huge Ancient Book / Lore Tome Opened */}
          <rect x="5" y="19" width="22" height="10" fill="#000" />
          <rect x="6" y="20" width="10" height="8" fill="#fef9c3" />
          <rect x="16" y="20" width="10" height="8" fill="#fef9c3" />
          {/* Book Spine */}
          <rect x="15" y="19" width="2" height="10" fill="#431407" />
          {/* Magic Rune lines */}
          <rect x="8" y="22" width="6" height="1" fill="#78350f" />
          <rect x="8" y="24" width="5" height="1" fill="#78350f" />
          <rect x="18" y="22" width="6" height="1" fill="#78350f" />
          <rect x="18" y="24" width="4" height="1" fill="#78350f" />
          {/* Floating magical sparkle */}
          <rect x="25" y="12" width="3" height="3" fill="#facc15" />
        </svg>
      );

    default:
      return null;
  }
}
