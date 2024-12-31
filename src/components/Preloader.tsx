import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Container.module.css";

const words = [
  "欢迎来到，迈之文化",
  "你好",
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 检测设备类型
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      // 移动端使用稍小的高度，避免溢出
      setDimension({
        width: window.innerWidth,
        height: isMobileDevice ? window.innerHeight * 0.9 : window.innerHeight,
      });
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      // 移动端加快切换速度
      index == 0 ? (isMobile ? 800 : 1000) : (isMobile ? 100 : 150),
    );
  }, [index, isMobile]);

  // 移动端使用更温和的曲线
  const initialPath = `M0 0 
    L${dimension.width} 0 
    L${dimension.width} ${dimension.height} 
    Q${dimension.width / 2} ${dimension.height + (isMobile ? 150 : 300)} 
    0 ${dimension.height}  
    L0 0`;

  const targetPath = `M0 0 
    L${dimension.width} 0 
    L${dimension.width} ${dimension.height} 
    Q${dimension.width / 2} ${dimension.height} 
    0 ${dimension.height}  
    L0 0`;

  // 调整动画时间和缓动
  const curve = {
    initial: {
      d: initialPath,
      transition: {
        duration: isMobile ? 0.5 : 0.7,
        ease: [0.76, 0, 0.24, 1]
      },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: isMobile ? 0.5 : 0.7,
        ease: [0.76, 0, 0.24, 1],
        delay: isMobile ? 0.2 : 0.3
      },
    },
  };

  // 优化透明度动画
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: isMobile ? 0.85 : 0.75,  // 移动端稍微提高对比度
      transition: {
        duration: isMobile ? 0.8 : 1,
        delay: isMobile ? 0.1 : 0.2
      },
    },
  };

  // 优化滑动动画
  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: isMobile ? 0.1 : 0.2
      },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={`${styles.introduction} ${isMobile ? 'text-sm' : ''}`}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className={`
              ${isMobile ? 'text-base md:text-lg' : 'text-lg md:text-xl'}
              px-4 md:px-0
            `}
          >
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}