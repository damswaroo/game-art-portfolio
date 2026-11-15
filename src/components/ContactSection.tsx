import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';
import { FadeUp } from './animations/ScrollReveal';

interface Props {
  onScrollToTop: () => void;
}

export const ContactSection: React.FC<Props> = ({ onScrollToTop }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(designerProfile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-[#24262B] bg-[#101114]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Index */}
        <FadeUp distance={20} duration={0.7}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C5FA59] font-bold">03</span>
            <span className="text-xs font-mono text-[#A7AAB0] uppercase tracking-widest">GET IN TOUCH</span>
          </div>
        </FadeUp>

        {/* Headline & Subtitle */}
        <div className="max-w-3xl mb-16 space-y-4">
          <FadeUp delay={0.1} distance={30} duration={0.8}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F5F4F0] font-['Space_Grotesk']">
              LET'S BUILD<br />SOMETHING NEW.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15} distance={20} duration={0.75}>
            <p className="text-lg md:text-xl text-[#A7AAB0]">
              새로운 세계와 경험을 함께 만들어 가고 싶습니다.
            </p>
          </FadeUp>
        </div>

        {/* Primary Email Card */}
        <div className="max-w-2xl">
          <FadeUp delay={0.1} distance={30} duration={0.8}>
            <div className="p-6 md:p-8 rounded-xl bg-[#17191E] border border-[#2B2F38] space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#A7AAB0]">
                  <span className="text-[#C5FA59] uppercase">PRIMARY INQUIRY · 권유담</span>
                  <span>DIRECT EMAIL</span>
                </div>
                <div className="text-lg sm:text-2xl font-bold text-[#F5F4F0] font-mono break-all">
                  {designerProfile.contact.email}
                </div>
                <p className="text-xs md:text-sm text-[#A7AAB0] leading-relaxed">
                  채용 문의 및 커피챗 제안 환영합니다.
                </p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#24262B] hover:bg-[#2D3036] text-[#F5F4F0] text-xs font-mono border border-[#3A404D] transition-colors w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#C5FA59]" />
                    <span className="text-[#C5FA59]">이메일 주소 복사됨!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>이메일 주소 복사하기</span>
                  </>
                )}
              </button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
