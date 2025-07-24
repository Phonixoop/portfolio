import Image from "next/image";
import Link from "next/link";
import LogoSVG from "~/app/ui/svgs/logo";
import { ChevronRight } from "lucide-react";
import {
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
  IconBrandNextjs,
  IconDeviceMobile,
  IconMail,
  IconRecordMail,
} from "@tabler/icons-react";
import BrandNextjs from "~/app/ui/svgs/brands/nextjs";
import BrandReactjs from "~/app/ui/svgs/brands/reactjs";
import BrandTailwind from "~/app/ui/svgs/brands/tailwind";
import BrandCSharp from "~/app/ui/svgs/brands/csharp";
import BrandSocketIO from "~/app/ui/svgs/brands/socketio";
import { cn } from "~/lib/utils";

const skills = [
  {
    title: "Next.js",
    link: "https://nextjs.org/",
    icon: <BrandNextjs />,
  },
  {
    title: "React.js",
    link: "https://react.dev/",
    icon: <BrandReactjs />,
  },
  {
    title: "Tailwind css",
    link: "https://tailwindcss.com/",
    icon: <BrandTailwind />,
  },
  {
    title: "C sharp",
    link: "https://dotnet.microsoft.com/en-us/languages/csharp",
    icon: <BrandCSharp />,
  },
  {
    title: "Socket",
    link: "https://socket.io/",
    icon: <BrandSocketIO />,
  },
];
export default async function Home() {
  return (
    <div className="bg-m-background relative mx-auto w-full overflow-hidden p-4 sm:p-6 md:p-8">
      <div className="relative grid grid-cols-1 items-stretch justify-center gap-8 lg:grid-cols-12">
        {/* Left Column:
      - `lg:col-span-1`: On large screens, this column takes up 1 of the 3 grid units.
    */}
        <div className="flex w-full flex-col items-stretch justify-center gap-9 lg:col-span-5">
          <header className="pl-16">
            <LogoSVG />
          </header>

          <div className="rounded-me-radius-card bg-m-dark relative flex flex-col gap-20 p-16">
            <FloatDiv className="line_width_animation_215 via-m-text absolute top-0 left-0 h-[1px] w-screen bg-gradient-to-r from-transparent to-transparent" />
            <div className="flex w-full flex-col gap-2">
              <h3 className="text-m-primary font-kabel text-xs">
                Hi, my name is
              </h3>
              <h1 className="text-m-text font-kabel pb-2 text-4xl">
                Ali Hassanzadeh.
              </h1>
              <h2 className="text-m-muted-sub font-kabel pb-3 text-2xl">
                Full-stack Software Developer
              </h2>
              <p className="text-m-muted font-iransans text-justify">
                I am a Software Engineer with practical experience in web
                development, windows software programs and developing automated
                systems. My goal is to combine creative thinking and design with
                an analytical approach to solve problems at the intersection of
                business and technology.
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-2">
              <div className="text-m-primary font-kabel flex w-full items-center justify-between">
                <h3 className="text-xl">Technologies I Use</h3>

                {/* The key is adding "shrink-0" to the link to prevent it from wrapping */}
                <Link
                  href={"/skills"}
                  className="border-m-primary flex items-center justify-between gap-2 border-b"
                >
                  <span>See all</span>
                  <ChevronRight className="mt-1 -mr-1 size-4" />
                </Link>
              </div>

              <div className="flex w-full flex-wrap justify-between gap-3">
                {skills.map((skill, i) => {
                  return (
                    <Link
                      href={skill.link ?? "#"}
                      target="blank"
                      key={i}
                      className="bg-m-light flex flex-col items-center justify-between gap-1 rounded-xl p-5"
                    >
                      {skill.icon}
                      <span className="text-m-text"> {skill.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex w-full items-center justify-between">
              <Link
                href={"https://www.linkedin.com/in/ali-hassanzadeh-166367165/"}
                target="blank"
                className="bg-m-light rounded-xl p-1"
              >
                {" "}
                <IconBrandLinkedin className="stroke-m-text size-7" />
              </Link>
              <div className="flex items-center justify-center gap-2">
                <IconMail className="stroke-m-text size-7 fill-none" />
                <span className="text-m-text">
                  ali.hassanzadeh78@gmail.com{" "}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <IconDeviceMobile className="stroke-m-text size-7 fill-none" />
                <span className="text-m-text">+98 912 80 45 817</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column:
      - `lg:col-span-2`: On large screens, this column takes up 2 of the 3 grid units.
    */}
        <div className="rounded-me-radius-card text-me-foreground flex flex-col items-center justify-between gap-4 lg:col-span-7">
          <div className="text-m-primary font-kabel bg-m-primary rounded-t-me-radius-card justify-betweenp flex w-full items-center p-4 px-10">
            <h3 className="text-m-text flex flex-col text-3xl">
              <span>Project</span> <span>Snapshots</span>
            </h3>

            {/* The key is adding "shrink-0" to the link to prevent it from wrapping */}
            <Link
              href={"/skills"}
              className="border-m-text text-m-text flex items-center justify-between gap-2 border-b"
            >
              <span>See all</span>
              <ChevronRight className="mt-1 -mr-1 size-4" />
            </Link>
          </div>

          <div className="bg-m-dark rounded-b-me-radius-card h-full w-full p-6 text-2xl font-semibold">
            Right Column
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatDiv({ className }: { className: string }) {
  return <div className={cn("opacity-0", className)} />;
}
