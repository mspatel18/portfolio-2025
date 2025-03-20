import { SquareArrowOutUpRight } from "lucide-react";

const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600  dark:text-zinc-400">
      <div className="space-y-5">
        <p>
          I&apos;m a software developer based in India. I have a passion for
          developing software that improves the lives of those around me. I
          specialize in building web applications and have professional
          experience working with JavaScript, TypeScript, React, and Node.js.
        </p>
      </div>
      <br />
      <div>
        Feel free to reach me out at
        <a
          className="link text-black dark:text-white/95 mx-1 underline underline-offset-auto"
          href="http://linkedin.com/in/mspatel18"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mspatel18
        </a>
        or
        <a
          className="link text-black dark:text-white/95 ml-1 underline-offset-auto underline"
          href="mailto:mannpatel3118@gmail.com"
        >
          mannpatel3118@gmail.com
        </a>
        {""}.
      </div>
      <div className="mt-4">
        View my{" "}
        <a
          href="https://drive.google.com/file/d/1OqHV1Isy1wCK1s5DrlzVTaJb9gu4wiqb/view?usp=sharing"
          className="underline underline-offset-2 link"
        >
          Resume
          <SquareArrowOutUpRight size={15} className="ml-1 inline" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
