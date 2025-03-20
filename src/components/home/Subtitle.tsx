"use client";
import { useEffect, useState } from "react";

const Subtitle = () => {
  const [age, setAge] = useState<number | null>();

  useEffect(() => {
    const birthDate = new Date("2003-08-01");
    const currentDate = new Date();
    const calculatedAge = Math.floor(
      (currentDate.getTime() - birthDate.getTime()) /
        (365.25 * 24 * 60 * 60 * 1000)
    );
    setAge(calculatedAge);
  }, []);

  return (
    <div className="text-zinc-600 dark:text-zinc-400">
      <p>{age}y/o Tech Enthusiast, India</p>
    </div>
  );
};

export default Subtitle;
