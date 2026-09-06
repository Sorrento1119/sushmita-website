import React, { useState } from 'react';
import { 
  Linkedin, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquareCode
} from 'lucide-react';
import { playPixelBlip } from '../utils/audio';

interface PixelContactSectionProps {
  mode: 'day' | 'night';
  isMuted: boolean;
}

export const PixelContactSection: React.FC<PixelContactSectionProps> = ({ mode, isMuted }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const isDay = mode === 'day';

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    playPixelBlip(isMuted, 'powerup');
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  return (
    <section id="contact" className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-20 sm:pb-28 scroll-mt-16 sm:scroll-mt-20 flex flex-col items-center">
      
      {/* Header Plate */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div 
          className={`inline-flex items-center gap-2.5 px-6 py-2.5 border-3 border-black shadow-[4px_4px_0_#000] relative ${
            isDay 
              ? 'bg-[#ea580c] text-white' 
              : 'bg-[#fec832] text-black'
          }`}
        >
          <MessageSquareCode size={18} />
          <h2 className="font-['Press_Start_2P'] text-xs sm:text-sm tracking-wider uppercase font-bold">
            CONTACT SUSHMITA
          </h2>
        </div>

        <p className={`mt-4 font-['Pixelify_Sans'] text-lg sm:text-2xl font-normal max-w-xl ${isDay ? 'text-[#fffbeb]' : 'text-[#fed7aa]'}`}>
          No automated contact forms. Direct channels only.
        </p>
      </div>

      {/* Main 3 Contact Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. LinkedIn Card */}
        <div 
          className={`border-3 sm:border-4 border-black p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000] hover:-translate-y-1 ${
            isDay ? 'bg-[#fffdfa]' : 'bg-[#1e1133]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 border-2 border-black bg-[#0a66c2] flex items-center justify-center shadow-[2px_2px_0_#000]">
                <Linkedin size={24} className="text-white" />
              </div>
              <span className={`font-['Silkscreen'] text-[10px] font-bold px-2 py-0.5 border border-black ${
                isDay ? 'bg-[#fed7aa] text-[#431407]' : 'bg-[#4a1d75] text-[#fef08a]'
              }`}>
                PREFERRED
              </span>
            </div>

            <h3 className={`font-['Press_Start_2P'] text-xs sm:text-sm mb-2 ${isDay ? 'text-[#0f172a]' : 'text-white'}`}>
              LINKEDIN
            </h3>
            
            <p className={`font-['Pixelify_Sans'] text-base mb-6 ${isDay ? 'text-[#475569]' : 'text-[#cbd5e1]'}`}>
              Connect for freelance campaigns, consulting, or full-time roles.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/sushmita-pillai/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playPixelBlip(isMuted, 'select')}
            className={`w-full py-3 px-4 font-['Press_Start_2P'] text-[10px] font-bold border-2 border-black shadow-[3px_3px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isDay
                ? 'bg-[#0a66c2] hover:bg-[#084e96] text-white'
                : 'bg-[#0284c7] hover:bg-[#0369a1] text-white'
            }`}
          >
            <span>VIEW PROFILE</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* 2. Phone Card */}
        <div 
          className={`border-3 sm:border-4 border-black p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000] hover:-translate-y-1 ${
            isDay ? 'bg-[#fffdfa]' : 'bg-[#1e1133]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 border-2 border-black bg-[#16a34a] flex items-center justify-center shadow-[2px_2px_0_#000]">
                <Phone size={24} className="text-white" />
              </div>
              <span className={`font-['Silkscreen'] text-[10px] font-bold px-2 py-0.5 border border-black ${
                isDay ? 'bg-[#dcfce7] text-[#14532d]' : 'bg-[#14532d] text-[#86efac]'
              }`}>
                CALL / WHATSAPP
              </span>
            </div>

            <h3 className={`font-['Press_Start_2P'] text-xs sm:text-sm mb-2 ${isDay ? 'text-[#0f172a]' : 'text-white'}`}>
              PHONE
            </h3>
            
            <p className={`font-['Silkscreen'] text-base sm:text-lg font-normal mb-6 tracking-wider ${isDay ? 'text-[#1e293b]' : 'text-[#fde047]'}`}>
              +91 9665515105
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="tel:9665515105"
              onClick={() => playPixelBlip(isMuted, 'select')}
              className={`w-full py-2.5 px-3 font-['Press_Start_2P'] text-[10px] font-bold border-2 border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer ${
                isDay
                  ? 'bg-[#16a34a] hover:bg-[#15803d] text-white'
                  : 'bg-[#22c55e] hover:bg-[#16a34a] text-black'
              }`}
            >
              <span>CALL NOW</span>
              <Phone size={12} />
            </a>

            <button
              onClick={() => handleCopy('9665515105', 'phone')}
              className={`w-full py-2 px-3 font-['Silkscreen'] text-xs font-bold border-2 border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer ${
                isDay ? 'bg-[#f1f5f9] hover:bg-[#e2e8f0] text-black' : 'bg-[#2d1a47] hover:bg-[#3b235e] text-white'
              }`}
            >
              {copiedItem === 'phone' ? (
                <>
                  <Check size={13} className="text-[#16a34a]" />
                  <span>NUMBER COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>COPY NUMBER</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3. Email Card */}
        <div 
          className={`border-3 sm:border-4 border-black p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-[4px_4px_0_#000] sm:shadow-[6px_6px_0_#000] hover:-translate-y-1 ${
            isDay ? 'bg-[#fffdfa]' : 'bg-[#1e1133]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 border-2 border-black bg-[#ea580c] flex items-center justify-center shadow-[2px_2px_0_#000]">
                <Mail size={24} className="text-white" />
              </div>
              <span className={`font-['Silkscreen'] text-[10px] font-bold px-2 py-0.5 border border-black ${
                isDay ? 'bg-[#ffedd5] text-[#9a3412]' : 'bg-[#431407] text-[#fed7aa]'
              }`}>
                INBOX
              </span>
            </div>

            <h3 className={`font-['Press_Start_2P'] text-xs sm:text-sm mb-2 ${isDay ? 'text-[#0f172a]' : 'text-white'}`}>
              EMAIL
            </h3>
            
            <p className={`font-['Pixelify_Sans'] text-base sm:text-lg font-normal mb-6 break-all ${isDay ? 'text-[#1e293b]' : 'text-[#fde047]'}`}>
              sushmita.kumar7@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:sushmita.kumar7@gmail.com"
              onClick={() => playPixelBlip(isMuted, 'select')}
              className={`w-full py-2.5 px-3 font-['Press_Start_2P'] text-[10px] font-bold border-2 border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 cursor-pointer ${
                isDay
                  ? 'bg-[#ea580c] hover:bg-[#c2410c] text-white'
                  : 'bg-[#fec832] hover:bg-[#ffd754] text-black'
              }`}
            >
              <span>SEND EMAIL</span>
              <Mail size={12} />
            </a>

            <button
              onClick={() => handleCopy('sushmita.kumar7@gmail.com', 'email')}
              className={`w-full py-2 px-3 font-['Silkscreen'] text-xs font-bold border-2 border-black shadow-[2px_2px_0_#000] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 cursor-pointer ${
                isDay ? 'bg-[#f1f5f9] hover:bg-[#e2e8f0] text-black' : 'bg-[#2d1a47] hover:bg-[#3b235e] text-white'
              }`}
            >
              {copiedItem === 'email' ? (
                <>
                  <Check size={13} className="text-[#16a34a]" />
                  <span>EMAIL COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>COPY ADDRESS</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
