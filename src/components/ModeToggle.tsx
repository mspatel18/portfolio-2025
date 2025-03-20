"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const NewModeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <Button variant="ghost" onClick={() => setTheme("light")}>
          <Sun className="absolute h-[1.2rem] w-[1.2rem] transition-all " />
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => setTheme("dark")}>
          <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all " />
        </Button>
      )}
    </>
  );
};

export default NewModeToggle;
