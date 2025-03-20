"use client";
import { BackpackIcon, CodeIcon, Menu, Briefcase, Code2 } from "lucide-react";
import NewModeToggle from "./ModeToggle";

// import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className=" text-primary flex justify-between items-center w-full  rounded-xl py-1 px-4 bg-background/30">
      <Link href="/" className="">
        <>
          <Logo />
        </>
      </Link>
      <div className="hidden  justify-start items-center gap-5 sm:flex">
        <Link href="/projects" className="flex font-cal items-center gap-1">
          <Code2 width={17} />
          projects
        </Link>
        <Link href="/experience" className="flex font-cal items-center gap-1">
          <Briefcase width={17} />
          experience
        </Link>
        <div className="flex ">
          <NewModeToggle />
        </div>
      </div>
      <div className="sm:hidden flex gap-6 bg-background/10 ">
        <div className="flex ">
          <NewModeToggle />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="end"
            // alignOffset={-10}
            className="sm:hidden"
          >
            <DropdownMenuItem>
              <Link href="/projects" className="flex items-center gap-1">
                <CodeIcon />
                projects
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/experience" className="flex items-center gap-1">
                <BackpackIcon />
                experience
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
