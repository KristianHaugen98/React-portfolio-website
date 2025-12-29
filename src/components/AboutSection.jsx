import { Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-35 px4 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {" "}
          About <span className="text-primary">Me</span>{" "}
        </h2>
        {/* Left about me section: */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">More about me:</h3>
            <p className="text-muted-foreground">
              Front-End Development student at Noroff, graduating summer 2026.
              I’m passionate about building clean, fast, and accessible websites
              with great user experiences. <br />
              Right now I’m deep into React with Tailwind CSS, responsive
              design, and modern workflows — and I love seeing my projects come
              to life. I place strong emphasis on security best practices in
              every project. I understand that a beautiful, fast website is only
              valuable if it’s also safe for users. From secure data handling
              and protecting against common vulnerabilities. <br />I also have
              knowledge of testing as well, to make sure the the websites work
              properly.
              <br /> <br /> Alongside my studies. I work as a Sales Associate at
              Harddisk Datapartner AS, where I help customers daily with PCs,
              phones, components, and accessories. I troubleshoot and fix issues
              on the spot (phones, computers, custom builds, you name it), so I
              bring real-world IT expertise and strong customer-facing skills to
              everything I do.
              <br /> <br /> I also love to work out, be social and learn new
              skills. I`m exited about the futhure, and think about things we
              can do to make the world a better place for all <br /> <br /> I’m
              excited to combine fresh front-end knowledge with years of
              hands-on tech experience when I enter the industry full-time.
              Always up for a chat about code, projects, or future
              opportunities.
              <br /> <br /> Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* CV link wil go here, change #contact with CV link!*/}
              <a
                href=""
                download="CV_Kristian_Haugen_2026.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
            </div>
          </div>
          {/* Right about me section (With cards): */}

          <div className="grid grid-cols-1 gap-6">
            {/* Clickable Harddisk card */}
            <a
              href="https://harddisk.no"
              target="_blank"
              rel="noopener noreferrer"
              className="block gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Part-time at Harddisk Datapartner AS
                  </h4>
                  <p className="text-muted-foreground">
                    Total supplier of computer equipment and services for
                    businesses and individuals. <br /> <br />
                    *Click on card to go to their website*
                  </p>
                </div>
              </div>
            </a>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* I might delete or edit this part */}
                <div className="p-3 rounded bg-primary/20">
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Future Focus: </h4>
                    <p className="text-muted-foreground">
                      {" "}
                      After graduating in summer 2026, I’m ready to step into a
                      front-end role where I can deliver clean, responsive, and
                      performant web experiences. I’m passionate about mastering
                      React, Vite, Tailwind, and state management (like
                      Zustand), with a growing interest in TypeScript,
                      accessibility, and security best practices. My goal is to
                      join a collaborative team, contribute from day one, and
                      build user-centered applications that are fast, beautiful,
                      and built to last.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
