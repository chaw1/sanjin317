import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto py-6">
        {/* 主要内容区 */}
        <div className="flex flex-row items-center justify-between">
          <span className="flex flex-row items-center space-x-4">
            <p className="text-xs text-muted-foreground">
              Made with ❤️ by{" "}
              <Link
                href="https://github.com/chaw1"
                target="_blank"
                passHref
                className="text-foreground transition hover:text-primary"
              >
                待我来看看
              </Link>
            </p>
            <hr className="hidden h-6 border-l border-muted md:flex" />
            <span className="flex hidden flex-row items-center space-x-2 md:flex">
              <p className="text-xs text-muted-foreground">Local time:</p>
              <p className="text-sm font-semibold">{time} UTC+1</p>
            </span>
          </span>
          <Link
            href="mailto:jiawei@jiawis.com"
            passHref
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            <Button variant={"outline"}>
              <MailIcon className="h-4 w-4 md:mr-2" />
              <span className="hidden md:flex">jiawei@jiawis.com</span>
            </Button>
          </Link>
        </div>

        {/* 底部信息容器 */}
        <div className="mt-8">
          {/* 地址信息（右下角） */}
          <div className="flex justify-end mb-4">
            <p className="text-xs text-muted-foreground">
              地址：苏州 / 海口 / 南京 / 杭州 / 南昌 / 天津 / 长沙
            </p>
          </div>

          {/* 白色分隔线 */}
          <div className="w-full h-px bg-white/20 mb-4" />

          {/* 备案信息（居中） */}
          <div className="text-center">
            <Link
              href="https://beian.miit.gov.cn"
              target="_blank"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              苏ICP备20240*****号-2
            </Link>
          </div>
        </div>
      </div>

      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}