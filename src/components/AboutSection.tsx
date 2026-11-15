import React from 'react';
import { FadeUp } from './animations/ScrollReveal';
import { AchievementsSection } from './AchievementsSection';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 border-t border-[#24262B] bg-[#101114]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Index & Title */}
        <FadeUp distance={20} duration={0.7}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C5FA59] font-bold">01</span>
            <span className="text-xs font-mono text-[#A7AAB0] uppercase tracking-widest">ABOUT ME</span>
          </div>
        </FadeUp>

        {/* Section Headline & Self-Introduction */}
        <FadeUp delay={0.1} distance={30} duration={0.8}>
          <div className="mb-14 space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider block">
              VISUAL DESIGNER · KWON YUDAM (권유담)
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F4F0] font-['Space_Grotesk']">
              BEYOND THE VISUALS.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#F5F4F0] font-normal leading-[1.7] break-keep pt-2">
              게임과 디자인, 두 분야를 공부하며 아이디어를 다양한 시각적 표현으로 발전시켜 왔습니다.<br className="hidden md:inline" />{' '}
              새로운 제작 방식을 탐색하고 반복적으로 수정하며, 하나의 콘셉트를 일관된 비주얼로 완성하는 과정을 중요하게 생각합니다.
            </p>
          </div>
        </FadeUp>

        {/* Three-Column Information Grid: Education, Expertise, Tools with staggered FadeUp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#24262B]">
          {/* Card 1: Education */}
          <FadeUp delay={0.1} distance={30} duration={0.8}>
            <div className="h-full p-6 md:p-8 rounded-xl bg-[#24262B]/40 border border-[#2B2F38] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider mb-4">
                  01. 학력
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F4F0] font-['Space_Grotesk'] mb-6">
                  순천향대학교
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#2D313B]">
                    <span className="text-[#F5F4F0] font-medium text-base">메타버스&게임학과</span>
                    <span className="text-xs font-mono text-[#C5FA59] font-bold">주전공</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[#F5F4F0] font-medium text-base">컨버전스디자인학과</span>
                    <span className="text-xs font-mono text-[#A7AAB0] font-semibold">복수전공</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Card 2: Expertise */}
          <FadeUp delay={0.2} distance={30} duration={0.8}>
            <div className="h-full p-6 md:p-8 rounded-xl bg-[#24262B]/40 border border-[#2B2F38] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider mb-4">
                  02. 핵심 역량
                </div>
                <div className="space-y-3.5 text-sm">
                  <div className="pb-3 border-b border-[#2D313B]">
                    <div className="text-[#F5F4F0] font-medium text-sm">
                      01. 비주얼 콘셉트 기획
                    </div>
                    <p className="text-xs text-[#8E939E] mt-1 break-keep">
                      게임 세계관 및 아트 스타일 방향성 설정
                    </p>
                  </div>

                  <div className="pb-3 border-b border-[#2D313B]">
                    <div className="text-[#F5F4F0] font-medium text-sm">
                      02. AI 기반 이미지 제작
                    </div>
                    <p className="text-xs text-[#8E939E] mt-1 break-keep">
                      생성형 AI를 활용한 캐릭터·배경·장면 이미지 제작
                    </p>
                  </div>

                  <div className="pb-3 border-b border-[#2D313B]">
                    <div className="text-[#F5F4F0] font-medium text-sm">
                      03. 그래픽 디자인
                    </div>
                    <p className="text-xs text-[#8E939E] mt-1 break-keep">
                      게임 로고, 포스터, 타이포그래피 및 그래픽 편집
                    </p>
                  </div>

                  <div className="pt-0.5">
                    <div className="text-[#F5F4F0] font-medium text-sm">
                      04. 게임 비주얼 리소스
                    </div>
                    <p className="text-xs text-[#8E939E] mt-1 break-keep">
                      게임에 활용할 시각적 에셋 제작 및 보정
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Card 3: Tools */}
          <FadeUp delay={0.3} distance={30} duration={0.8}>
            <div className="h-full p-6 md:p-8 rounded-xl bg-[#24262B]/40 border border-[#2B2F38] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#C5FA59] uppercase tracking-wider mb-4">
                  03. 제작 도구
                </div>
                <div className="space-y-3 text-sm">
                  <div className="pb-2.5 border-b border-[#2D313B]">
                    <div className="text-[#F5F4F0] font-medium text-sm">Adobe Photoshop</div>
                    <p className="text-xs text-[#8E939E] mt-0.5 break-keep">
                      이미지 합성, 색감 보정 및 그래픽 편집
                    </p>
                  </div>

                  <div className="pb-2.5 border-b border-[#2D313B]">
                    <div className="text-[#F5F4F0] font-medium text-sm">Adobe Illustrator</div>
                    <p className="text-xs text-[#8E939E] mt-0.5 break-keep">
                      로고, 타이포그래피 및 벡터 그래픽
                    </p>
                  </div>

                  <div className="pb-2.5 border-b border-[#2D313B]">
                    <div className="text-[#F5F4F0] font-medium text-sm">Figma</div>
                    <p className="text-xs text-[#8E939E] mt-0.5 break-keep">
                      화면 레이아웃 및 UI 프로토타입
                    </p>
                  </div>

                  <div className="pb-2.5 border-b border-[#2D313B]">
                    <div className="text-[#F5F4F0] font-medium text-sm">Unity</div>
                    <p className="text-xs text-[#8E939E] mt-0.5 break-keep">
                      게임 에셋 배치 및 UI 구성
                    </p>
                  </div>

                  <div className="pt-0.5">
                    <div className="text-[#F5F4F0] font-medium text-sm">Generative AI</div>
                    <p className="text-xs text-[#8E939E] mt-0.5 break-keep">
                      이미지 생성, 비주얼 스타일 탐색 및 수정
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* 04 / ACHIEVEMENTS Sub-section */}
        <AchievementsSection />
      </div>
    </section>
  );
};
