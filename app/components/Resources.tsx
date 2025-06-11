"use client";

import ResourceFilters from "./ResourceFilters";
import ResourceCard from "./ResourceCard";

export default function Resources() {
  const resourceData = [
    {
      type: "article",
      title: "How to Recognize Burnout Before It Hits You",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2025",
      image: "/api/placeholder/406/240",
    },
    {
      type: "podcast",
      title: "Imposter Syndrom",
      tags: ["Psychology", "Life", "Education"],
      duration: "2h 32 minutes",
    },
    {
      type: "article",
      title: "How to Recognize Burnout Before It Hits You",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2025",
      image: "/api/placeholder/406/240",
    },
    {
      type: "video",
      title: "How to Recognize Burnout Before It Hits You",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2025",
      thumbnail: "/api/placeholder/1029/240",
    },
  ];

  return (
    <div className="resources-page">
      <div className="resources-content">
        {/* Header Section */}
        <div className="resources-header">
          <div className="header-text">
            <h1 className="page-title">
              Hi, Imdad. Here's what you can learn today
            </h1>
            <p className="page-subtitle">
              Stay informed with the latest articles, blogs, and tools on
              wellness, therapy, productivity, and more.
            </p>
          </div>

          {/* Search Section */}
          <div className="search-section">
            <div className="search-input-container">
              <svg
                className="search-icon"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0998 5.04996C7.62052 5.04996 4.79996 7.87052 4.79996 11.3498C4.79996 14.8292 7.62052 17.6497 11.0998 17.6497C14.5792 17.6497 17.3997 14.8292 17.3997 11.3498C17.3997 7.87052 14.5792 5.04996 11.0998 5.04996ZM3 11.3498C3 6.87642 6.62642 3.25 11.0998 3.25C15.5733 3.25 19.1997 6.87642 19.1997 11.3498C19.1997 15.8233 15.5733 19.4497 11.0998 19.4497C6.62642 19.4497 3 15.8233 3 11.3498Z"
                  fill="#CCCCCC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5488 15.7988C15.9002 15.4473 16.4701 15.4473 16.8215 15.7988L20.7364 19.7137C21.0879 20.0651 21.0879 20.635 20.7364 20.9864C20.385 21.3379 19.8151 21.3379 19.4637 20.9864L15.5488 17.0715C15.1973 16.7201 15.1973 16.1502 15.5488 15.7988Z"
                  fill="#CCCCCC"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles, topics, or symptoms..."
                className="search-input"
              />
            </div>
            <button className="search-button">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M5.93198 10.2624C4.50892 10.2624 3.30378 9.76885 2.31656 8.78177C1.32948 7.79455 0.835938 6.58941 0.835938 5.16635C0.835938 3.7433 1.32948 2.53816 2.31656 1.55094C3.30378 0.563854 4.50892 0.0703125 5.93198 0.0703125C7.35503 0.0703125 8.56017 0.563854 9.5474 1.55094C10.5345 2.53816 11.028 3.7433 11.028 5.16635C11.028 5.76149 10.9282 6.3299 10.7284 6.87156C10.5286 7.41323 10.262 7.88434 9.92865 8.2849L14.7236 13.0799C14.8391 13.1952 14.8981 13.3402 14.9007 13.5149C14.9034 13.6896 14.8443 13.8373 14.7236 13.958C14.603 14.0787 14.4566 14.1391 14.2845 14.1391C14.1125 14.1391 13.9662 14.0787 13.8455 13.958L9.05052 9.16302C8.63385 9.50705 8.15469 9.77628 7.61302 9.97073C7.07135 10.1652 6.51101 10.2624 5.93198 10.2624ZM5.93198 9.0126C7.00573 9.0126 7.91517 8.63997 8.66031 7.89469C9.40559 7.14955 9.77823 6.2401 9.77823 5.16635C9.77823 4.0926 9.40559 3.18316 8.66031 2.43802C7.91517 1.69274 7.00573 1.3201 5.93198 1.3201C4.85823 1.3201 3.94878 1.69274 3.20365 2.43802C2.45837 3.18316 2.08573 4.0926 2.08573 5.16635C2.08573 6.2401 2.45837 7.14955 3.20365 7.89469C3.94878 8.63997 4.85823 9.0126 5.93198 9.0126Z"
                  fill="white"
                />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <ResourceFilters />

        {/* Resource Cards */}
        <div className="resources-grid">
          {resourceData.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="cta-banner">
          <div className="cta-content">
            <div className="cta-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M0.417969 0.667969H13.1209V13.3709H0.417969V0.667969ZM16.8817 0.667969H29.5846V13.3709H16.8817V0.667969ZM0.417969 17.1317H13.1209V29.8346H0.417969V17.1317ZM22.1913 17.1317H24.2855V22.4309H29.5846V24.5246H24.2855V29.8346H22.1913V24.5246H16.8817V22.4309H22.1913V17.1317ZM18.9755 2.76214V11.2771H27.4905V2.76214H18.9755ZM2.51214 2.76214V11.2771H11.0271V2.76214H2.51214ZM2.51214 19.2255V27.7405H11.0271V19.2255H2.51214Z"
                  fill="#1C1B1F"
                />
              </svg>
            </div>
            <div className="cta-text">
              <h3>Want more curated content?</h3>
              <p>
                Take your assessments and goals setup to unlock personalized
                learning.
              </p>
            </div>
          </div>
          <button className="cta-button">Goals & Asssessmmet</button>
        </div>
      </div>
    </div>
  );
}
