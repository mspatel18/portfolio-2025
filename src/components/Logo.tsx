import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Image
          src="/m-light.png"
          width={40}
          height={40}
          className="user-select-none select-none pointer-events-none min-w-full"
          alt="logo"
        />
      ) : (
        <Image
          src="/m.png"
          width={40}
          height={40}
          className="user-select-none select-none pointer-events-none min-w-full"
          alt="logo"
        />
      )}
    </>
  );
};

export default Logo;
