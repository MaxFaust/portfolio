import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Max | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Max Faust</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/max-faust-193b5519b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/MaxFaust"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <p>
            Proven Leadership <span className="px-1">|</span> Web Development
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <p>
          Accomplished software developement across multiple modern technologies, seeking to expand my knowledge and experience in software development spanning the full stack.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Technical Skills
          </h5>
          <p className="py-2">
            <span className="font-bold">Front-End</span>
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>JS/TS
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Tailwind/MUI
            <span className="px-2">|</span>MongoDB
          </p>
          <p className="py-2">
            <span className="font-bold">Backend</span>
            <span className="px-2">|</span>Node
            <span className="px-2">|</span>Express
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>Java
            <span className="px-2">|</span>Spring Boot
            <span className="px-2">|</span>Firebase
          </p>
          <p className="py-2">
            <span className="font-bold">Design</span>
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>MaterialUI
            <span className="px-2">|</span>Flexbox/grid
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>SaSS
          </p>
        </div>

        {/* Education */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-4">Education</h5>
          <p className="italic">
            <span className="font-bold">Prime Digital Academy</span>
            <span className="px-2">|</span>St. Paul, Mn
          </p>
          <p className="py-1 italic">Full Stack Software Engineering</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Remotely delivered fully deployed applications from design to
              handoff on a sprint schedule using Slack and shared kanban
              planning strategies.
            </li>
            <li>SERN stack with a focus on building React web applications. </li>
            <li>
              Worked with a team and individually to develop and deploy several full stack applications.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <h5 className="text-center underline text-[16px] py-4">
            Professional Experience
          </h5>
          <p className="italic">
            <span className="font-bold py-2">Simpls</span>
            <span className="px-2">|</span>St. Paul, Mn
          </p>
          <p className="py-1 italic">Solutions Architect</p>
          <p className=" italic">June 2020-present</p>
          <ul className="list-disc list-outside px-7 py-2 leading-relaxed">
            <li>
              Built systems with scalable solutions in mind, coordinating with
              teams to create and refine data tracking tools, processes, and
              workflows.
            </li>
            <li>
              Participated in collaborative efforts to increase sustainability
              in growth and development.
            </li>
            <li>
              Contributed in business management level planning decisions
              aimed at increasing productivity and reducing possibility for
              human error through better use of technologies.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">The Wedge Table</span>
            <span className="px-2">|</span>Minneapolis, Mn
          </p>
          <p className="py-1 italic">Production Manager</p>
          <p className=" italic">March 2015 - January 2020</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Supply chain logistics coordination and management.
            </li>
            <li>
              Team based development of systems and processes to ensure successful production and delivery to dozens of clients.
            </li>
          </ul>
        </div>
        <div className="py-2">
          <h5 className="text-center underline text-[16px] py-4">
            Volunteer Experience
          </h5>
          <div className="py-2">
          <p className="italic">
            <span className="font-bold italic">Cooking Matters</span>
            <span className="px-2">|</span>Minneapolis, Mn
          </p>
          <p className=" italic">2019</p>
          <p className="py-1 italic">Chef Instructor</p>

          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          </ul>
        </div>
                {/* Experience */}
                <div className="py-2">
          <p className="italic">
            <span className="font-bold italic">Birchwood Cafe</span>
            <span className="px-2">|</span>Minneapolis, Mn
          </p>
          <p className=" italic">2014-2017</p>
          <p className="py-1 italic">Volunteer Organizer and Event Coordinatior </p>
        </div>

        </div>
      </div>
    </>
  );
};

export default resume;
