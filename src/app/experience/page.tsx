import WorkCard from "@/components/ui/WorkCard";
const Experience = () => {
  return (
    <>
      <h1 className="text-3xl  font-cal pb-8">Experience</h1>
      <p className="">
        Here is the list of my professional experience and internships that I
        have done.
      </p>
      <br />
      {/* <div className=" border rounded my-4 p-4 flex gap-3 justify-between items-center hover:scale-105 transition-all ease-in-out duration-200"> */}
      <WorkCard
        logo="/wappnet.png"
        position="Software Intern"
        title="Wappnet Systems"
        duration="Jan 2025 - Present"
        details={[]}
      />
      <WorkCard
        logo="/tatvasoft_logo.jfif"
        position="Web Developer Intern"
        title="Tatvasoft"
        duration="May 2024 - June 2024"
        details={[
          "Developed a website for the ”Virtual Community Support” project, utilizing Angular for the frontend and .NET for the backend.",
          "Leveraged PostgreSQL as the database to ensure reliable and efficient data management.",
          "Integrated various APIs to enhance the website’s functionality and interactivity.",
        ]}
      />
      <WorkCard
        logo="/tripyaatra.png"
        position="Freelance"
        title="Trip Yaatra"
        duration="Dec 2023 - Feb 2024"
        details={[
          "Designed and developed a dynamic website for a tours and travel package provider using Next.js and Tailwind CSS as per client requirements, ensuring a responsive and user-friendly interface.",
          "Implemented features allowing users to contact travelling agent directly and download itineraries, enhancing customer engagement and accessibility.",
          "Optimized the site for performance and SEO, resulting in improved visibility and faster load times for a better user experience.",
        ]}
      />
      <WorkCard
        logo="/aimedlabs.png"
        position="SDE Intern"
        title="AimedLabs"
        duration="Aug 2023 - Nov 2023"
        details={[
          "Built a React based website using the Astro framework and components, with Strapi as the CMS, which helped the marketing team make changes with minimal technical support.",
          "Followed Agile methodologies with daily Scrum meetings to meet deadlines and complete the project.",
          "Collaborated with the UI Design team to develop the website’s frontend and ensured responsiveness across various screen sizes.",
          "Practiced code reusability and optimization by creating dynamic components for better usage throughout the code.",
          "Documented the codebase to facilitate future development and usage by other developers.",
        ]}
      />
      {/* </div> */}
    </>
  );
};

export default Experience;
