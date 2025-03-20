import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

const WorkCard = (props: {
  logo: string;
  position: string;
  title: string;
  duration: string;
  details: string[];
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="1"
        className=" hover:scale-105 transition-all ease-in-out duration-200 rounded-lg mb-4"
      >
        <div className="flex items-start gap-3 my-2">
          <Image
            src={props.logo}
            width={60}
            height={60}
            alt="Company logo"
            className="drop-shadow-lg rounded-lg"
          />
          <div className="flex flex-col gap-1 justify-center items-start">
            <p className="text-base font-semibold ">{props.position}</p>
            <p className="text-sm  text-justify font-semibold">{props.title}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2 justify-center items-center">
              <CalendarDays width={15} />
              {props.duration}
            </p>
            <AccordionTrigger className="p-0 text-blue-600 dark:text-blue-300">
              Show Details
            </AccordionTrigger>
          </div>
        </div>
        <AccordionContent>
          <ul className=" list-disc list-inside ml-16">
            {props.details.map((detail, index) => (
              <li key={index} className="">
                {detail}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      {/* <div className="flex items-center gap-3">
          <img src="/aimedlabs.svg" width={40} alt="" />
          <div className="flex flex-col gap-1 justify-center items-start">
            <p className="text-base font-medium font-mono">
              Software Developer
            </p>
            <p className="text-xs  text-justify font-mono">
              AimedLabs · Internship
            </p>
            <p className="text-xs text-zinc-500 flex gap-2 font-mono">
              <CalendarIcon /> Aug 2023 - Nov-2023
            </p>
          </div>
        </div> */}
    </Accordion>
  );
};

export default WorkCard;
