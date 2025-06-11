"use client";

import UpcomingSessionCard from "./UpcomingSessionCard";
import SearchFilters from "./SearchFilters";
import TherapistGrid from "./TherapistGrid";
import MobileAppSection from "./MobileAppSection";

export default function TherapistCoach() {
  return (
    <main className="therapist-coach-page">
      <div className="therapist-coach-content">
        <div className="page-header">
          <h1>Upcoming Session Details</h1>
        </div>
        <UpcomingSessionCard />
        <div className="main-content-section">
          <SearchFilters />
          <TherapistGrid />
        </div>
        <MobileAppSection />
      </div>
    </main>
  );
}
