"use client";

import ProgressBanner from "./ProgressBanner";
import LearningCard from "./LearningCard";
import MobileAppShowcase from "./MobileAppShowcase";

export default function MicroLearnings() {
  const learningCards = [
    {
      title: "What is Microlearning?",
      description:
        "Microlearning offers quick, focused reads to help you manage mental health one step at a time.",
      tags: ["Beginner", "Overview", "2-min read"],
    },
    {
      title: "Why Short Reads Help",
      description:
        "Learn how bite-sized articles reduce overwhelm and help you make steady progress.",
      tags: ["Beginner", "Motivation", "2-min read"],
    },
    {
      title: "Personalize Your Learning",
      description: "Get tailored recommendations by taking a short assessment.",
      tags: ["Interactive", "Overview", "2-min read"],
    },
  ];

  return (
    <main className="micro-learnings-page">
      <div className="micro-learnings-content">
        <div className="page-header">
          <h1>Hi, Imdad. Here's what you can learn today</h1>
        </div>

        <ProgressBanner />

        <div className="micro-learnings-section">
          <div className="section-header">
            <h2>Micro Learnings</h2>
            <p>
              short reads designed to support your well-being. Complete your
              assessment to get personalized suggestions.
            </p>
          </div>

          <div className="learning-cards-grid">
            {learningCards.map((card, index) => (
              <LearningCard
                key={index}
                title={card.title}
                description={card.description}
                tags={card.tags}
              />
            ))}
          </div>
        </div>

        <MobileAppShowcase />
      </div>
    </main>
  );
}
