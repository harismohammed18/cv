import React from "react";
import { LabelPrimary } from "../commons";

const ProfessionalExperience = () => {
  const experiences: Array<{
    key: string;
    duration: string;
    companyName: string;
    position: string;
    place?: string;
    companyLink?: string;
    responsibilities: Array<string>;
  }> = [
    {
      key: React.useId(),
      duration: "Jun 2023 - Present",
      companyName: "Emirates NBD",
      position: "Senior Fullstack engineer(Consultant)",
      place: "Dubai, UAE",
      companyLink: "https://www.emiratesnbd.com/en",
      responsibilities: [
        `Migrated existing Digital Acquisition journey to latest React version and improved the performance`,
        `Implemented document classification and extraction using openAI`,
        `Implemented document classification using Azure document intelligence services`,
      ],
    },
    {
      key: React.useId(),
      duration: "Jan 2023 - Jun 2023",
      companyName: "Affinidi",
      position: "Technical Lead",
      place: "Bengaluru, KA, India",
      companyLink: "https://www.affinidi.com/",
      responsibilities: [
        `Worked as a Senior UI developer/Tech lead and was involved in requirement gathering
        directly with stakeholders`,
        `Leading a team of 6 and mentoring Team members with their issues in code and logical
        implementation`,
        `Investigate the technology stock and conduct meeting with leads, and managers and
        explains to them`,
        `Designing the prototype and implementing it with the defined technology stock`,
        `Allocate the issues to the team members with the JIRA task number and generate the
        report`,
      ],
    },
    {
      key: React.useId(),
      duration: "Dec 2020 - Jan 2023",
      companyName: "6d Technologies",
      position: "Technical Lead",
      place: "Bengaluru, KA, India",
      companyLink: "https://www.6dtechnologies.com/",
      responsibilities: [
        "Designed the Technical Specification for Smartfen inventory and KMS Module.",
        `Involved in reviewing coding and testing for offshore
        teams. Impact analysis of the new requirement or change
        request on the existing programs initiated by the client.`,
        `Involved in designing the Technical Specification.
        Responsible for creating High level Design (HLD) and Low
        level Design (LLD) documents, Estimation Analysis
        Documents.`,
        `Migrated existing Monolithic Applications to Microservice
        Architectural Pattern.`,
      ],
    },
    {
      key: React.useId(),
      duration: "Apr 2020 - Nov 2020",
      companyName: "eStomi Technologies",
      position: "ITSM Consultant - Full Stack",
      place: "Bengaluru, KA, India",
      companyLink: "https://www.estomi.com/",
      responsibilities: [
        `Active participant and contributor in all phases of
      development, with the inception of Conceptual-Model
      through the Functional and detailed design to the
      Implementation, Debugging and Deployment of the
      software solution.`,
        `Proactive contributor through direction and participation
      with team members in the Analysis, Development and
      Delivery of all support and project work for assigned
      applications.`,
        `Acknowledged for Design and Development of Backend
      Application that serves the new product of the
      organization enhancing the performance of existing
      tussom products by optimizing API's and introducing
      Socket-Communication, Caching and optimizing SQL
      queries.`,
      ],
    },
    {
      key: React.useId(),
      duration: "Jul 2018 - Mar 2020",
      companyName: "Mb9 India Software Solutions Llp",
      position: "Software Engineer - Full Stack",
      place: "Bengaluru, KA, India",
      companyLink: "https://mb9inc.com/",
      responsibilities: [
        `Implemented RESTful web services using PHP and NodeJS`,
        `Designed and developed UI for web applications using
       Angular and ReactJS.`,
        `Worked as a Lead Developer in project EMM and OPM.`,
        `Developed Mobile Applications using Ionic.`,
        `Support in maintenance and bug fixes for Condobutler.`,
        `Released application to PlayStore and Apple store.`,
      ],
    },
  ];
  return (
    <>
      <LabelPrimary title="Professional Experience" />
      <div className="professional-experience m-t-15">
        {experiences.map((experience) => (
          <div key={experience.key} className="professional-experience-card">
            <div className="duration summary-text">{experience.duration}</div>
            <div className="responsibilitiesAndCompanyDetails">
              <div className="companyDetails">
                <h4 className="label-tertiary">{experience.position}</h4>
                <a href={experience.companyLink} className="summary-text">
                  {experience.companyName}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square m-l-5"></i>
                </a>
              </div>
              <div className="responsibilities">
                <ul>
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="summary-text">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="location summary-text">{experience.place}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfessionalExperience;
