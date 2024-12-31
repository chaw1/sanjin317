import { motion } from 'framer-motion';
import {
  Megaphone,
  Tv,
  Camera,
  Users,
  TrendingUp,
  Lightbulb
} from "lucide-react";

const services = [
  {
    service: "直播带货",
    description: "提供专业的直播运营服务，助力品牌提升销量，打造爆款产品。",
    Icon: Megaphone,  // 使用 Megaphone 替代 Broadcast
  },
  {
    service: "广告植入",
    description: "创意内容营销，精准投放广告，实现品牌价值最大化。",
    Icon: Tv,  // 使用 Tv 替代 ScrollText
  },
  {
    service: "视频拍摄",
    description: "专业短视频制作团队，从策划、拍摄到后期，打造优质内容。",
    Icon: Camera,  // 使用 Camera 替代 Youtube
  },
  {
    service: "艺人经纪",
    description: "全方位艺人培训与管理，助力达人快速成长，实现价值最大化。",
    Icon: Users,
  },
  {
    service: "涨粉曝光",
    description: "多平台运营策略，提升账号活跃度，实现精准涨粉。",
    Icon: TrendingUp,
  },
    {
    service: "内容策划",
    description: "专业内容团队，提供创意策划、剧本编写、内容制作全流程服务。",
    Icon: Lightbulb,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function ServicesSection() {
  return (
    <section id="services" data-scroll-section className="min-h-screen py-24">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div
        data-scroll
        data-scroll-speed=".4"
        data-scroll-position="top"
        className="relative z-10 px-4 py-24 mx-auto max-w-7xl"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="space-y-16"
        >
          {/* 标题部分 */}
          <div className="max-w-2xl">
            <motion.span
              variants={itemVariants}
              className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter"
            >
              ✨ MCN业务
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="mt-3 text-4xl font-semibold tracking-tight xl:text-5xl"
            >
              专业团队，专业服务
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base tracking-tight text-muted-foreground xl:text-lg"
            >
              以下是迈之文化目前提供的核心业务服务。如果您有任何疑问，欢迎随时联系我们。
            </motion.p>
          </div>

          {/* 服务卡片网格 */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.service}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold tracking-tight">
                    {service.service}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}