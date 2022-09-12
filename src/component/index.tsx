import React from "react";
import {
  AcademicProfile,
  Awards,
  Certificates,
  OverviewSection,
  ProfessionalExperience,
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
        <div className="m-t-15">
          <ProfessionalExperience />
        </div>
        <div className="m-t-15">
          <Awards />
        </div>
      </div>
    </div>
  );
};

export default CvLandingPage;
