import { ArrowDown } from "lucide-react"; // Arrow icon for "scroll down" indicator

export const HeroSection = () => {
  return (
    // Main hero section — takes full screen height:
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Content container — centered, max width for readability */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Main heading — name with staggered fade-in animation */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* Each span has its own delay so letters appear one by one */}
            <span className="opacity-0 animate-fade-in">
              Hey, my name is <br></br>{" "}
            </span>
            <span className="text-primary animate-fade-in-delay-1">
              Kristian{" "}
            </span>
            <span className="text-primary ml-2 animate-fade-in-delay-2">
              Haugen
            </span>
          </h1>
          {/* Introduction paragraph — appears after name */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-4">
            Front-End student at Noroff Building fast, responsive, and visually
            stunning websites — with smooth animations and a touch of cosmic
            flair. <br /> Currently launching real projects into orbit.
            <br />
            <br />
            And part-time Sales Associate / Advisor at Harddisk Datapartner AS
            <br />
            <strong className="text-foreground">
              Let’s create something extraterrestrial.
            </strong>
          </p>

          {/* Call-to-action button — fades in last */}
          {/* Photo + CTA – fades in last */}
          <div className="pt-8 animate-fade-in-delay-5">
            {/* Circular photo with cosmic glow */}
            <div className="relative mx-auto w-80 h-80">
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/images/me.png"
                  alt="Kristian Haugen"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Button below photo */}
            <div className="mt-10 pb-3">
              <a href="#projects" className="cosmic-button text-lg px-8 py-4">
                View my work
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator at the bottom — bounces to guide user, this also hides the scroll when using mobile*/}
      <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce  ">
        <span className="text-sm text-muted-foreground md-2 ">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
