import styles from "@/styles/Home.module.css";
import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const tags = ['短视频', '直播', 'MCN'];

const handleScroll = () => {
  const element = document.querySelector("#about");
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function HeroSection({ isScrolled }: { isScrolled: boolean }) {
  return (
      <section
          id="home"
          data-scroll-section
          className="relative mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
      >
        <div className={cn(styles.intro, "relative z-10")}>
          {/* 背景装饰 */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"/>
          <div className="absolute right-0 top-40 h-60 w-60 rounded-full bg-purple-500/5 blur-3xl"/>

          {/* 标签部分 */}
          <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="relative flex flex-row items-center gap-3"
          >
            {tags.map((tag, index) => (
                <motion.span
                    key={tag}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: index * 0.1}}
                    className={cn(styles.pill, "backdrop-blur-sm")}
                >
                  {tag}
                </motion.span>
            ))}
          </div>

          {/* 标题部分 */}
          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.3}}
              className="relative"
          >
            <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
                className="relative"
            >
            <span className="mb-2 block text-7xl font-bold tracking-tighter text-foreground 2xl:text-8xl">
              迈之文化
            </span>
              <span
                  className="block bg-gradient-to-r from-primary via-purple-400 to-blue-500 bg-clip-text text-8xl font-bold tracking-tight text-transparent">
              三斤 317
            </span>
            </h1>

            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5}}
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="relative mt-6 max-w-lg text-xl tracking-tight text-muted-foreground"
            >
              专注于短视频内容创作与直播运营的新媒体文化公司，
              致力于打造全方位的网红孵化与商业变现平台。
            </motion.p>
          </motion.div>

          {/* 按钮组 */}
          <motion.span
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.7}}
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="relative flex flex-row items-center space-x-6 pt-8"
          >
            <Link href="#contact" passHref>
              <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                <Button className="bg-gradient-to-r from-primary to-purple-500 px-8 py-6 text-lg text-white">
                  联系我们 <ChevronRight className="ml-2 h-5 w-5"/>
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
              <Button
                  variant="outline"
                  onClick={handleScroll}
                  className="border-white/10 px-8 py-6 text-lg hover:bg-white/5"
              >
                了解更多
              </Button>
            </motion.div>
          </motion.span>
        </div>

        {/* 3D 模型部分 */}
        <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1}}
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="relative mt-14 h-full w-full xl:mt-0"
        >
          <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent"/>
          <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  <div className="animate-pulse text-primary/40">Loading...</div>
                </div>
              }
          >
            <Spline scene="/assets/scene.splinecode"/>
          </Suspense>
        </motion.div>

        {/* 把滚动提示移到这里，section的直接子元素 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className={cn(
              "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center",
              isScrolled && "pointer-events-none opacity-0",
              "z-10 font-medium text-primary/60"
            )}
          >
            <span className="text-sm">滑动解锁更多内容 🔓</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <TriangleDownIcon className="h-6 w-6" />
            </motion.div>
          </motion.div>
      </section>
  );
}