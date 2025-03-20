import Intro from "@/components/home/Intro";
import SVGComponent from "@/components/home/Wave";
import AboutMe from "@/components/home/AboutMe";
import { Analytics } from "@vercel/analytics/react";
import Subtitle from "@/components/home/Subtitle";

export default function Home() {
  return (
    <>
      <h1 className="mt-0 mb-1 text-4xl font-medium font-cal dark:text-white">
        Mann Patel
      </h1>
      <Subtitle />

      <Intro />
      <SVGComponent />
      <AboutMe />
      <Analytics />
    </>
  );
}
