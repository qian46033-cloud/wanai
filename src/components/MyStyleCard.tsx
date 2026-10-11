import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ORIGINAL_PROFILE_DATA } from '../data/profileData';

interface MyStyleCardProps {
  onNext: () => void;
  onPrev: () => void;
}

export const MyStyleCard: React.FC<MyStyleCardProps> = ({ onNext, onPrev }) => {
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
          <span>BACK / 返回个人信息</span>
        </button>

        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 font-light">
          STEP 03 / 04 · MUST-READ
        </span>
      </div>

      {/* Main Slide Card: Clean Editorial Layout with Staggered Left/Right Text Alignments */}
      <div className="bg-white dark:bg-[#121316] rounded-xl border border-neutral-300/70 dark:border-neutral-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-colors duration-200 p-6 sm:p-8">
        {/* Slide Header */}
        <div className="pb-4 border-b border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
              PAGE 03 · GUIDELINES
            </span>
            <h1 className="text-lg sm:text-xl font-normal text-neutral-900 dark:text-white tracking-wider uppercase font-serif">
              单前必读
            </h1>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 uppercase">
            NOTICE
          </span>
        </div>

        {/* Content Body: Alternating Right/Left Text Blocks */}
        <div className="py-6 space-y-6">
          {/* Block 1 (向右靠齐) */}
          <div className="text-right space-y-2 text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-light">
            <p className="font-medium text-neutral-900 dark:text-white">
              *任何单薄的风格都无法框定我
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 font-mono text-xs">
              /拒绝道听途说 请自己来认识在你面前的我
            </p>
            <p>
              *请拉低期待值，如果你我不认识但你指定我，不接受差评、客诉、换人
            </p>
            <p>
              *我会认真对待每一单，所以也请你务必认真阅读须知、自行避雷、不敷衍我，如果你点我病只是想随便玩玩，请提前声明，如果你随便玩玩还想要我认真对待，须额外加价
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs font-mono">
              *默认可以单内截图，码掉名字发至平台大多时候需提前根据排单表约时间，太忙的时候可能会忘记小群主动约时间，可以安特提醒我TT
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 dark:border-neutral-800/80"></div>

          {/* Block 2 (向左靠近) */}
          <div className="text-left space-y-1.5 text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-light">
            <p className="font-medium text-neutral-900 dark:text-white">
              打字中速，不接受以字速压人
            </p>
            <p className="font-serif italic text-neutral-600 dark:text-neutral-400">
              很期待你与我擦出不一样的火花 而非一根火柴的自燃/
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 dark:border-neutral-800/80"></div>

          {/* Block 3 (向右靠齐) */}
          <div className="text-right space-y-2 text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-light">
            <p className="font-medium text-neutral-900 dark:text-white">
              #直拒把小圈训狗那套用我身上
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              莫名其妙对我上位/高高在上强压/审视态度
            </p>
            <p>
              #婉拒三心二意、自身代入低、未提前告知纯找乐子的板，什么单干什么样的事，希望你能分清不同单的区别以及单内外，请勿提及单外任何破坏代入感
            </p>
            <p>
              #婉拒各种形式的披马甲（我知道的可以），特指恶崽点单
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 font-mono text-xs">
              不拒同行，但拒同事，点过我、我认识的除外
            </p>
            <p>
              #婉拒极端回避型（问任何问题都不回答都逃避），对于这类性格只会理智低无剖析，大多数情况下也无法调情，
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 dark:border-neutral-800/80"></div>

          {/* Block 4 (向左靠齐) */}
          <div className="text-left space-y-1.5 text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-light">
            <p className="font-medium text-neutral-900 dark:text-white">
              #拒绝各种形式的一陪多、多陪一
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              若需要添加旁观 视情况而定 切勿忘记提前询问
            </p>
            <p className="font-serif italic text-neutral-600 dark:text-neutral-400">
              我希望这是只属于我们两个人的时间/
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 dark:border-neutral-800/80"></div>

          {/* Block 5 (向右靠齐) */}
          <div className="text-right space-y-1.5 text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-light">
            <p className="font-medium text-neutral-900 dark:text-white">
              #戏谑、讥讽、调侃、逗弄为概率出现的常态化元素
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              在正常情况下我并非带有恶意，请不要误解歪曲我的本意
            </p>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              /你可以当成是我的劣性或傲娇。
            </p>
          </div>
        </div>

        {/* PPT Dotted Rule with Solid Marker (Matching Image 1) */}
        <div className="my-5 relative flex items-center justify-center">
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
            <span className="font-mono tracking-widest text-xs">PROCEED TO CATEGORIES</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
