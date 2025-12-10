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
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const density = window.innerWidth < 768 ? 20000 : 10000;
      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / density
      );

      const newStars = [];

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

    const generateMeteors = () => {
      const numberOfMeteors = window.innerWidth < 768 ? 2 : 4;
      const newMeteors = [];

      for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100 + "%",
          y: Math.random() * 20 + "%",
          delay: Math.random() * 15,
          animationDuration: Math.random() * 3 + 3,
        });
      }
      setMeteors(newMeteors);
    };

    // Initial generation
    generateStars();
    generateMeteors();

    // Update stars on resize
    window.addEventListener("resize", generateStars);

    // Cleanup
    return () => {
      window.removeEventListener("resize", generateStars);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
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
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`, // make trail visible
            height: `${meteor.size}px`,
            left: meteor.x,
            top: meteor.y,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
