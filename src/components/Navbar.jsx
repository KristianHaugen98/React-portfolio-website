import { Menu, X } from "lucide-react"; // Icons for hamburger menu (open / close)
import { cn } from "../lib/utils"; // Utility to combine Tailwind classes safely
import { useEffect, useState } from "react"; // React hooks for state and side effects

// Navigation links:

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  // For sticky navbar effect, this checks if user has scrolled down:
  const [isScrolled, setIsScrolled] = useState(false);
  // Open / close menu mobile state:
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change navbar style when scrolled past 10px:
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // REmove listener when component unmounts and prevents memory leaks:
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Run only once

  return (
    <nav
      // Fixed at top, full width, high z-index so its always on top:
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        // When scrolled: Smaller padding, blured background and shadow:
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-lg" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo / Name — clickable link to top of page */}
        <a
          className="text-lg sm:text-xl md:text-2xl font-bold text-primary flex items-center pl-4 sm:pl-6 md:pl-10 lg:pl-16"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="hidden md:block text-glow text-foreground">
              Kristian Haugen
            </span>
            <span className="hidden md:block lg:inline ml-2 text-foreground/80">
              Portfolio
            </span>
          </span>
        </a>
        {/* desktop nav this is hidden on mobile*/}
        <div className="hidden md:flex space-x-8 text-sm lg:text-base">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}{" "}
            </a>
          ))}
        </div>
        {/* mobile nav with toggle button menu and only shows on smaller screens*/}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-5.5 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {" "}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>
        {/* Mobile Full-Screen Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-12">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}{" "}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
