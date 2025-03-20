import LocationCard from "./Location";
import Connect from "./Connect";
import { StacksCard } from "./Stacks-Card";
import Link from "next/link";
import Image from "next/image";
import projectBg from "../../../public/project-bg.jpg";
import experienceBg from "../../../public/experience-bg.jpg";
const AboutMe = () => {
  return (
    <>
      <div className="text-3xl mt-8 font-cal">About Me</div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="grid gap-4">
          <LocationCard />
          <StacksCard />
        </div>
        <div className="grid gap-4">
          <Connect />
          <div className="grid gap-4 [@media(min-width:450px)]:grid-cols-2 ">
            <Link href="/projects">
              <div className="relative overflow-hidden flex justify-center items-center w-48 h-60 shadow-feature-card dark:shadow-feature-card-dark rounded-xl">
                <Image
                  src={projectBg}
                  className="absolute h-full hover:scale-110 transition-transform ease-in-out duration-300 object-cover brightness-50"
                  alt=""
                />
                <div className="z-10 text-xl font-cal rotate-90 text-background dark:text-foreground">
                  Projects
                </div>
              </div>
            </Link>
            {/* <LocationCard /> */}
            <Link href="/experience">
              <div className="relative overflow-hidden flex justify-center items-center w-48 h-60 shadow-feature-card dark:shadow-feature-card-dark rounded-xl">
                <Image
                  src={experienceBg}
                  className="absolute h-full object-cover hover:scale-110 transition-transform ease-in-out duration-300 brightness-50"
                  alt=""
                />
                <div className="z-10 text-xl font-cal rotate-90 text-background dark:text-foreground">
                  Experience
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
