import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";

const projects = [
  {
    title: "年度庆典",
    description: "2023抖音嘉年华现场直击，展现主播们的精彩表现。",
    image: "/assets/annualmeeting.mp4",
    href: "#",
  },
  {
    title: "培训课程",
    description: "专业的主播培训课程实况，包含形象管理、表演技巧等多个方面。",
    image: "/assets/train.mp4",
    href: "#",
  },
  {
    title: "直播带货",
    description: "优秀主播的带货案例分享，展示商品带货的专业技巧和方法。",
    image: "/assets/sell.mp4",
    href: "#",
  },
  {
    title: "才艺展示",
    description: "签约主播的精彩才艺表演合集，展现多样化的艺术才能。",
    image: "/assets/stage.mp4",
    href: "#",
  },
  {
    title: "幕后花絮",
    description: "记录主播们日常训练和生活的精彩瞬间，展现真实的成长历程。",
    image: "/assets/postliveshow.mp4",
    href: "#",
  }
];

export function ProjectsSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <section id="projects" data-scroll-section className="min-h-screen py-24">
      {/* Gradient */}
      <div className="relative isolate -z-10">
        <div
          className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div data-scroll data-scroll-speed=".4" className="my-64">
        <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
          ✨ 迈之动态
        </span>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
          迈之文化精彩瞬间
        </h2>
        <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
          记录主播们的成长历程，分享精彩瞬间，展现迈之文化的蓬勃发展。
        </p>

        {/* Carousel */}
        <div className="mt-14">
          <Carousel setApi={setCarouselApi} className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.title} className="md:basis-1/2">
                  <Card id="tilt">
                    <CardHeader className="p-0">
                      <Link href={project.href} target="_blank" passHref>
                        {(project.image.endsWith('.mp4') || project.image.endsWith('.webm')) ? (
                          <video
                            src={project.image}
                            autoPlay
                            loop
                            muted
                            className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                          />
                        ) : (
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={300}
                            quality={100}
                            className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                          />
                        )}
                      </Link>
                    </CardHeader>
                    <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                      <CardTitle className="border-t border-white/5 p-4">
                        <div className="text-lg font-semibold mb-1">{project.title}</div>
                        <div className="text-sm font-normal tracking-tight text-muted-foreground">
                          {project.description}
                        </div>
                      </CardTitle>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            <span className="font-semibold">
              {current} / {count}
            </span>{" "}
            精彩回顾
          </div>
        </div>
      </div>
    </section>
  );
}