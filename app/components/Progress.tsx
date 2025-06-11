"use client";

import ProgressBanner from "./ProgressBanner";
import ProgressInsightsChart from "./ProgressInsightsChart";
import AssessmentWarningBanner from "./AssessmentWarningBanner";
import MobileAppShowcase from "./MobileAppShowcase";

export default function Progress() {
  return (
    <main className="progress-page">
      <div className="progress-content">
        <ProgressBanner />
        <div className="progress-main-section">
          <div className="progress-header">
            <h1>Progress</h1>
            <p>Designed to help you achieve your goals</p>
          </div>
          <ProgressInsightsChart />
        </div>
        <AssessmentWarningBanner />
        <MobileAppShowcase />
      </div>
    </main>
  );
}
