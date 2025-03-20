import Card from "@/components/ui/Card";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-cal pb-8">Projects</h1>
      <p className="">
        I love building side projects that solve either my own or someone
        else&apos;s problems. Here is an extensive list of all the stuff I have
        built.
      </p>
      <br />
      <p className="">
        Want to discuss on projects or collaborate on something? Feel free to{" "}
        <a
          href="http://linkedin.com/in/mspatel18"
          className="link ml-1"
          target="blank"
          rel="noopener noreferrer"
        >
          @mspatel18
        </a>
        {""}.
      </p>
      <Card
        icon="🔗"
        title="Link Wizard"
        description="A tool to manage all your social links in one place."
        link="https://linkwizard.vercel.app/"
        github="https://github.com/mspatel18/LinkWizard-Frontend"
      />
      <Card
        icon="☁"
        title="Real Time Air Quality Index Monitor"
        description="Developed a real-time air quality monitoring system using IOT in CVMU-Hackathon. The system uses an
      ESP8266 microcontroller and MQ-series sensors to capture real-time air quality data."
        link="https://youtu.be/S25HLTzE2WQ?si=PiMWWVBAhCMWRjOh"
        github="https://github.com/mspatel18/AQI-dashboard"
      />
      <Card
        icon="🤓"
        title="ReadmeWizard"
        description="
      A GitHub Profile Readme Generator a tool that helps you create a visually appealing and informative readme file for
      your GitHub profile. Featured on Scrimba's weekly newsletter."
        link="https://readmewizard.vercel.app/"
        github="https://github.com/mspatel18/readmewizard"
      />
      <Card
        icon="📝"
        title="Complaint Management System"
        description="
      I lead and developed this project during the SSIP 2022 hackathon. It was a successful implementation of building a system that could manage citizen complaints and distribute them to
      the appropriate departments."
        link="https://youtu.be/rOMYlAJsRA4?si=KpUV9aRbLQkQE46P"
        github="https://github.com/SSIP2022/Frontend"
      />
      <Card
        icon="🎶"
        title="Youtube Video to MP3 Extenstion"
        description="Build this extenstion to get the mp3 of the youtube video directly."
        github="https://github.com/mspatel18/Youtube-Video-to-MP3-Extension"
      />
      <Card
        icon="🎨"
        title="Threejs Portfolio"
        description="A 3d portfolio website build using threejs"
        link="https://mspatel18.netlify.app/"
        github="https://github.com/mspatel18/3d-portfolio"
      />
      <Card
        icon="🔢"
        title="Number Base Converter"
        description="A simple number base converter build using HTML, CSS and JavaScript."
        link="https://numberbaseconverter.netlify.app/"
        github="https://github.com/mspatel18/BaseConverter"
      />
    </div>
  );
};

export default page;
