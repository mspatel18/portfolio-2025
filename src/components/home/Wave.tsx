"use client";
import React, { useEffect, useRef } from "react";

const AnimatedSVG: React.FC = () => {
  const svgRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const xs: number[] = [];
    for (let i = 0; i <= 500; i++) {
      xs.push(i);
    }

    let t = 0;

    const animate = () => {
      const points: [number, number][] = xs.map((x) => {
        const y = 15 + 12 * Math.sin((x + t) / 10);
        return [x, y];
      });

      const path = "M" + points.map((p) => p[0] + "," + p[1]).join(" L");

      if (svgRef.current) {
        svgRef.current.setAttribute("d", path);
      }

      t += 0.5;

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    // return () => cancelAnimationFrame(animate);
  }, []); // Run once on mount

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="100 0 150 50"
      className="w-32 h-5 mt-4"
    >
      <path
        ref={svgRef}
        className="stroke-foreground stroke-1 stroke-linecap-round fill-none"
      />
    </svg>
  );
};

export default AnimatedSVG;
