import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
const Card = (props: {
  icon: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
}) => {
  return (
    <div className=" border rounded my-4 p-2 flex gap-3 justify-between items-center hover:scale-105 transition-all ease-in-out duration-200">
      <div className="flex items-center gap-3">
        <div className="text-2xl">{props.icon}</div>
        <div>
          <h2 className=" font-mono text-lg">{props.title}</h2>
          <p className=" text-zinc-500 text-sm font-mono text-justify">
            {props.description}
          </p>
        </div>
      </div>
      <div className="flex gap-1">
        {props.link && (
          <a href={props.link} target="_blank">
            <Button variant="outline" className="p-2 ml-1 bg-transparent">
              <SquareArrowOutUpRight height={20} width={20} />
            </Button>
          </a>
        )}
        {props.github && (
          <a href={props.github} target="_blank">
            <Button variant="outline" className="p-2 ml-1 bg-transparent">
              <SiGithub
                height={20}
                width={20}
                onPointerOverCapture={undefined}
                onPointerMoveCapture={undefined}
              />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
