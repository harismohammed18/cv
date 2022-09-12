import React from "react";
import { OverviewAddrLine } from "../commons";
import { OverviewAddrLineProps } from "../types";

const OverviewSection = () => {
  const addressDetails: Array<OverviewAddrLineProps> = [
    {
      iconName: "fa-solid fa-location-pin",
      text: "Chothedath Palliyalil (H), Valiyakunnu(PO), Malappuram (DST), 676552, India",
      isLink: false,
    },
    {
      iconName: "fa-solid fa-envelope",
      text: "hariscpvkn@gmail.com",
      isLink: true,
      path: "mailto:hariscpvkn@gmail.com",
    },
    {
      iconName: "fa-solid fa-phone",
      text: "+91-9633839726",
      isLink: true,
      path: "tel:+91-9633839726",
    },
    {
      iconName: "fa-solid fa-calendar-days",
      text: "01-jun-1995",
      isLink: false,
    },
    {
      iconName: "fa-brands fa-linkedin",
      text: "https://www.linkedin.com/in/haris-mohammed-6b802311b",
      isLink: true,
      path: "https://www.linkedin.com/in/haris-mohammed-6b802311b",
    },
    {
      iconName: "fa-brands fa-github",
      text: "https://github.com/harismohammed18",
      isLink: true,
      path: "https://github.com/harismohammed18",
    },
  ];
  return (
    <div className="overview-section">
      <img
        src={process.env.PUBLIC_URL + `/images/profile.jpg`}
        className="profile-image"
        alt="profile pic"
      />
      <div className="details">
        <h1 className="heading-one text-white">Haris Mohammed</h1>
        <h2 className="heading-two text-white text-italic">
          Full-stack Developer
        </h2>
        <div className="details-section">
          {addressDetails.map((addr, index) => (
            <OverviewAddrLine
              key={index}
              iconName={addr.iconName}
              text={addr.text}
              isLink={addr.isLink}
              path={addr.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
