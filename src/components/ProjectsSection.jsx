import { ArrowBigRight, ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";
// Lists of projects:
const projects = [
  // Project 1:
  {
    id: 1,
    title: "My First page",
    description: "My first website with plain HTML, CSS and JavaScript.",
    image: "/projects/project1.png",
    tags: ["HTML 5", "CSS 3", "JavaScript"],
    demoUrl: "https://kristiansfirstwebsite.netlify.app/",
    githubUrl:
      "https://github.com/Noroff-FEU-Assignments/cross-course-project-KristianHaugen98",
  },
  // Project 2:
  {
    id: 1,
    title: "Action Bidding",
    description:
      "Action website where people you can view actions and place bids with profile page.",
    image: "/projects/project2.png",
    tags: [
      "HTML 5",
      "CSS 3",
      "Boostrap CSS",
      "Playwright Testing",
      "JavaScript",
    ],
    demoUrl: "https://actionbidding.netlify.app/",
    githubUrl: "https://github.com/KristianHaugen98/Action-Bidding",
  },
  // project 3 (Side project):
  {
    id: 1,
    title: "YouTube",
    description:
      "I also makes YouTube videoes, where i play video games and do IRL stuff.",
    image: "/projects/youtube.png",
    tags: ["Gaming", "Entertainment", "Tutorials"],
    demoUrl: "https://www.youtube.com/@MrPartyGamer",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto relative">
          My projects, more will come as time goes. Im learning every dag, and
          staying up do date with tech news, or games!
        </p>

        {/* Displaying the projects in cards: */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Looping though projects: */}
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              {/* Applying tags to it: */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  )) ?? null}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* Takes user to the website: */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colours duration-300"
                    >
                      <ExternalLink />
                    </a>
                    {/* Only show GitHub for first two projects, because project 3 is not a programming project: */}
                    {key < 2 && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="text-foreground/80 hover:text-primary transition-colors duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*Link to our general GitHub: */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/KristianHaugen98"
            target="_blank"
          >
            My GitHub
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
