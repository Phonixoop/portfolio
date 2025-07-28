"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, Calendar, Tag } from "lucide-react";
import { blogPost } from "~/app/projects/performance-automation/post";

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const container = contentRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      setScrollProgress(progress);

      // Find active section with improved logic for last section
      const sectionElements = sectionRefs.current;
      let currentSection = 0;

      // Check if we're at the bottom of the page
      const isAtBottom =
        scrollTop + container.clientHeight >= container.scrollHeight - 10;

      if (isAtBottom) {
        currentSection = sectionElements.length - 1;
      } else {
        for (let i = 0; i < sectionElements.length; i++) {
          const element = sectionElements[i];
          if (element) {
            const rect = element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            if (rect.top <= containerRect.top + 150) {
              currentSection = i;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    const container = contentRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Auto-scroll timeline to keep active section in view
  useEffect(() => {
    const activeTimelineItem = timelineItemRefs.current[activeSection];
    if (activeTimelineItem && timelineRef.current) {
      const timeline = timelineRef.current;
      const itemRect = activeTimelineItem.getBoundingClientRect();
      const timelineRect = timeline.getBoundingClientRect();

      // Check if item is outside visible area
      if (
        itemRect.top < timelineRect.top ||
        itemRect.bottom > timelineRect.bottom
      ) {
        const scrollTop =
          activeTimelineItem.offsetTop -
          timeline.clientHeight / 2 +
          activeTimelineItem.clientHeight / 2;
        timeline.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      }
    }
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    const element = sectionRefs.current[index];
    if (element && contentRef.current) {
      const container = contentRef.current;
      const elementTop = element.offsetTop;
      container.scrollTo({
        top: elementTop - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-iransans min-h-screen bg-gray-900 text-green-400">
      <div className="flex h-screen">
        {/* Left Sidebar - Timeline */}
        <div className="flex h-screen w-80 flex-col border-r border-gray-700 bg-gray-800 p-6">
          <div className="mb-6 flex-shrink-0">
            <div className="mb-2 text-xs tracking-wider text-gray-500 uppercase">
              STORYLINE → EDITOR
            </div>
          </div>

          {/* Timeline - with proper height management */}
          <div className="relative min-h-0 flex-1">
            <div className="h-full overflow-hidden">
              {/* Progress Line */}
              <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-600"></div>
              <div
                className="absolute top-0 left-4 w-0.5 bg-green-400 transition-all duration-300 ease-out"
                style={{
                  height: `${scrollProgress * 100}%`,
                  boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                }}
              ></div>

              {/* Scrollable timeline content */}
              <div
                ref={timelineRef}
                className="scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 h-full overflow-y-auto pr-2"
              >
                {blogPost.sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="relative mb-6"
                    ref={(el: any) => (timelineItemRefs.current[index] = el)}
                  >
                    {/* Node */}
                    <div
                      className={`absolute left-2 h-4 w-4 cursor-pointer rounded border-2 transition-all duration-300 ${
                        index <= activeSection
                          ? "border-green-400 bg-green-400 shadow-lg shadow-green-400/50"
                          : "border-gray-600 bg-gray-800"
                      }`}
                      onClick={() => scrollToSection(index)}
                    ></div>

                    {/* Content */}
                    <div className="ml-10">
                      <button
                        onClick={() => scrollToSection(index)}
                        className={`w-full rounded border p-3 text-left transition-all duration-300 ${
                          index === activeSection
                            ? "border-green-400 bg-gray-700 text-green-300"
                            : "border-gray-600 bg-gray-800 hover:border-gray-500"
                        }`}
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <ChevronRight className="h-3 w-3" />
                          <span className="text-sm font-medium">
                            {section.title}
                          </span>
                        </div>
                        <div className="line-clamp-2 text-xs text-gray-400">
                          {section.content.substring(0, 80)}...
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex flex-1 flex-col bg-black">
          {/* Header */}
          <div className="border-b border-gray-800 bg-gray-900 p-6">
            <div className="mb-4 flex items-center gap-2 text-xs tracking-wider text-gray-600 uppercase">
              <span>📖 PROJECT BLOG</span>
            </div>

            <h1 className="mb-2 text-2xl font-bold text-amber-300">
              {blogPost.title}
            </h1>

            <p className="mb-4 leading-relaxed text-gray-300">
              {blogPost.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <div className="flex gap-1">
                  {blogPost.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {blogPost.tags.length > 3 && (
                    <span className="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs">
                      +{blogPost.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl space-y-12">
              {blogPost.sections.map((section, index) => (
                <div
                  key={section.id}
                  ref={(el: any) => (sectionRefs.current[index] = el)}
                  className={`transition-all duration-300 ${index === activeSection ? "opacity-100" : "opacity-75"}`}
                >
                  <div className="prose prose-invert max-w-none">
                    <div
                      className="markdown-content"
                      dangerouslySetInnerHTML={{
                        __html: section.content
                          .replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-amber-300 font-semibold">$1</strong>',
                          )
                          .replace(
                            /\*(.*?)\*/g,
                            '<em class="text-amber-200">$1</em>',
                          )
                          .replace(
                            /^# (.*$)/gim,
                            '<h1 class="text-3xl font-bold text-amber-300 mb-6 mt-8">$1</h1>',
                          )
                          .replace(
                            /^## (.*$)/gim,
                            '<h2 class="text-2xl font-bold text-amber-300 mb-4 mt-8">$1</h2>',
                          )
                          .replace(
                            /^### (.*$)/gim,
                            '<h3 class="text-xl font-bold text-amber-300 mb-4 mt-6">$1</h3>',
                          )
                          .replace(
                            /^> (.*$)/gim,
                            '<blockquote class="border-l-4 border-amber-400 pl-4 italic text-amber-200 mb-4 bg-gray-900 py-2">$1</blockquote>',
                          )
                          .replace(
                            /^- (.*$)/gim,
                            '<li class="text-gray-300 mb-1 ml-4">• $1</li>',
                          )
                          .replace(
                            /\n\n/g,
                            '</p><p class="text-gray-300 leading-relaxed mb-4">',
                          )
                          .replace(
                            /^(?!<[h|l|b])(.*$)/gm,
                            '<p class="text-gray-300 leading-relaxed mb-4">$1</p>',
                          ),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
