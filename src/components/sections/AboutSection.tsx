import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
}

function Counter({ from, to, suffix = "" }: CounterProps) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const value = useMotionValue(from);
  const rounded = useTransform(value, Math.round);

  useEffect(() => {
    if (isInView) {
      // 重置值到起始点
      value.set(from);
      // 启动动画
      const controls = animate(value, to, {
        duration: 1.5,
        ease: "easeOut",
        onComplete: () => {
          setHasAnimated(true);
        }
      });

      return controls.stop;
    } else {
      setHasAnimated(false);
    }
  }, [isInView, from, to, value]);

  return (
    <motion.div ref={nodeRef} className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.div>
  );
}

const aboutStats = [
  { label: "总播放量", from: 0, to: 1000, suffix: "万+" },
  { label: "签约艺人总数", from: 0, to: 100, suffix: "+" },
  { label: "全网艺人总粉丝量", from: 0, to: 1000, suffix: "w+" }
];

export function AboutSection() {
  return (
    <section id="about" data-scroll-section className="relative">
      {/* 装饰图片 */}
      <motion.div
        className="absolute top-0 right-0 w-[50%] h-full pointer-events-none"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <img
          src="/assets/testsanjin.png"
          alt="Decorative"
          className="w-full h-full object-contain object-right"
        />
      </motion.div>

      <div
        data-scroll
        data-scroll-speed=".4"
        data-scroll-position="top"
        className="my-14 flex max-w-6xl flex-col justify-start space-y-10 relative z-10"
      >
        {/* 文字内容 - 使用最大宽度限制确保不会太宽 */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-16 pb-2 text-2xl font-light leading-normal tracking-tighter text-foreground xl:text-[36px] max-w-[91%]"
        >
          迈之文化传媒是苏州迈之文化传媒科技有限公司旗下品牌。
          苏州迈之文化传媒科技有限公司（以下简称&quot;公司&quot;）成立于2022年5月，专注全面打造主播矩阵，孵化、招募更多高质量的主播，致力于推动平台直播流量有效流转，传递IP热度，提升流量价值。
          为了建立并完善主播矩阵，公司专门组建了资深的策划、运营，以及专业的摄影剪辑团队，结合主播自身的才艺与优势能力，期以培养更多风格各异的优质主播，为直播生态创造源源不断的新鲜感，IP热度无限传递。
          公司创始人之一三斤（抖音号：Tx0317），从事互联网事业已超3年，为抖音唱歌头部主播之一，全平台粉丝总量超800万，2024抖音年度嘉年华赛事苏州和江苏双第一。公司自经营公会起，已签约主播达人百余人，已成功打造万人、千人主播数十人，线下主播成材率90%以上。
        </motion.h2>

        {/* 数字统计 */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-2 gap-8 xl:grid-cols-3"
        >
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center xl:items-start xl:text-start"
            >
              <Counter from={stat.from} to={stat.to} suffix={stat.suffix} />
              <span className="tracking-tight text-muted-foreground xl:text-lg">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}