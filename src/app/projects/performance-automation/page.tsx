"use client";
import thumbnail from "./thumbnail.png";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Heart, Eye, Share2, ArrowRight, ChevronRight } from "lucide-react";
import { Card, CardContent } from "~/app/components/shadcn/card";
import { getReadingTime } from "~/helpers/calculate-reading-time";
import { cn } from "~/lib/utils";
import { blogPost } from "~/app/projects/performance-automation/post";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function FutureTechBlog() {
  const [showFullBlog, setShowFullBlog] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Show only first 3 sections initially
  const visibleSections = showFullBlog
    ? blogPost.sections
    : blogPost.sections.slice(0, 3);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = blogPost.sections.map((section) => section.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Format markdown-like content to JSX
  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-m-foreground mb-4 text-3xl font-bold">
            {line.slice(2)}
          </h1>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-m-text mt-8 mb-4 text-2xl font-bold">
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-m-text mt-6 mb-3 text-xl font-semibold"
          >
            {line.slice(4)}
          </h3>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-m-muted-sub mb-2 ml-4">
            {line.slice(2)}
          </li>
        );
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote
            key={index}
            className="border-primary text-m-text-muted my-4 border-l-4 pl-4 italic"
          >
            {line.slice(2)}
          </blockquote>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }

      // Handle bold and italic text
      const formattedLine = line
        .replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-custom-title font-semibold">$1</strong>',
        )
        .replace(
          /_(.*?)_/g,
          '<em class="italic text-custom-secondary">$1</em>',
        );

      return (
        <p
          key={index}
          className="text-m-foreground mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });
  };

  return (
    <ViewTransition enter={"slide-up"} exit={"exit-down"}>
      <div className="bg-m-background text-m-text min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <Image
            src={thumbnail}
            alt="Automation Dashboard Technology"
            fill
            className="object-cover"
          />

          <div className="bg-m-background/50 absolute inset-0"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl px-4 text-center">
              <h1 className="text-m-text mb-4 text-4xl font-bold md:text-6xl">
                {blogPost.title}
              </h1>
            </div>
          </div>

          <div className="from-m-background absolute bottom-0 h-full w-full bg-gradient-to-t to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Article Content */}
            <div className="relative lg:col-span-2">
              {/* Article Stats */}
              <div className="mb-8 flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Heart className="text-custom-primary h-4 w-4" />
                  <span>24.5k</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>5k</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Share2 className="h-4 w-4" />
                  <span>70k</span>
                </div>
              </div>

              {/* Blog Sections */}
              {visibleSections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12">
                  <div className="prose prose-invert max-w-none">
                    {formatContent(section.content)}
                  </div>
                </section>
              ))}

              {/* Read Full Blog Button */}
              {!showFullBlog && (
                <div
                  aria-hidden={true}
                  className="from-m-background absolute bottom-0 z-0 flex h-1/2 w-full items-end justify-center bg-gradient-to-t to-transparent select-none"
                >
                  <button
                    onClick={() => setShowFullBlog(true)}
                    className="bg-primary hover:bg-m-dark border-m-dark text-m-text flex h-auto cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-8 py-3 font-medium transition-all duration-300"
                  >
                    <span> Read Full Blog</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-custom-lighter mb-8 rounded-lg p-6">
                <div className="mb-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-m-text-muted mb-2 text-sm">
                      Reading Time
                    </h4>
                    <p className="text-m-text">
                      {getReadingTime(blogPost)} Min
                    </p>
                  </div>
                  <div>
                    <h4 className="text-m-text-muted mb-2 text-sm">
                      Publication Date
                    </h4>
                    <p className="text-m-text">
                      {new Date(blogPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="mb-3 text-sm text-gray-400">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-m-secondary border-custom-secondary/30 rounded-full border px-3 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-m-dark sticky top-4 rounded-lg p-6">
                <h3 className="text-custom-title mb-4 text-lg font-semibold">
                  Table of Contents
                </h3>
                <ul className="space-y-3 pl-6">
                  {blogPost.sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={cn(
                          `hover:text-custom-primary w-full cursor-pointer text-left transition-colors`,
                          activeSection === section.id
                            ? "text-m-primary font-medium"
                            : "text-m-text",
                        )}
                      >
                        • {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Similar News Section */}
        {/* <section className="bg-custom-darker py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-custom-title text-3xl font-bold">
              Similar News
            </h2>
            <button className="text-custom-primary hover:text-custom-primary/80">
              View All News <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="bg-custom-lighter overflow-hidden border-0">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Automation Technology"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-custom-secondary mb-2 text-sm">
                  Technology
                </div>
                <h3 className="mb-4 text-lg font-semibold text-m-text ">
                  Building Scalable Automation Systems
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Heart className="mr-1 h-4 w-4" /> 2.3k
                    </span>
                    <span className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" /> 60
                    </span>
                  </div>
                  <button className="text-custom-primary hover:text-custom-primary/80 p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-custom-lighter overflow-hidden border-0">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Dashboard Analytics"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-custom-secondary mb-2 text-sm">
                  Analytics
                </div>
                <h3 className="mb-4 text-lg font-semibold text-m-text ">
                  Next.js Dashboard Best Practices
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Heart className="mr-1 h-4 w-4" /> 6k
                    </span>
                    <span className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" /> 92
                    </span>
                  </div>
                  <button className="text-custom-primary hover:text-custom-primary/80 p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-custom-lighter overflow-hidden border-0">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Web Scraping Selenium"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-custom-secondary mb-2 text-sm">
                  Development
                </div>
                <h3 className="mb-4 text-lg font-semibold text-m-text ">
                  Advanced Web Scraping Techniques
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Heart className="mr-1 h-4 w-4" /> 10k
                    </span>
                    <span className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" /> 124
                    </span>
                  </div>
                  <button className="text-custom-primary hover:text-custom-primary/80 p-0">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        <footer className="text-m-muted flex w-full items-center justify-center gap-10 p-6">
          Ali Hassanzadeh @2025
        </footer>
      </div>
    </ViewTransition>
  );
}
