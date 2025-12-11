import { ThemeToggle } from "../components/themeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navigation bar */}
      <NavBar />
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
};
