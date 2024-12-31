import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { AutoplayType } from 'embla-carousel-autoplay';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const carouselItems = [
  {
    title: "DISCOVER",
    subtitle: "发掘你的无限可能",
    mainText: "才艺展示",
    cornerText: "唱跳全能",
    image: "/assets/test1.gif"
  },
  {
    title: "SHINE",
    subtitle: "闪耀属于你的舞台",
    mainText: "个性主播",
    cornerText: "独特魅力",
    image: "/assets/test2.gif"
  },
  {
    title: "GROW",
    subtitle: "与平台共同成长",
    mainText: "专业培训",
    cornerText: "快速进阶",
    image: "/assets/test5.gif"
  },
  {
    title: "CHANGE",
    subtitle: "蜕变成为更好的自己",
    mainText: "形象升级",
    cornerText: "实力蜕变",
    image: "/assets/test4.gif"
  },
  {
    title: "CREATE",
    subtitle: "创造独特的个人品牌",
    mainText: "品牌打造",
    cornerText: "价值提升",
    image: "/assets/test3.gif"
  },
  {
    title: "ACHIEVE",
    subtitle: "实现你的直播梦想",
    mainText: "梦想加速",
    cornerText: "全力支持",
    image: "/assets/test6.gif"
  },
  {
    title: "CONNECT",
    subtitle: "链接千万粉丝",
    mainText: "流量扶持",
    cornerText: "资源共享",
    image: "/assets/test7.gif"
  },
  {
    title: "WIN",
    subtitle: "成就网红之路",
    mainText: "商业变现",
    cornerText: "收益倍增",
    image: "/assets/test8.gif"  // 记得添加第八张图片
  }
];

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const autoplay = React.useRef<AutoplayType>(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    api.on("scroll", () => {
      const progress = Math.max(0, Math.min(1, api.scrollProgress() || 0));
      setScrollProgress(progress * 100);
    });
  }, [api]);

  return (
    <div className="w-full bg-black">
      <Carousel
        opts={{
          align: "start",
          loop: false,
          dragFree: true,
        }}
        plugins={[autoplay.current]}
        setApi={setApi}
        className="w-full max-w-screen-2xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full lg:basis-1/2 xl:basis-2/5"
            >
              <div className="relative h-[55vh] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 text-white">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {item.mainText}
                  </h3>
                  <p className="text-sm opacity-80 mt-1">
                    {item.title}
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 text-white text-right">
                  <p className="text-xl font-medium tracking-tight">
                    {item.cornerText}
                  </p>
                  <p className="text-sm opacity-80 mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Progress Bar */}
        <div className="mt-4 mx-auto w-3/4 md:w-1/2">
          <div className="h-1.5 w-full bg-white/10 rounded-full">
            <div
              className="h-full bg-white/50 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-2 mt-2 pb-4">
          <CarouselPrevious className="bg-white/20 hover:bg-white/30 p-2 rounded" />
          <CarouselNext className="bg-white/20 hover:bg-white/30 p-2 rounded" />
        </div>
      </Carousel>
    </div>
  );
}