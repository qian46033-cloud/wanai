import React from 'react';
import { ArrowLeft, ArrowRight, Shirt, Clock, ShieldCheck } from 'lucide-react';
import { ORIGINAL_PROFILE_DATA } from '../data/profileData';

interface PersonalInfoCardProps {
  onNext: () => void;
  onPrev: () => void;
  onImageClick: (url: string, caption: string) => void;
}

export const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({
  onNext,
  onPrev,
  onImageClick,
}) => {
  const data = ORIGINAL_PROFILE_DATA;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 animate-fade-in space-y-4 font-light">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onPrev}
          className="flex items-center gap-1.5 text-xs font-mono font-light text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-300/80 dark:border-neutral-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK / 返回欢迎页</span>
        </button>

        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 font-light">
          STEP 02 / 04 · PERSONAL INFO
        </span>
      </div>

      {/* Main Slide Card: Multi-Column Resume/Profile Layout matching Image 2 */}
      <div className="bg-white dark:bg-[#121316] rounded-xl border border-neutral-300/70 dark:border-neutral-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-colors duration-200 p-6 sm:p-8">
        {/* Slide Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
              PAGE 02 · PROFILE
            </span>
            <h1 className="text-lg sm:text-xl font-normal text-neutral-900 dark:text-white tracking-wider uppercase font-serif">
              PERSONAL INFORMATION
            </h1>
          </div>
        </div>

        {/* Content Body: Asymmetric Grid with Left Profile Card & Right Dossier Blocks */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Column A: Left Profile & Stamp (4 cols) - (光遇品级体型身高所属星域已删) */}
          <div className="md:col-span-4 p-5 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/80 dark:border-neutral-700/60 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {/* Subtle small stamp avatar */}
                <div
                  className="w-14 h-14 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 shrink-0 cursor-pointer bg-white"
                  onClick={() => onImageClick(data.avatarUrl, 'White lily avatar')}
                >
                  <img
                    src={data.avatarUrl}
                    alt={data.nickname}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span
                      style={{ fontFamily: '"SimSun", "Songti SC", "STSong", "Noto Serif SC", serif' }}
                      className="font-normal text-neutral-900 dark:text-white text-base tracking-wide"
                    >
                      {data.nickname}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-0.5 tracking-wider">
                    STATUS: AVAILABLE
                  </p>
                  <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                    {data.handle}
                  </span>
                </div>
              </div>

              {/* Identity statement */}
              <div className="p-3 rounded bg-white/80 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 text-[11px] font-mono text-neutral-600 dark:text-neutral-300 leading-relaxed">
                26 LeT 土象金牛 ISTJ/INFJ 中御。
              </div>
            </div>
          </div>

          {/* Column B: Right Structured Text Columns (8 cols) */}
          <div className="md:col-span-8 flex flex-col justify-center space-y-3">
            <div className="space-y-3 text-left">
              {/* 可取单时间与自带价说明模块 (无边框) */}
              <div className="p-2 sm:p-3 text-xs space-y-2">
                <div className="font-mono text-neutral-900 dark:text-white font-medium pb-1">
                  {data.orderTerms.availableTime}
                </div>

                <div className="font-mono text-neutral-600 dark:text-neutral-400 text-[11px] leading-relaxed">
                  {data.orderTerms.guarantee}
                </div>

                <div className="font-mono text-neutral-800 dark:text-neutral-200 text-[11px] font-medium pt-1">
                  {data.orderTerms.pricingTitle}
                </div>

                <div className="space-y-1.5 font-mono text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed pl-1">
                  {data.orderTerms.rates.map((rateLine, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-neutral-400">·</span>
                      <span>{rateLine}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* OUTFITS / 常驻装扮 - 紧凑更小更精致 */}
              <div className="py-2 px-3 rounded-lg border border-neutral-200/70 dark:border-neutral-800/80 bg-neutral-50/40 dark:bg-neutral-800/20 text-xs">
                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 dark:text-neutral-400 mb-1">
                  <div className="flex items-center gap-1.5">
                    <Shirt className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                    <span className="tracking-wider uppercase">OUTFITS / 常驻装扮</span>
                  </div>
                  <span className="text-[9px] text-neutral-400 font-mono">ICONIC</span>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 font-mono pl-5 text-xs">
                  {data.skyStats.usualOutfits}
                </p>
              </div>

              {/* (在线时间已删除) */}
            </div>
          </div>
        </div>

        {/* Editorial Poetic Quote Block - (位置处于上面板块和底部横线正中间，字号缩小，居中淡色) */}
        <div className="py-3 sm:py-4 text-center">
          <p className="text-[11px] font-serif leading-relaxed text-neutral-400 dark:text-neutral-500 italic tracking-wider">
            “{data.step2Quote[0]}
            <br />
            {data.step2Quote[1]}”
          </p>
        </div>

        {/* PPT Dotted Rule with Solid Marker (Matching Image 1) */}
        <div className="my-4 relative flex items-center justify-center">
          <div className="w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"></div>
          <div className="absolute w-12 h-1 bg-neutral-900 dark:bg-white rounded-full"></div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="pt-1 flex items-center justify-between">
          <button
            onClick={onPrev}
            className="flex items-center gap-1 text-xs font-mono font-light text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>PREV</span>
          </button>

          <button
            onClick={onNext}
            className="px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-light text-xs flex items-center gap-1.5 transition-all cursor-pointer group active:scale-[0.98]"
          >
            <span className="font-mono tracking-widest text-xs">PROCEED / 单前必读</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
