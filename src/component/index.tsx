import React from "react";
import { OverviewSection, ProfileSummary } from "./partials";

const CvLandingPage = () => {
  return (
    <div>
      <OverviewSection />
      <div className="details-section">
        <ProfileSummary />
      </div>
    </div>
  );
};

export default CvLandingPage;
