export default function RightSidebar() {
  return (
    <aside className="right-sidebar">
      {/* Profile Overview */}
      <div className="profile-overview">
        <div className="profile-header">
          <h3>Profile Overview</h3>
          <div className="more-options">
            <svg width="4" height="16" viewBox="0 0 4 16" fill="none">
              <path
                d="M2 0.5C1.3125 0.5 0.75 1.0625 0.75 1.75C0.75 2.4375 1.3125 3 2 3C2.6875 3 3.25 2.4375 3.25 1.75C3.25 1.0625 2.6875 0.5 2 0.5ZM2 13C1.3125 13 0.75 13.5625 0.75 14.25C0.75 14.9375 1.3125 15.5 2 15.5C2.6875 15.5 3.25 14.9375 3.25 14.25C3.25 13.5625 2.6875 13 2 13ZM2 6.75C1.3125 6.75 0.75 7.3125 0.75 8C0.75 8.6875 1.3125 9.25 2 9.25C2.6875 9.25 3.25 8.6875 3.25 8C3.25 7.3125 2.6875 6.75 2 6.75Z"
                fill="#1F1F1F"
              />
            </svg>
          </div>
        </div>

        <div className="profile-content">
          <div className="avatar-large">
            <div className="avatar-placeholder"></div>
          </div>
          <div className="profile-info">
            <p className="complete-profile">Complete your Profile</p>
          </div>
        </div>

        <div className="insights-card">
          <div className="insights-content">
            <div className="award-icon">
              <div className="award-placeholder"></div>
            </div>
            <div className="insights-text">
              Get your insights, just complete the assessment
            </div>
          </div>
        </div>
      </div>

      {/* Daily Streak */}
      <div className="daily-streak">
        <div className="streak-header">
          <h4>Daily Streak</h4>
          <span className="see-more">See More</span>
        </div>

        <div className="streak-content">
          <div className="flame-icon">
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none">
              <ellipse
                cx="17.373"
                cy="18.75"
                rx="4.6875"
                ry="6.5625"
                fill="#FFCE51"
              />
              <path
                d="M24.848 15.4377C22.8855 10.3377 15.898 10.0627 17.5855 2.65018C17.7105 2.10018 17.123 1.67518 16.648 1.96268C12.1105 4.63768 8.84805 10.0002 11.5855 17.0252C11.8105 17.6002 11.1355 18.1377 10.648 17.7627C8.38555 16.0502 8.14805 13.5877 8.34805 11.8252C8.42305 11.1752 7.57305 10.8627 7.21055 11.4002C6.36055 12.7002 5.49805 14.8002 5.49805 17.9627C5.97305 24.9627 11.8855 27.1127 14.0105 27.3877C17.048 27.7752 20.3355 27.2127 22.698 25.0502C25.298 22.6377 26.248 18.7877 24.848 15.4377ZM13.248 21.7252C15.048 21.2877 15.973 19.9877 16.223 18.8377C16.6355 17.0502 15.023 15.3002 16.1105 12.4752C16.523 14.8127 20.198 16.2752 20.198 18.8252C20.298 21.9877 16.873 24.7002 13.248 21.7252Z"
                fill="#F37A1F"
              />
            </svg>
          </div>

          <h3>Your Streak</h3>
          <p className="streak-description">
            Complete the assessment, & do your activity
          </p>

          <button className="complete-assessment-btn">
            Complete Assessment
          </button>
        </div>
      </div>

      {/* Welcome to Rewards */}
      <div className="rewards-section">
        <div className="rewards-content">
          <div className="medal-icon">
            <svg width="39" height="25" viewBox="0 0 39 25" fill="none">
              <path
                d="M13.8444 2.52712C13.6482 2.2001 13.2948 2 12.9135 2H2.41718C1.57326 2 1.052 2.92065 1.48619 3.64431L13.2119 23.1872C13.4081 23.5142 13.7615 23.7143 14.1429 23.7143H24.6392C25.4831 23.7143 26.0044 22.7936 25.5702 22.07L13.8444 2.52712Z"
                fill="#C52229"
              />
              <path
                d="M25.1546 2.52712C25.3508 2.2001 25.7042 2 26.0856 2H36.5818C37.4258 2 37.947 2.92065 37.5128 3.64431L25.7871 23.1872C25.5909 23.5142 25.2375 23.7143 24.8561 23.7143H14.3599C13.5159 23.7143 12.9947 22.7936 13.4289 22.07L25.1546 2.52712Z"
                fill="#F1333B"
              />
            </svg>
          </div>

          <div className="rewards-text">
            <h3>Welcome to rewards</h3>
            <p>Use Reward Points for free session</p>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="medal-small">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M15.3281 8.45735C15.3281 12.5047 12.047 15.7858 7.9995 15.7858C3.95202 15.7858 0.670898 12.5047 0.670898 8.45735C0.670898 4.40996 3.95202 1.12891 7.9995 1.12891C12.047 1.12891 15.3281 4.40996 15.3281 8.45735Z"
                fill="#BCCCD2"
              />
            </svg>
          </div>
        </div>

        <button className="claim-reward-btn">Claim reward</button>
      </div>

      {/* Upcoming Events */}
      <div className="upcoming-events">
        <div className="events-header">
          <h4>Upcoming Events</h4>
          <svg width="17" height="19" viewBox="0 0 17 19" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.9546 3.70085C2.50272 3.70085 2.1364 4.06717 2.1364 4.51905V15.9739C2.1364 16.4257 2.50272 16.7921 2.9546 16.7921H14.4094C14.8613 16.7921 15.2276 16.4257 15.2276 15.9739V4.51905C15.2276 4.06717 14.8613 3.70085 14.4094 3.70085H2.9546ZM0.5 4.51905C0.5 3.16341 1.59896 2.06445 2.9546 2.06445H14.4094C15.765 2.06445 16.864 3.16341 16.864 4.51905V15.9739C16.864 17.3295 15.765 18.4285 14.4094 18.4285H2.9546C1.59896 18.4285 0.5 17.3295 0.5 15.9739V4.51905Z"
              fill="#003A5D"
            />
          </svg>
        </div>

        <div className="events-content">
          <p className="event-date">12 Oct ,23</p>
          <button className="complete-assessment-btn">
            Complete Assessment
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="banner-section">
        <div className="banner-placeholder"></div>
        <div className="banner-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </aside>
  );
}
