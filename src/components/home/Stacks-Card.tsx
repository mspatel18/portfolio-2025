"use client";
import { cn } from "@/lib/utils";
import React from "react";

import {
  SiAdobeillustrator,
  SiAstro,
  SiBlender,
  SiCss3,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Layers } from "lucide-react";

type MarqueeProps = {
  children: React.ReactNode;
  /**
   * The gap between each child.
   * @default '1rem'
   * @example '20px' | '1rem' | '2em'
   */
  gap?: string;
  /**
   * The direction of the marquee.
   * @default 'left'
   */
  direction?: "left" | "up";
  /**
   * Pause the marquee on hover.
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Reverse the direction of the marquee.
   * @default false
   */
  reverse?: boolean;
  /**
   * Fade the marquee edges.
   * @default false
   */
  fade?: boolean;
  className?: string;
};

export const Marquee = (props: MarqueeProps) => {
  const {
    children,
    gap = "1rem",
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,
    className,
  } = props;

  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className
      )}
      style={{
        maskImage: fade
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        gap,
      }}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          style={
            {
              "--gap": gap,
            } as React.CSSProperties
          }
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            direction === "left"
              ? "animate-marquee-left flex-row"
              : "animate-marquee-up flex-col",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "direction-reverse"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
export const StacksCard = () => {
  return (
    <div className="flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <Layers className="size-[18px]" />
        <h2 className="text-sm font-light">Tech Stacks</h2>
      </div>
      <Marquee className="py-4" gap="20px" fade pauseOnHover>
        <SiHtml5 className="size-10" title="HTML" />
        <SiCss3 className="size-10" title="CSS" />
        <SiJavascript className="size-10" title="JavaScript" />
        <SiTypescript className="size-10" title="TypeScript" />
        <SiFigma className="size-10" title="Figma" />
        <SiTailwindcss className="size-10" title="Tailwind CSS" />
        <SiNextdotjs className="size-10" title="Next.js" />
        <SiReact className="size-10" title="React" />
        <SiPython className="size-10" title="Python" />
        <SiAstro className="size-10" title="Astro" />
        <SiSvelte className="size-10" title="Svelte" />
      </Marquee>
      <Marquee className="py-2" gap="20px" reverse fade pauseOnHover>
        <SiPostgresql className="size-10" title="PostgreSQL" />
        <SiMongodb className="size-10" title="MongoDB" />
        <SiGit className="size-10" title="Git" />
        <SiVite className="size-10" title="Vite" />
        <SiMarkdown className="size-10" title="Markdown" />
        <SiNodedotjs className="size-10" title="Node.js" />
        <SiBlender className="size-10" title="Blender" />
        <SiAdobeillustrator className="size-10" title="Adobe Illustrator" />
      </Marquee>
    </div>
  );
};
