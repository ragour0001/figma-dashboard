"use client";

import { useState } from "react";

export default function Settings() {
  const [notificationSummary, setNotificationSummary] = useState("on");
  const [actionableNotifications, setActionableNotifications] = useState({
    reminders1: true,
    reminders2: true,
    reminders3: true,
    reminders4: true,
  });
  const [newsletters, setNewsletters] = useState({
    announcements: true,
  });

  const handleActionableToggle = (key: string) => {
    setActionableNotifications((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleNewsletterToggle = (key: string) => {
    setNewsletters((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <div className="settings-page">
      <div className="settings-content">
        {/* Header Section */}
        <div className="settings-header">
          <div className="page-container">
            <h1 className="settings-title">Settings</h1>
          </div>
        </div>

        {/* Settings Content */}
        <div className="settings-main">
          {/* Breadcrumb Navigation */}
          <div className="breadcrumb-nav">
            <div className="breadcrumb-item">
              <span className="breadcrumb-text inactive">My Details</span>
              <span className="breadcrumb-separator">|</span>
            </div>
            <div className="breadcrumb-item">
              <span className="breadcrumb-separator">|</span>
              <span className="breadcrumb-text inactive">Profile</span>
            </div>
            <div className="breadcrumb-item">
              <span className="breadcrumb-separator">|</span>
              <span className="breadcrumb-text inactive">Password</span>
            </div>
            <div className="breadcrumb-item active">
              <span className="breadcrumb-text active">
                Email Notifications
              </span>
            </div>
          </div>

          {/* Settings Sections */}
          <div className="settings-sections">
            {/* Notification Summary */}
            <div className="settings-section">
              <div className="section-header">
                <h3 className="section-title">Notification Summary</h3>
                <p className="section-description">
                  Receive an email summary of notifications instead of
                  individual emails
                </p>
              </div>
              <div className="radio-group">
                <div className="radio-option">
                  <div className="radio-button-wrapper">
                    <div
                      className={`radio-button ${notificationSummary === "on" ? "selected" : ""}`}
                      onClick={() => setNotificationSummary("on")}
                    >
                      <div className="radio-container">
                        <div className="radio-state-layer">
                          <div className="radio-icon">
                            {notificationSummary === "on" && (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                                  fill="#006A63"
                                />
                              </svg>
                            )}
                            {notificationSummary !== "on" && (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                                  fill="#3F4947"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="radio-label">On</span>
                </div>
                <div className="radio-option">
                  <div className="radio-button-wrapper">
                    <div
                      className={`radio-button ${notificationSummary === "off" ? "selected" : ""}`}
                      onClick={() => setNotificationSummary("off")}
                    >
                      <div className="radio-container">
                        <div className="radio-state-layer">
                          <div className="radio-icon">
                            {notificationSummary === "off" && (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                                  fill="#006A63"
                                />
                              </svg>
                            )}
                            {notificationSummary !== "off" && (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                                  fill="#3F4947"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="radio-label">Off</span>
                </div>
              </div>
            </div>

            {/* Actionable Email Notifications */}
            <div className="settings-section">
              <div className="section-header">
                <h3 className="section-title">
                  Actionable Email Notifications
                </h3>
              </div>
              <div className="toggle-list">
                <div className="toggle-item">
                  <span className="toggle-label">Reminders for Sessions</span>
                  <div
                    className={`toggle-switch ${actionableNotifications.reminders1 ? "active" : ""}`}
                    onClick={() => handleActionableToggle("reminders1")}
                  >
                    <div className="toggle-track">
                      <div className="toggle-handle">
                        <div className="toggle-target">
                          <div className="toggle-state-layer">
                            <div className="toggle-handle-shape">
                              <div className="toggle-container"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="toggle-item">
                  <span className="toggle-label">Reminders for Sessions</span>
                  <div
                    className={`toggle-switch ${actionableNotifications.reminders2 ? "active" : ""}`}
                    onClick={() => handleActionableToggle("reminders2")}
                  >
                    <div className="toggle-track">
                      <div className="toggle-handle">
                        <div className="toggle-target">
                          <div className="toggle-state-layer">
                            <div className="toggle-handle-shape">
                              <div className="toggle-container"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="toggle-item">
                  <span className="toggle-label">Reminders for Sessions</span>
                  <div
                    className={`toggle-switch ${actionableNotifications.reminders3 ? "active" : ""}`}
                    onClick={() => handleActionableToggle("reminders3")}
                  >
                    <div className="toggle-track">
                      <div className="toggle-handle">
                        <div className="toggle-target">
                          <div className="toggle-state-layer">
                            <div className="toggle-handle-shape">
                              <div className="toggle-container"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="toggle-item">
                  <span className="toggle-label">Reminders for Sessions</span>
                  <div
                    className={`toggle-switch ${actionableNotifications.reminders4 ? "active" : ""}`}
                    onClick={() => handleActionableToggle("reminders4")}
                  >
                    <div className="toggle-track">
                      <div className="toggle-handle">
                        <div className="toggle-target">
                          <div className="toggle-state-layer">
                            <div className="toggle-handle-shape">
                              <div className="toggle-container"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletters */}
            <div className="settings-section">
              <div className="section-header">
                <h3 className="section-title">
                  Newsletters I would like to receive:
                </h3>
              </div>
              <div className="toggle-list">
                <div className="toggle-item">
                  <span className="toggle-label">
                    Announcements and special offers (Rarely)
                  </span>
                  <div
                    className={`toggle-switch ${newsletters.announcements ? "active" : ""}`}
                    onClick={() => handleNewsletterToggle("announcements")}
                  >
                    <div className="toggle-track">
                      <div className="toggle-handle">
                        <div className="toggle-target">
                          <div className="toggle-state-layer">
                            <div className="toggle-handle-shape">
                              <div className="toggle-container"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
