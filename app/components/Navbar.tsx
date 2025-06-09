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
              {/* Back layer - lighter purple/gray organic petals */}
              <path
                d="M21 2C26 0 31 4 32 9C36 6 41 10 40 15C44 17 45 22 41 25C44 28 43 33 40 35C41 40 36 43 32 40C31 45 26 47 21 44C16 47 11 45 10 40C6 43 1 40 2 35C-1 33 -2 28 2 25C-1 22 0 17 4 15C3 10 7 6 10 9C11 4 16 0 21 2Z"
                fill="url(#outerGrayPurple)"
                opacity="0.7"
              />

              {/* Middle layer - teal/mint flowing organic shape */}
              <path
                d="M21 4C25 2 29 5 30 10C33 7 37 11 36 15C39 17 40 21 37 23C40 26 39 30 36 32C37 36 33 39 30 37C29 41 25 43 21 41C17 43 13 41 12 37C9 39 5 36 6 32C3 30 2 26 5 23C2 21 3 17 6 15C5 11 9 7 12 10C13 5 17 2 21 4Z"
                fill="url(#tealMintShape)"
                opacity="0.85"
              />

              {/* Main central purple brain shape with R */}
              <path
                d="M21 6C24.5 4 28.5 7.5 29.5 12C31.5 9.5 35 13 34 17C36.5 18.5 37.5 22.5 34.5 25C37 27.5 36 31.5 33.5 33C34.5 36.5 31 39 28.5 37C27.5 40.5 23.5 42 21 39.5C18.5 42 14.5 40.5 13.5 37C11 39 7.5 36.5 8.5 33C6 31.5 5 27.5 7.5 25C4.5 22.5 5.5 18.5 8 17C7 13 10.5 9.5 12.5 12C13.5 7.5 17.5 4 21 6Z"
                fill="url(#mainPurpleBrain)"
              />

              {/* White R character integrated into the design */}
              <g fill="white">
                <path d="M16.5 15H20.5C22 15 23.2 16.2 23.2 17.7C23.2 18.8 22.6 19.7 21.8 20.1L24 24H21.5L19.8 20.5H18.2V24H16.5V15Z" />
                <path d="M18.2 18.8H20.3C20.8 18.8 21.2 18.4 21.2 17.9C21.2 17.4 20.8 17 20.3 17H18.2V18.8Z" />
              </g>

              {/* Small decorative organic dots around the edges */}
              <ellipse
                cx="33"
                cy="12"
                rx="2.5"
                ry="2"
                fill="#A7F3D0"
                opacity="0.6"
                transform="rotate(25 33 12)"
              />
              <ellipse
                cx="8"
                cy="28"
                rx="2"
                ry="2.5"
                fill="#DDD6FE"
                opacity="0.5"
                transform="rotate(-15 8 28)"
              />
              <ellipse
                cx="35"
                cy="28"
                rx="1.8"
                ry="2.2"
                fill="#93C5FD"
                opacity="0.4"
                transform="rotate(35 35 28)"
              />
              <ellipse
                cx="6"
                cy="15"
                rx="1.5"
                ry="2"
                fill="#C4B5FD"
                opacity="0.5"
                transform="rotate(-25 6 15)"
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
