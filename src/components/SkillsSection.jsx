import { useState } from "react";
import { cn } from "../lib/utils";

// All your skills — grouped by category:
const skills = [
  // Front-end:
  { name: "HTML 5 / CSS 3", category: "front-end" },
  { name: "JavaScript", category: "front-end" },
  { name: "React", category: "front-end" },
  { name: "Tailwind CSS", category: "front-end" },
  { name: "Bootstrap CSS", category: "front-end" },
  { name: "WordPress", category: "front-end" },

  // Design:
  { name: "General design", category: "design" },
  { name: "Figma", category: "design" },

  // Tools:
  { name: "Github", category: "tools" },
  { name: "Github Projects", category: "tools" },
  { name: "Github Desktop", category: "tools" },
  { name: "Visual Studio Code", category: "tools" },
  { name: "Playwright (testing)", category: "tools" },
  { name: "AI Prompter", category: "tools" },
];

// Buttons for filtering — "all" shows everything:
const categories = ["all", "front-end", "tools"];

export const SkillsSection = () => {
  // State to track which category button is active (starts with "all"):
  const [activeCategory, setActiveCategory] = useState("all");
  // Filter the skills based on the active category
  // If "all" → show everything
  // Otherwise → only show skills that match the category:
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    // Main skills section with light background:
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        {/* Filter Section: */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              // When clicked → update active category:
              onClick={() => setActiveCategory(category)}
              // cn() combines classes:
              // - base styles for all buttons
              // - active button gets primary color, others get secondary:
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary "
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of skill cards — responsive (1–3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                {/* Skill name */}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
