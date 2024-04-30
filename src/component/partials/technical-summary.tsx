import React from "react";
import { LabelPrimary } from "../commons";

const TechnicalSummary = () => {
  const titles: Array<{ title: string; text: string }> = [
    {
      title: "Programming",
      text: "JavaScript, TypeScript, PHP, JAVA, Dart",
    },
    {
      title: "Operating System",
      text: "Windows, Linux and macOS",
    },
    {
      title: "Database",
      text: "MySQL, MongoDB, PostgreSQL, SQLite, MariaDB",
    },
    {
      title: "Server",
      text: "Apache HTTP Server, Nginx, NodeJS, Apache Tomcat",
    },
    {
      title: "Tools and Libraries",
      text: "ReactJS, VueJS, GIT,OpenAI, Webpack, Redis, Botpress, Adobe XD, Bootstrap, Material UI, Redux, Socket.io, Vuetify, Apache Kafka, SCSS, Docker",
    },
    {
      title: "Frameworks",
      text: "Express, Angular, Laravel, Codeigniter, Lumen, Ionic, SpringBoot, Flutter, Express, NextJS",
    },
  ];
  return (
    <>
      <LabelPrimary title="Technical Profile" />
      <div className="technical-profile m-t-15">
        {titles.map((data, index) => (
          <div
            className={`technical-profile-card ${index > 1 && "m-t-10"}`}
            key={index}
          >
            <h4 className="label-tertiary">{data.title}</h4>
            <p className="summary-text">{data.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechnicalSummary;
