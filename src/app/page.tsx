import Image from "next/image";
import Link from "next/link";
import LogoSVG from "~/app/ui/svgs/logo";
import { ChevronRight } from "lucide-react";
import { unstable_ViewTransition as ViewTransition } from "react";
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
import { TextAnimate } from "~/app/components/magicui/text-animate";
import { HyperText } from "~/app/components/magicui/hyper-text";
import { HyperText2 } from "~/app/components/magicui/hyper-text-2";
import StaggerContainer from "~/app/motion/stagger-container";
import { projects } from "~/app/projects";
import { MotionEl } from "~/app/motion/motion-element";

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
    <ViewTransition enter={"slide-down"} exit={"exit-up"}>
      <div className="bg-m-background relative mx-auto w-full overflow-hidden p-4 sm:p-6 md:p-8">
        <div className="relative grid grid-cols-1 items-stretch justify-center gap-8 lg:grid-cols-12">
          {/* Left Column:
      - `lg:col-span-1`: On large screens, this column takes up 1 of the 3 grid units.
    */}
          <div className="w-full flex-col items-stretch justify-center gap-9 lg:col-span-5">
            <div className="text-m-text block pb-4.5 pl-16">
              <LogoSVG />
            </div>

            <div className="rounded-me-radius-card line_x_animation relative flex flex-col gap-20 p-6 lg:p-16">
              <div
                className="line_y_animation top-0 right-0"
                aria-hidden="true"
              />
              <div
                className="line_y_animation top-0 left-0"
                aria-hidden="true"
              />
              {/* <FloatDiv className=" absolute top-0 left-0 h-[1px] w-screen" /> */}
              <StaggerContainer className="flex w-full flex-col gap-2">
                <MotionEl
                  fade="in"
                  slideFrom="left"
                  as="h3"
                  className="text-m-primary font-kabel text-xs"
                >
                  Hi, my name is
                </MotionEl>
                <MotionEl
                  as="h1"
                  fade="in"
                  slideFrom="left"
                  className="text-m-text font-kabel pb-2 text-4xl"
                >
                  Ali Hassanzadeh.
                </MotionEl>
                <MotionEl
                  as="h2"
                  fade="in"
                  slideFrom="left"
                  className="text-m-muted-sub font-kabel pb-3 text-2xl"
                >
                  Full-stack Software Developer
                </MotionEl>
                <MotionEl
                  as="p"
                  fade="in"
                  slideFrom="left"
                  className="text-m-muted font-iransans text-justify"
                >
                  I am a Software Engineer with practical experience in web
                  development, windows software programs and developing
                  automated systems. My goal is to combine creative thinking and
                  design with an analytical approach to solve problems at the
                  intersection of business and technology.
                </MotionEl>
              </StaggerContainer>

              <div className="flex w-full flex-col items-center justify-center gap-2">
                <StaggerContainer className="text-m-primary font-kabel flex w-full items-center justify-between">
                  <MotionEl
                    as="h3"
                    fade="in"
                    slideFrom="left"
                    className="text-sm lg:text-xl"
                  >
                    Technologies I Use
                  </MotionEl>

                  {/* The key is adding "shrink-0" to the link to prevent it from wrapping */}
                  <MotionEl
                    as={Link}
                    fade="in"
                    slideFrom="left"
                    href={"/skills"}
                    className="border-m-primary flex items-center justify-between gap-2 border-b text-sm lg:text-base"
                  >
                    <span>See all</span>
                    <ChevronRight className="mt-1 -mr-2 size-5" />
                  </MotionEl>
                </StaggerContainer>

                <StaggerContainer className="flex w-full flex-col justify-between gap-3 lg:flex-row lg:flex-wrap">
                  {skills.map((skill, i) => {
                    return (
                      <MotionEl
                        as={Link}
                        href={skill.link ?? "#"}
                        target="blank"
                        key={i}
                        fade="in"
                        slideFrom="left"
                        blur
                        className="bg-m-dark flex flex-row items-center justify-between gap-1 rounded-xl p-5 lg:flex-col"
                      >
                        {skill.icon}
                        <span className="text-m-text"> {skill.title}</span>
                      </MotionEl>
                    );
                  })}
                </StaggerContainer>
              </div>

              <StaggerContainer className="flex w-full items-center justify-between gap-2 rounded-xl">
                <MotionEl
                  as={Link}
                  fade="in"
                  slideFrom="left"
                  href={
                    "https://www.linkedin.com/in/ali-hassanzadeh-166367165/"
                  }
                  target="blank"
                  className="bg-m-dark rounded-xl p-1"
                >
                  {" "}
                  <IconBrandLinkedin className="stroke-m-text size-7" />
                </MotionEl>
                <MotionEl
                  as={Link}
                  fade="in"
                  slideFrom="left"
                  href={"mailto:ali.hassanzadeh78@gmail.com"}
                  className="bg-m-dark flex items-center justify-center gap-2 rounded-xl px-2 py-1"
                >
                  <IconMail className="stroke-m-text size-7 fill-none" />
                  <span className="text-m-text hidden lg:block">
                    ali.hassanzadeh78@gmail.com{" "}
                  </span>
                </MotionEl>
                <MotionEl
                  as={Link}
                  fade="in"
                  slideFrom="left"
                  href={"tel:+989128045817"}
                  className="bg-m-dark flex items-center justify-center gap-2 rounded-xl px-2 py-1"
                >
                  <IconDeviceMobile className="stroke-m-text size-7 fill-none" />
                  <span className="text-m-text">+98 912 80 45 817</span>
                </MotionEl>
              </StaggerContainer>
            </div>
          </div>

          {/* Right Column:
      - `lg:col-span-2`: On large screens, this column takes up 2 of the 3 grid units.
    */}
          <div className="rounded-me-radius-card text-me-foreground flex flex-col items-center justify-between gap-4 lg:col-span-7">
            <div className="text-m-primary font-kabel bg-m-primary rounded-t-me-radius-card flex w-full items-center justify-between p-4 px-10">
              <h3 className="text-m-text flex flex-col text-3xl">
                <span>Project</span> <span>Snapshots</span>
              </h3>

              {/* The key is adding "shrink-0" to the link to prevent it from wrapping */}

              <MotionEl
                as={Link}
                href={"/skills"}
                className="border-m-text text-m-text flex items-center justify-between gap-2 border-b text-sm lg:text-base"
              >
                <span>See all</span>
                <ChevronRight className="mt-1 -mr-2 size-5" />
              </MotionEl>
            </div>

            <div className="rounded-b-me-radius-card text-m-text flex h-full w-full items-center justify-center text-2xl font-semibold">
              <StaggerContainer className="felx m-auto h-full w-full flex-col items-center justify-center p-6">
                {projects.map((project, i) => (
                  <MotionEl
                    key={i}
                    as={Link}
                    href={project.href}
                    fade="in"
                    slideFrom="top"
                    className="font-iransans hover:bg-m-light relative flex w-[calc(100%)] items-center gap-3 overflow-hidden rounded-xl p-3 text-sm outline-0"
                  >
                    <HyperText2
                      className="text-m-text inline-block font-bold"
                      duration={250}
                    >
                      {project.title}
                    </HyperText2>

                    <HyperText2
                      className="text-m-text/70 inline-block font-light"
                      duration={250}
                      delay={250}
                    >
                      {project.description}
                    </HyperText2>
                    <div className="line-anim relative shrink grow basis-0" />
                    <HyperText2
                      duration={2000}
                      by="char"
                      className="text-m-text block text-base"
                    >
                      {project.year}
                    </HyperText2>
                  </MotionEl>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}

function FloatDiv({ className }: { className: string }) {
  return <div className={cn("opacity-0", className)} />;
}
