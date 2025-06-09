export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-container">
          <svg
            width="119"
            height="42"
            viewBox="0 0 119 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-image"
          >
            {/* Organic brain-like logo matching the provided image exactly */}
            <g>
              {/* Back layer - lighter purple/gray organic brain petals */}
              <path
                d="M21 1C27 -1 33 4 35 10C39 7 44 12 43 18C47 20 48 26 44 29C47 33 46 39 43 41C44 47 39 50 35 47C34 53 28 55 21 52C14 55 8 53 7 47C3 50 -2 47 -1 41C-4 39 -5 33 -1 29C-4 26 -3 20 1 18C0 12 4 7 7 10C8 4 14 -1 21 1Z"
                fill="url(#outerGrayPurple)"
                opacity="0.6"
              />

              {/* Middle layer - teal/mint flowing organic shape */}
              <path
                d="M21 3C26 1 31 5 32 11C36 8 40 13 39 18C42 20 43 25 40 28C43 31 42 36 39 38C40 43 36 46 32 44C31 48 26 50 21 47C16 50 11 48 10 44C6 46 2 43 3 38C0 36 -1 31 2 28C-1 25 0 20 3 18C2 13 6 8 10 11C11 5 16 1 21 3Z"
                fill="url(#tealMintShape)"
                opacity="0.8"
              />

              {/* Main central purple brain shape */}
              <path
                d="M21 5C25 3 29 7 30 12C33 9 37 13 36 17C38 19 39 23 36 25C39 28 38 32 35 34C36 38 32 41 29 39C28 43 24 45 21 42C18 45 14 43 13 39C10 41 6 38 7 34C4 32 3 28 6 25C3 23 4 19 7 17C6 13 10 9 13 12C14 7 18 3 21 5Z"
                fill="url(#mainPurpleBrain)"
              />

              {/* Stylized R with document-style internal lines */}
              <g fill="white">
                {/* Main R outline */}
                <path d="M15 14H20.5C22.2 14 23.5 15.3 23.5 17C23.5 18.3 22.7 19.4 21.6 19.8L24 25H21.3L19.4 20.2H17.2V25H15V14Z" />
                <path d="M17.2 17.8H20C20.7 17.8 21.2 17.3 21.2 16.8C21.2 16.3 20.7 15.8 20 15.8H17.2V17.8Z" />

                {/* Document-style horizontal lines inside the R */}
                <g opacity="0.9">
                  <rect
                    x="15.8"
                    y="15.2"
                    width="3.2"
                    height="0.3"
                    fill="white"
                  />
                  <rect x="15.8" y="16" width="3.2" height="0.3" fill="white" />
                  <rect
                    x="15.8"
                    y="16.8"
                    width="2.8"
                    height="0.3"
                    fill="white"
                  />
                  <rect
                    x="15.8"
                    y="18.5"
                    width="2.2"
                    height="0.3"
                    fill="white"
                  />
                  <rect
                    x="15.8"
                    y="19.3"
                    width="2.2"
                    height="0.3"
                    fill="white"
                  />
                  <rect
                    x="15.8"
                    y="20.1"
                    width="2.2"
                    height="0.3"
                    fill="white"
                  />
                  <rect
                    x="15.8"
                    y="20.9"
                    width="2.2"
                    height="0.3"
                    fill="white"
                  />
                  <rect
                    x="15.8"
                    y="21.7"
                    width="2.2"
                    height="0.3"
                    fill="white"
                  />
                  <rect
                    x="15.8"
                    y="22.5"
                    width="2.2"
                    height="0.3"
                    fill="white"
                  />
                  <rect
                    x="15.8"
                    y="23.3"
                    width="2.2"
                    height="0.3"
                    fill="white"
                  />
                  <rect
                    x="15.8"
                    y="24.1"
                    width="1.8"
                    height="0.3"
                    fill="white"
                  />
                </g>
              </g>

              {/* Small decorative organic dots around the edges */}
              <ellipse
                cx="34"
                cy="10"
                rx="2.2"
                ry="1.8"
                fill="#A7F3D0"
                opacity="0.6"
                transform="rotate(25 34 10)"
              />
              <ellipse
                cx="6"
                cy="30"
                rx="1.8"
                ry="2.2"
                fill="#DDD6FE"
                opacity="0.5"
                transform="rotate(-15 6 30)"
              />
              <ellipse
                cx="36"
                cy="30"
                rx="1.6"
                ry="2"
                fill="#93C5FD"
                opacity="0.4"
                transform="rotate(35 36 30)"
              />
              <ellipse
                cx="4"
                cy="14"
                rx="1.4"
                ry="1.8"
                fill="#C4B5FD"
                opacity="0.5"
                transform="rotate(-25 4 14)"
              />
              <ellipse
                cx="32"
                cy="38"
                rx="1.5"
                ry="1.2"
                fill="#BFDBFE"
                opacity="0.4"
                transform="rotate(15 32 38)"
              />
            </g>

            {/* Typography exactly matching the image */}
            <g>
              <text
                x="46"
                y="19"
                fill="#6366F1"
                fontSize="18"
                fontWeight="700"
                fontFamily="Inter, sans-serif"
              >
                Refill
              </text>
              <text
                x="46"
                y="35"
                fill="#059669"
                fontSize="16"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
              >
                Health
              </text>
            </g>

            <defs>
              <radialGradient id="outerGrayPurple" cx="50%" cy="50%" r="85%">
                <stop offset="0%" stopColor="#E0E7FF" />
                <stop offset="30%" stopColor="#C4B5FD" />
                <stop offset="70%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#9CA3AF" />
              </radialGradient>

              <radialGradient id="tealMintShape" cx="45%" cy="45%" r="80%">
                <stop offset="0%" stopColor="#CCFBF1" />
                <stop offset="30%" stopColor="#A7F3D0" />
                <stop offset="60%" stopColor="#6EE7B7" />
                <stop offset="100%" stopColor="#34D399" />
              </radialGradient>

              <radialGradient id="mainPurpleBrain" cx="50%" cy="50%" r="75%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="25%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#7C3AED" />
                <stop offset="75%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#4F46E5" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="nav-center">
        <div className="search-container">
          <div className="search-bar">
            <div className="search-content">
              <span className="search-placeholder">
                What are you looking for?
              </span>
            </div>
            <div className="search-icon-container">
              <svg
                className="search-icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                  fill="#3F4947"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-icons">
          <div className="notification-icon">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="15" fill="#F8FCFF" />
              <path
                d="M15.0004 29.6004C23.0637 29.6004 29.6004 23.0637 29.6004 15.0004C29.6004 6.93703 23.0637 0.400391 15.0004 0.400391C6.93703 0.400391 0.400391 6.93703 0.400391 15.0004C0.400391 23.0637 6.93703 29.6004 15.0004 29.6004Z"
                stroke="#9FF2E2"
                strokeWidth="0.8"
              />
              <path
                d="M17.8217 7.28613H12.1787C11.0741 7.28613 10.1787 8.18156 10.1787 9.28613V20.7151C10.1787 21.8197 11.0741 22.7151 12.1787 22.7151H17.8217C18.9263 22.7151 19.8217 21.8197 19.8217 20.7151V9.28613C19.8217 8.18156 18.9263 7.28613 17.8217 7.28613Z"
                stroke="#006B5F"
              />
              <path d="M16.4531 18.8145H14.1621" stroke="#006B5F" />
            </svg>
          </div>

          <div className="bell-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.13275 4.67775C9.207 3.6035 10.664 3 12.1832 3C13.7024 3 15.1594 3.6035 16.2336 4.67775C17.3079 5.75199 17.9114 7.20898 17.9114 8.7282C17.9114 11.4717 18.4982 13.1754 19.0389 14.1668C19.3105 14.6646 19.5748 14.9911 19.7585 15.185C19.8505 15.2822 19.9229 15.3466 19.9664 15.3829C19.9882 15.401 20.0028 15.4122 20.0091 15.4168C20.0101 15.4176 20.0109 15.4181 20.0114 15.4186C20.3048 15.6201 20.4346 15.9887 20.3312 16.3302C20.2267 16.6753 19.9086 16.9113 19.548 16.9113H4.81838C4.45777 16.9113 4.13967 16.6753 4.03518 16.3302C3.93179 15.9887 4.0616 15.6201 4.35496 15.4186C4.35553 15.4181 4.35631 15.4176 4.3573 15.4168C4.3636 15.4122 4.37821 15.401 4.39999 15.3829C4.44354 15.3466 4.51586 15.2822 4.6079 15.185C4.79156 14.9911 5.05594 14.6646 5.32745 14.1668C5.86822 13.1754 6.455 11.4717 6.455 8.7282C6.455 7.20898 7.05851 5.75199 8.13275 4.67775Z"
                fill="#006B5F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3571 18.6585C10.748 18.4317 11.2487 18.5648 11.4755 18.9557C11.5474 19.0797 11.6507 19.1826 11.7749 19.2542C11.8991 19.3257 12.04 19.3634 12.1833 19.3634C12.3267 19.3634 12.4676 19.3257 12.5918 19.2542C12.716 19.1826 12.8193 19.0797 12.8912 18.9557C13.118 18.5648 13.6187 18.4317 14.0096 18.6585C14.4006 18.8852 14.5336 19.386 14.3069 19.7769C14.0911 20.1489 13.7813 20.4577 13.4086 20.6724C13.036 20.887 12.6134 21 12.1833 21C11.7533 21 11.3307 20.887 10.9581 20.6724C10.5854 20.4577 10.2756 20.1489 10.0598 19.7769C9.83305 19.386 9.96613 18.8852 10.3571 18.6585Z"
                fill="#006B5F"
              />
            </svg>
          </div>

          <div className="profile-section">
            <div className="profile-info">
              <div className="avatar">
                <span>J</span>
              </div>
              <div className="user-details">
                <div className="user-name">Johnathon Doe</div>
                <div className="user-role">Admin</div>
              </div>
            </div>
            <svg
              className="dropdown-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.20921 7.70921C5.48816 7.43026 5.94042 7.43026 6.21936 7.70921L10 11.4898L13.7806 7.70921C14.0596 7.43026 14.5118 7.43026 14.7908 7.70921C15.0697 7.98816 15.0697 8.44042 14.7908 8.71936L10.5051 13.0051C10.2261 13.284 9.77387 13.284 9.49492 13.0051L5.20921 8.71936C4.93026 8.44042 4.93026 7.98816 5.20921 7.70921Z"
                fill="#006B5F"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
