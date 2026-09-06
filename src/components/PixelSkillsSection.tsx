import React, { useState } from 'react';
import { 
  PenTool, 
  Share2, 
  Target, 
  Compass, 
  Video, 
  Lightbulb, 
  Palette, 
  Crown, 
  Wrench, 
  Languages, 
  Sparkles, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { playPixelBlip } from '../utils/audio';

interface PixelSkillsSectionProps {
  mode: 'day' | 'night';
  isMuted: boolean;
  onOpenContact?: () => void;
}

interface SkillItem {
  id: string;
  title: string;
  category: 'Words' | 'Strategy' | 'Visual & Video' | 'Arsenal';
  icon: React.FC<{ size?: number; className?: string }>;
  accentColor: string;
  copy: string;
  badges: string[];
  flavorQuote?: string;
}

const SKILLS_DATA: SkillItem[] = [
  {
    id: 'copywriting',
    title: 'Copywriting',
    category: 'Words',
    icon: PenTool,
    accentColor: '#f97316',
    copy: 'Ad copy, social captions, taglines, brand messaging, tone-of-voice guides, email copy',
    badges: ['Ad copy', 'Social captions', 'Taglines', 'Brand messaging', 'Tone-of-voice guides', 'Email copy'],
    flavorQuote: 'Giving brands a voice that cuts through generic corporate drone.'
  },
  {
    id: 'social-media',
    title: 'Social media strategy',
    category: 'Strategy',
    icon: Share2,
    accentColor: '#ec4899',
    copy: 'Platform strategy, content calendars, Instagram Reels scripting, community growth',
    badges: ['Platform strategy', 'Content calendars', 'Reels scripting', 'Community growth'],
    flavorQuote: 'Turning passive scrollers into invested, active communities.'
  },
  {
    id: 'performance-copy',
    title: 'Performance copy',
    category: 'Words',
    icon: Target,
    accentColor: '#e11d48',
    copy: 'Meta Ads, Google Ads, A/B test variants, hooks, conversion-focused copy',
    badges: ['Meta Ads', 'Google Ads', 'A/B test variants', 'Hooks', 'Conversion-focused copy'],
    flavorQuote: 'Zero-fluff ad hooks engineered for clicks and verifiable conversions.'
  },
  {
    id: 'content-strategy',
    title: 'Content strategy',
    category: 'Strategy',
    icon: Compass,
    accentColor: '#3b82f6',
    copy: 'SEO content, blog writing, audience research, competitive analysis, content planning',
    badges: ['SEO content', 'Blog writing', 'Audience research', 'Competitive analysis', 'Content planning'],
    flavorQuote: 'Systematic content blueprints that compound organic relevance over time.'
  },
  {
    id: 'short-form-video',
    title: 'Short-form video',
    category: 'Visual & Video',
    icon: Video,
    accentColor: '#8b5cf6',
    copy: 'Reel scripting, shoot planning, on-ground direction, short-form storytelling',
    badges: ['Reel scripting', 'Shoot planning', 'On-ground direction', 'Short-form storytelling'],
    flavorQuote: '3-second hook retention and narrative arcs crafted for rapid vertical feeds.'
  },
  {
    id: 'campaign-ideation',
    title: 'Campaign ideation',
    category: 'Strategy',
    icon: Lightbulb,
    accentColor: '#eab308',
    copy: 'Concept development, pitch decks, messaging frameworks, creative briefs, emails',
    badges: ['Concept development', 'Pitch decks', 'Messaging frameworks', 'Creative briefs', 'Emails'],
    flavorQuote: 'Big tentpole ideas translated into executable, cross-channel assets.'
  },
  {
    id: 'visual-design',
    title: 'Visual design',
    category: 'Visual & Video',
    icon: Palette,
    accentColor: '#10b981',
    copy: 'Adobe Photoshop & Illustrator. I used to be a designer, still think like one',
    badges: ['Adobe Photoshop', 'Adobe Illustrator', 'Layout & Typography', 'Art Direction Mindset'],
    flavorQuote: 'Words and aesthetics working in tandem — no disjointed handoffs.'
  },
  {
    id: 'brand-strategy',
    title: 'Brand strategy',
    category: 'Strategy',
    icon: Crown,
    accentColor: '#f59e0b',
    copy: 'Influencer strategy, ORM, Instagram & LinkedIn strategy, brand positioning',
    badges: ['Influencer strategy', 'ORM', 'Instagram & LinkedIn strategy', 'Brand positioning'],
    flavorQuote: 'Clarifying who you are and why your audience should care.'
  },
  {
    id: 'tools',
    title: 'Tools',
    category: 'Arsenal',
    icon: Wrench,
    accentColor: '#06b6d4',
    copy: 'Adobe Suite, Google Workspace, Canva, Notion, Google Search Console, Basic video editing',
    badges: ['Adobe Suite', 'Google Workspace', 'Canva', 'Notion', 'Search Console', 'Basic video editing'],
    flavorQuote: 'Hands-on workflow toolkit for agile conception and shipping.'
  },
  {
    id: 'languages',
    title: 'Languages',
    category: 'Arsenal',
    icon: Languages,
    accentColor: '#6366f1',
    copy: 'English, Hindi, Marathi, Tamil',
    badges: ['English (Fluent)', 'Hindi (Fluent)', 'Marathi (Native)', 'Tamil (Conversational)'],
    flavorQuote: 'Cultural nuance and multilingual wordplay for diverse audiences.'
  }
];

export const PixelSkillsSection: React.FC<PixelSkillsSectionProps> = ({
  mode,
  isMuted,
  onOpenContact
}) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  const isDay = mode === 'day';
  const activeSkill = SKILLS_DATA.find((s) => s.id === selectedSkillId) || null;

  const handleSelectSkill = (id: string) => {
    setSelectedSkillId((prev) => (prev === id ? null : id));
    playPixelBlip(isMuted, 'select');
  };

  const handleToggleMobileSkill = (id: string) => {
    setSelectedSkillId((prev) => (prev === id ? null : id));
    playPixelBlip(isMuted, 'select');
  };

  return (
    <section id="skills" className="relative w-full max-w-6xl mx-auto px-3 sm:px-6 py-10 sm:py-20 scroll-mt-16 sm:scroll-mt-20 flex flex-col items-center">
      
      {/* SECTION HEADER: Inspired by the retro omnibus tab header in the inspiration image */}
      <div className="flex flex-col items-center text-center mb-6 sm:mb-12">
        {/* Retro Header Plate with Mini Binder Rings */}
        <div 
          className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-7 py-2 border-3 border-black shadow-[3px_3px_0_#000] sm:shadow-[4px_4px_0_#000] relative ${
            isDay 
              ? 'bg-[#4ade80] text-[#0f2415]' 
              : 'bg-[#581c87] text-[#fed7aa]'
          }`}
        >
          {/* Top miniature binder rings */}
          <div className="hidden sm:flex absolute -top-3.5 left-6 space-x-3 pointer-events-none">
            {[1, 2, 3, 4, 5].map((ring) => (
              <div key={ring} className="flex flex-col items-center">
                <div className="w-1.5 h-3 bg-[#e2e8f0] border border-black shadow-[1px_1px_0_#000]" />
              </div>
            ))}
          </div>

          <Sparkles size={16} className={isDay ? 'text-[#14532d]' : 'text-[#fde047]'} />
          <h2 className="font-['Press_Start_2P'] text-[10px] sm:text-sm tracking-wider uppercase font-bold">
            SUSHMITA'S SKILLBOOK
          </h2>
        </div>
      </div>

      {/* Main Spiral Binder Notebook Card */}
      <div className="w-full max-w-5xl">
        <div 
          className={`relative border-3 sm:border-4 border-black p-2.5 sm:p-6 md:p-8 transition-colors duration-500 shadow-[4px_4px_0_#0f172a] sm:shadow-[10px_10px_0_#0f172a] ${
            isDay
              ? 'bg-[#86efac]'
              : 'bg-[#27153e]'
          }`}
          style={{
            backgroundImage: isDay
              ? 'radial-gradient(rgba(0, 0, 0, 0.08) 2px, transparent 2px)'
              : 'radial-gradient(rgba(255, 255, 255, 0.08) 2px, transparent 2px)',
            backgroundSize: '16px 16px'
          }}
        >
          {/* Spiral Binder Rings on the Left Edge - Visible on sm+ to prevent mobile viewport clipping */}
          <div className="hidden sm:flex absolute -left-5 sm:-left-6 top-8 bottom-8 flex-col justify-around pointer-events-none z-30">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((ring) => (
              <div key={ring} className="relative w-8 sm:w-10 h-6">
                <div 
                  className="w-full h-full rounded-full border-3 border-black bg-gradient-to-r from-gray-200 via-white to-gray-400 shadow-[2px_2px_0_#000]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 80%)' }}
                />
                <div className="absolute top-1.5 right-1 w-2.5 h-2.5 rounded-full bg-black" />
              </div>
            ))}
          </div>

          {/* Inner Notebook Page */}
          <div 
            className={`border-2 sm:border-3 border-black p-3 sm:p-6 md:p-8 ml-0 sm:ml-4 transition-colors duration-500 ${
              isDay
                ? 'bg-[#fffef9] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.05)]'
                : 'bg-[#150d24] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.05)]'
            }`}
          >
            {/* Notebook Header Tab */}
            <div 
              className={`w-full py-2 px-3 sm:px-4 border-2 border-black flex items-center justify-between gap-2 mb-4 sm:mb-6 ${
                isDay ? 'bg-[#fef08a]' : 'bg-[#381e59]'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#ef4444] border border-black" />
                <span className="font-['Silkscreen'] text-[11px] sm:text-sm font-bold tracking-wider uppercase text-black">
                  <span className="sm:hidden">CHAPTER: SKILLS</span>
                  <span className="hidden sm:inline">CHAPTER: CAPABILITIES &amp; SPECIALTIES</span>
                </span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* MOBILE VIEW (lg:hidden): Interactive Accordion Skill Cards */}
            {/* ======================================================== */}
            <div className="flex flex-col space-y-3 lg:hidden">
              {SKILLS_DATA.map((skill) => {
                const isExpanded = skill.id === selectedSkillId;
                const IconComp = skill.icon;
                return (
                  <div
                    key={skill.id}
                    className={`border-2 border-black transition-all overflow-hidden ${
                      isExpanded
                        ? isDay
                          ? 'bg-[#fffbf0] shadow-[3px_3px_0_#000]'
                          : 'bg-[#1e1336] shadow-[3px_3px_0_#000]'
                        : isDay
                          ? 'bg-[#fffaed] shadow-[2px_2px_0_#000]'
                          : 'bg-[#201538] shadow-[2px_2px_0_#000]'
                    }`}
                  >
                    {/* Header Button (Tap to expand/collapse) */}
                    <button
                      type="button"
                      onClick={() => handleToggleMobileSkill(skill.id)}
                      className="w-full flex items-center justify-between text-left p-2.5 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Icon badge */}
                        <div 
                          className="w-9 h-9 shrink-0 border-2 border-black flex items-center justify-center shadow-[1px_1px_0_#000]"
                          style={{ backgroundColor: skill.accentColor }}
                        >
                          <IconComp size={16} className="text-white drop-shadow-[1px_1px_0_#000]" />
                        </div>

                        {/* Title & Category */}
                        <div className="flex flex-col min-w-0 pr-2">
                          <span 
                            className={`font-['Press_Start_2P'] text-[10px] tracking-tight truncate ${
                              isExpanded
                                ? isDay ? 'text-[#c2410c]' : 'text-[#fec832]'
                                : isDay ? 'text-[#0f172a]' : 'text-[#f8fafc]'
                            }`}
                          >
                            {skill.title.toUpperCase()}
                          </span>
                          <span className={`font-['Silkscreen'] text-[8px] mt-0.5 ${isDay ? 'text-[#64748b]' : 'text-[#cbd5e1]'}`}>
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <div 
                        className={`w-6 h-6 shrink-0 border border-black flex items-center justify-center font-['Silkscreen'] text-[10px] font-bold transition-transform duration-200 ${
                          isExpanded
                            ? isDay ? 'bg-[#ea580c] text-white rotate-90' : 'bg-[#fec832] text-black rotate-90'
                            : 'bg-black/10 text-black/60 dark:text-white/60'
                        }`}
                      >
                        ►
                      </div>
                    </button>

                    {/* Expanded Content Drawer */}
                    {isExpanded && (
                      <div className="px-3 pb-3 pt-1 border-t-2 border-black/80 flex flex-col space-y-3">
                        {/* Deliverables Box */}
                        <div>
                          <div className="font-['Silkscreen'] text-[9px] text-[#64748b] font-bold uppercase mb-1">
                            // DELIVERABLES &amp; FOCUS
                          </div>
                          <div 
                            className={`p-3 border-2 border-black font-['Pixelify_Sans'] text-base font-normal leading-snug shadow-[2px_2px_0_#000] ${
                              isDay ? 'bg-white text-[#1e293b]' : 'bg-[#271945] text-[#fef08a]'
                            }`}
                          >
                            {skill.copy}
                          </div>
                        </div>

                        {/* Capability Tags */}
                        <div>
                          <div className="font-['Silkscreen'] text-[9px] text-[#64748b] font-bold uppercase mb-1.5">
                            // CAPABILITY TAGS
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {skill.badges.map((badge, idx) => (
                              <span
                                key={idx}
                                className={`px-2 py-0.5 border border-black font-['Pixelify_Sans'] text-xs font-semibold shadow-[1px_1px_0_#000] flex items-center gap-1 ${
                                  isDay
                                    ? 'bg-[#fed7aa] text-[#431407]'
                                    : 'bg-[#3b1c68] text-[#fed7aa]'
                                }`}
                              >
                                <CheckCircle2 size={11} className="text-[#ea580c] shrink-0" />
                                <span>{badge}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Flavor Quote */}
                        {skill.flavorQuote && (
                          <div 
                            className={`p-2.5 border-l-3 border-black font-['Pixelify_Sans'] text-sm italic leading-snug ${
                              isDay ? 'bg-[#f8fafc] text-[#475569]' : 'bg-[#140b24] text-[#cbd5e1]'
                            }`}
                          >
                            "{skill.flavorQuote}"
                          </div>
                        )}

                        {/* Action Link to LinkedIn */}
                        <a
                          href="https://www.linkedin.com/in/sushmita-pillai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playPixelBlip(isMuted, 'powerup')}
                          className={`w-full py-2.5 px-3 font-['Press_Start_2P'] text-[9px] font-bold border-2 border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer ${
                            isDay
                              ? 'bg-[#ea580c] hover:bg-[#c2410c] text-white'
                              : 'bg-[#fec832] hover:bg-[#ffd754] text-black'
                          }`}
                        >
                          <span>TALK TO SUSHMITA</span>
                          <ArrowRight size={11} />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop View (hidden on lg and below) */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Skill Buttons */}
              <div className="lg:col-span-5 flex flex-col space-y-2">
                {SKILLS_DATA.map((skill) => {
                  const isSelected = skill.id === selectedSkillId;
                  const IconComp = skill.icon;
                  return (
                    <button
                      key={skill.id}
                      onClick={() => handleSelectSkill(skill.id)}
                      className={`group w-full flex items-stretch border-2 sm:border-3 border-black text-left transition-all cursor-pointer ${
                        isSelected
                          ? isDay
                            ? 'bg-[#fed7aa] shadow-[4px_4px_0_#000] translate-x-1'
                            : 'bg-[#4c1d95] shadow-[4px_4px_0_#000] translate-x-1'
                          : isDay
                            ? 'bg-[#fffaed] hover:bg-[#fed7aa]/50 shadow-[2px_2px_0_#000]'
                            : 'bg-[#201538] hover:bg-[#2d1e4e] shadow-[2px_2px_0_#000]'
                      }`}
                    >
                      {/* Left Icon Badge */}
                      <div 
                        className="w-11 sm:w-12 shrink-0 border-r-2 sm:border-r-3 border-black flex items-center justify-center p-1.5"
                        style={{ backgroundColor: skill.accentColor }}
                      >
                        <div className="p-1 bg-black/20 border border-black rounded-none">
                          <IconComp size={18} className="text-white drop-shadow-[1px_1px_0_#000]" />
                        </div>
                      </div>

                      {/* Right Content Plate (Checkerboard textured button face) */}
                      <div 
                        className="flex-1 p-2 sm:p-2.5 flex items-center justify-between"
                        style={{
                          backgroundImage: isDay
                            ? 'linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0.03)), linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0.03))'
                            : 'linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.03) 75%, rgba(255,255,255,0.03)), linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.03) 75%, rgba(255,255,255,0.03))',
                          backgroundSize: '8px 8px',
                          backgroundPosition: '0 0, 4px 4px'
                        }}
                      >
                        <div className="flex flex-col pr-2">
                          <span 
                            className={`font-['Press_Start_2P'] text-[10px] sm:text-[11px] tracking-tight transition-colors ${
                              isSelected
                                ? isDay ? 'text-[#7c2d12]' : 'text-[#ffdf78]'
                                : isDay ? 'text-[#0f172a]' : 'text-[#f8fafc]'
                            }`}
                          >
                            {skill.title.toUpperCase()}
                          </span>
                          <span className={`font-['Silkscreen'] text-[9px] mt-0.5 ${isDay ? 'text-[#64748b]' : 'text-[#cbd5e1]'}`}>
                            {skill.category}
                          </span>
                        </div>

                        <div 
                          className={`w-5 h-5 shrink-0 border border-black flex items-center justify-center font-['Silkscreen'] text-[10px] font-bold ${
                            isSelected
                              ? isDay ? 'bg-[#ea580c] text-white' : 'bg-[#fec832] text-black'
                              : 'bg-black/10 text-black/50'
                          }`}
                        >
                          ►
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Active Skill Page Inspector (Sticky on Desktop) */}
              {activeSkill ? (
                <div 
                  className={`lg:col-span-7 border-3 border-black p-5 sm:p-7 relative transition-all duration-300 lg:sticky lg:top-24 ${
                    isDay 
                      ? 'bg-[#fffbf0] shadow-[6px_6px_0_#000]' 
                      : 'bg-[#1b1130] shadow-[6px_6px_0_#000]'
                  }`}
                >
                  {/* Skill Card Header */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b-2 border-black">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-11 h-11 border-2 border-black flex items-center justify-center shadow-[2px_2px_0_#000]"
                        style={{ backgroundColor: activeSkill.accentColor }}
                      >
                        {React.createElement(activeSkill.icon, { size: 22, className: 'text-white drop-shadow-[1px_1px_0_#000]' })}
                      </div>
                      <div>
                        <h3 className={`font-['Press_Start_2P'] text-sm sm:text-base leading-snug ${isDay ? 'text-[#0f172a]' : 'text-[#fffaf0]'}`}>
                          {activeSkill.title}
                        </h3>
                        <span className="font-['Silkscreen'] text-[10px] text-[#ea580c] font-bold uppercase">
                          CATEGORY: {activeSkill.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Exact Copy Text from User */}
                  <div className="mt-5">
                    <div className="font-['Silkscreen'] text-[11px] text-[#64748b] font-bold uppercase mb-2">
                      // DELIVERABLES &amp; FOCUS
                    </div>
                    <div 
                      className={`p-4 border-2 border-black font-['Pixelify_Sans'] text-lg sm:text-xl font-normal leading-relaxed shadow-[3px_3px_0_#000] ${
                        isDay ? 'bg-white text-[#1e293b]' : 'bg-[#271945] text-[#fef08a]'
                      }`}
                    >
                      {activeSkill.copy}
                    </div>
                  </div>

                  {/* Interactive Badge Cloud */}
                  <div className="mt-5">
                    <div className="font-['Silkscreen'] text-[11px] text-[#64748b] font-bold uppercase mb-2.5">
                      // CAPABILITY TAGS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeSkill.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 border-2 border-black font-['Pixelify_Sans'] text-sm sm:text-base font-semibold shadow-[2px_2px_0_#000] flex items-center gap-1.5 transition-all ${
                            isDay
                              ? 'bg-[#fed7aa] text-[#431407]'
                              : 'bg-[#3b1c68] text-[#fed7aa]'
                          }`}
                        >
                          <CheckCircle2 size={13} className="text-[#ea580c] shrink-0" />
                          <span>{badge}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Flavor Quote / Strategic Edge */}
                  {activeSkill.flavorQuote && (
                    <div 
                      className={`mt-6 p-3.5 border-l-4 border-black font-['Pixelify_Sans'] text-base italic leading-snug ${
                        isDay ? 'bg-[#f8fafc] text-[#475569]' : 'bg-[#140b24] text-[#cbd5e1]'
                      }`}
                    >
                      "{activeSkill.flavorQuote}"
                    </div>
                  )}

                  {/* Quick Action in Card */}
                  <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between">
                    <span className="font-['Silkscreen'] text-[10px] text-[#64748b]">
                      DISCUSS THIS SERVICE
                    </span>
                    <a
                      href="https://www.linkedin.com/in/sushmita-pillai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playPixelBlip(isMuted, 'powerup')}
                      className={`px-4 py-2 font-['Press_Start_2P'] text-[10px] font-bold border-2 border-black shadow-[3px_3px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center gap-2 cursor-pointer ${
                        isDay
                          ? 'bg-[#ea580c] hover:bg-[#c2410c] text-white'
                          : 'bg-[#fec832] hover:bg-[#ffd754] text-black'
                      }`}
                    >
                      <span>TALK TO SUSHMITA</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>

                </div>
              ) : (
                <div 
                  className={`lg:col-span-7 border-3 border-black p-8 sm:p-12 relative transition-all duration-300 lg:sticky lg:top-24 flex flex-col items-center justify-center text-center min-h-[380px] ${
                    isDay 
                      ? 'bg-[#fffbf0] shadow-[6px_6px_0_#000]' 
                      : 'bg-[#1b1130] shadow-[6px_6px_0_#000]'
                  }`}
                >
                  <div className={`w-14 h-14 border-3 border-black flex items-center justify-center shadow-[3px_3px_0_#000] mb-4 ${
                    isDay ? 'bg-[#fed7aa] text-[#ea580c]' : 'bg-[#3b1c68] text-[#fde047]'
                  }`}>
                    <Sparkles size={28} />
                  </div>

                  <div className="font-['Silkscreen'] text-[11px] text-[#64748b] font-bold uppercase mb-2">
                    // SKILLBOOK STANDBY
                  </div>

                  <h3 className={`font-['Press_Start_2P'] text-sm sm:text-base leading-relaxed mb-3 ${
                    isDay ? 'text-[#0f172a]' : 'text-[#fffaf0]'
                  }`}>
                    SELECT A SKILL
                  </h3>

                  <p className={`font-['Pixelify_Sans'] text-base max-w-sm leading-normal ${
                    isDay ? 'text-[#475569]' : 'text-[#cbd5e1]'
                  }`}>
                    Click any capability on the left to inspect its deliverables, capability tags, and strategic focus.
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-['Press_Start_2P'] text-[9px] text-[#ea580c] animate-pulse">
                    <span>◄</span>
                    <span>CLICK ANY SKILL TO OPEN</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA bar leading directly to contact */}
      <div className="mt-12 sm:mt-16 w-full max-w-2xl text-center">
        <div 
          className={`p-6 sm:p-8 border-3 sm:border-4 border-black shadow-[6px_6px_0_#000] ${
            isDay ? 'bg-[#fed7aa]' : 'bg-[#291745]'
          }`}
        >
          <h4 className={`font-['Press_Start_2P'] text-xs sm:text-sm mb-2 ${isDay ? 'text-[#1e1b4b]' : 'text-white'}`}>
            LOOKING FOR A BESPOKE COMBINATION?
          </h4>
          <p className={`font-['Pixelify_Sans'] text-base sm:text-lg mb-5 ${isDay ? 'text-[#431407]' : 'text-[#fed7aa]'}`}>
            From end-to-end launch copywriting to high-retention social content, let's talk.
          </p>
          <a
            href="https://www.linkedin.com/in/sushmita-pillai/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playPixelBlip(isMuted, 'powerup')}
            className={`px-6 sm:px-8 py-3 font-['Press_Start_2P'] text-xs font-bold border-3 border-black shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-2.5 cursor-pointer ${
              isDay
                ? 'bg-[#ea580c] hover:bg-[#c2410c] text-white'
                : 'bg-[#fec832] hover:bg-[#ffd754] text-[#120822]'
            }`}
          >
            <span>GET IN TOUCH</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

    </section>
  );
};
