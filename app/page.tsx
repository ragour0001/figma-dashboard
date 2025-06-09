"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";

export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <div
        className={`dashboard-content ${isSidebarExpanded ? "sidebar-expanded-layout" : ""}`}
      >
        <Sidebar onToggle={handleSidebarToggle} />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}
