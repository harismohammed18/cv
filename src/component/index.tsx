import React from "react";
import {
  AcademicProfile,
  Certificates,
  OverviewSection,
  ProfileSummary,
  TechnicalSummary,
} from "./partials";

const CvLandingPage = () => {
  return (
    <div>
      <OverviewSection />
      <div className="details-section">
        <ProfileSummary />
        <div className="m-t-15">
          <TechnicalSummary />
        </div>
        <div className="m-t-15">
          <AcademicProfile />
        </div>
        <div className="m-t-15">
          <Certificates />
        </div>
      </div>
    </div>
  );
};

export default CvLandingPage;
