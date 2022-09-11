import React from "react";
import { OverviewSection, ProfileSummary, TechnicalSummary } from "./partials";

const CvLandingPage = () => {
  return (
    <div>
      <OverviewSection />
      <div className="details-section">
        <ProfileSummary />
        <div className="m-t-15">
          <TechnicalSummary />
        </div>
      </div>
    </div>
  );
};

export default CvLandingPage;
