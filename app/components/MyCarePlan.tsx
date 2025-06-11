"use client";

import ProgressBanner from "./ProgressBanner";
import TherapistMatchingCard from "./TherapistMatchingCard";
import CarePlanCards from "./CarePlanCards";
import MobileAppShowcase from "./MobileAppShowcase";

export default function MyCarePlan() {
  return (
    <main className="my-care-plan">
      <div className="my-care-plan-content">
        <ProgressBanner />
        <TherapistMatchingCard />
        <CarePlanCards />
        <MobileAppShowcase />
      </div>
    </main>
  );
}
