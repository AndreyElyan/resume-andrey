import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import ProjectCard from "../ProjectCard";
import ProjectFilters from "../ProjectFilters";
import ProjectDetailView from "../ProjectDetailView";

const ProjectsSectionNew: React.FC = () => {
  const { t } = useTranslation("common");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = useMemo(
    () => [
      {
        id: "gbRastreio",
        title: t("projects.gbRastreio.title"),
        shortTitle: t("projects.gbRastreio.shortTitle"),
        subtitle: t("projects.gbRastreio.subtitle"),
        description: t("projects.gbRastreio.description"),
        technologies: [
          "NestJS",
          "AWS",
          "DynamoDB",
          "Lambda",
          "RFID",
          "TypeScript",
        ],
        gradient: "from-blue-600 to-purple-700",
        image: "/images/RFID-STORAGE.jpeg",
        category: "rfid",
      },
      {
        id: "vendaUnificada",
        title: t("projects.vendaUnificada.title"),
        shortTitle: t("projects.vendaUnificada.shortTitle"),
        subtitle: t("projects.vendaUnificada.subtitle"),
        description: t("projects.vendaUnificada.description"),
        technologies: [
          "React Native",
          "GraphQL",
          "Keycloak",
          "Node.js",
          "RFID",
        ],
        gradient: "from-orange-500 to-red-600",
        image: "/images/OMNI-SALE.jpeg",
        category: "omni",
      },
      {
        id: "caixaAutoatendimento",
        title: t("projects.caixaAutoatendimento.title"),
        shortTitle: t("projects.caixaAutoatendimento.shortTitle"),
        subtitle: t("projects.caixaAutoatendimento.subtitle"),
        description: t("projects.caixaAutoatendimento.description"),
        technologies: ["Node.js", "AWS", "RFID", "React", "Payment Gateway"],
        gradient: "from-green-600 to-teal-700",
        image: "/images/Self-Service Kiosk with RFID Technology.jpeg",
        category: "retail",
      },
    ],
    [t],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [projects, activeFilter]);

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    if (currentIndex < projects.length - 1) {
      setSelectedProject(projects[currentIndex + 1].id);
    }
  };

  const handlePreviousProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    if (currentIndex > 0) {
      setSelectedProject(projects[currentIndex - 1].id);
    }
  };

  if (selectedProject) {
    const currentProject = projects.find((p) => p.id === selectedProject);
    if (!currentProject) return null;

    const currentIndex = projects.findIndex((p) => p.id === selectedProject);
    const hasNext = currentIndex < projects.length - 1;
    const hasPrevious = currentIndex > 0;

    return (
      <ProjectDetailView
        project={currentProject}
        onBackToProjects={handleBackToProjects}
        onNextProject={handleNextProject}
        onPreviousProject={handlePreviousProject}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    );
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-dark-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            isMobile={isMobile}
          />
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`
                ${
                  isMobile
                    ? "space-y-6"
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                }
              `}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectSelect(project.id)}
                    isMobile={isMobile}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-lg">
              {t("projects.noProjectsFound")}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSectionNew;
