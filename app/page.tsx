"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import GoalsAssessment from "./components/GoalsAssessment";
import MyCarePlan from "./components/MyCarePlan";

export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "goals-assessment":
        return <GoalsAssessment />;
      case "my-care-plan":
        return <MyCarePlan />;
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <div
        className={`dashboard-content ${isSidebarExpanded ? "sidebar-expanded-layout" : ""}`}
      >
        <Sidebar
          onToggle={handleSidebarToggle}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <div className="content-wrapper">
          {renderContent()}
          {activeSection === "home" && <RightSidebar />}
        </div>
      </div>
    </div>
  );
}
