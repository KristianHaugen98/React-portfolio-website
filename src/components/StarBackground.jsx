import { useEffect, useState } from "react";
/* ──────────────────────────────────────────────────────────────
// It will have id, size, x, y, opacity, animationDuration

   STAR BACKGROUND COMPONENT
   Creates a beautiful animated starry sky behind your app

   HOW IT WORKS:
   • Generates hundreds of tiny white dots (stars)
   • Random size, position, opacity, and twinkle speed
   • Re-generates on window resize (so it fits any screen)
   • Uses absolute positioning + CSS animations
   • pointer-events-none → you can still click through it

   WHY IT'S COOL:
   • Pure React + CSS (no images or canvas)
   • Fully responsive
   • Feels magical on dark mode
   ────────────────────────────────────────────────────────────── */

export const StarBackground = () => {
  // Our array of star objects – starts empty
  const [stars, setStars] = useState([]);
  // Run once when component loads + every time window resizes
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      // More pixels = more stars (adjust 10000 to change density)
      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
      );

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1,
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 4 + 2,
        });
      }
      setStars(newStars);
    };
    // Create stars on first load
    generateStars();
    // Recreate when user resizes window
    window.addEventListener("resize", generateStars);
    // Clean up listener when component unmounts
    return () => window.removeEventListener("resize", generateStars);
  }, []); // Empty array = run only once
  return (
    // Full-screen invisible container behind everything
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.x,
            top: star.y,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationName: "pulse-subtle",
          }}
        />
      ))}
    </div>
  );
};
