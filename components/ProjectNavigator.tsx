import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  icon: string;
  technologies: string[];
  keyResults: string[];
  link?: string;
}

interface ProjectNavigatorProps {
  onProjectSelect: (projectId: string) => void;
  currentProject?: string;
  hasExploredOnce?: boolean;
}

const ProjectNavigator = ({
  onProjectSelect,
  currentProject,
  hasExploredOnce = false,
}: ProjectNavigatorProps) => {
  const { t } = useTranslation("common");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "gbRastreio",
      title: t("projects.gbRastreio.title"),
      subtitle: t("projects.gbRastreio.subtitle"),
      description: t("projects.gbRastreio.description"),
      gradient: "from-blue-600 via-purple-600 to-indigo-600",
      icon: "🏷️",
      technologies: [
        "NestJS",
        "AWS",
        "RFID",
        "Microservices",
        "DynamoDB",
        "S3 + Athena",
      ],
      keyResults: [
        t("projects.gbRastreio.results.scale.item1"),
        t("projects.gbRastreio.results.cost.item1"),
        t("projects.gbRastreio.results.business.item1"),
      ],
      link: "https://rastreabilidade.demanda-abastecimento.grupoboticario.digital/",
    },
    {
      id: "vendaUnificada",
      title: t("projects.vendaUnificada.title"),
      subtitle: t("projects.vendaUnificada.subtitle"),
      description: t("projects.vendaUnificada.description"),
      gradient: "from-pink-600 via-red-600 to-orange-600",
      icon: "🛒",
      technologies: [
        "React Native",
        "GraphQL",
        "Keycloak",
        "Node.js",
        "RFID",
        "Mobile",
      ],
      keyResults: [
        t("projects.vendaUnificada.results.efficiency.item1"),
        t("projects.vendaUnificada.results.technology.item1"),
        t("projects.vendaUnificada.results.business.item1"),
      ],
    },
    {
      id: "caixaAutoatendimento",
      title: t("projects.caixaAutoatendimento.title"),
      subtitle: t("projects.caixaAutoatendimento.subtitle"),
      description: t("projects.caixaAutoatendimento.description"),
      gradient: "from-green-600 via-teal-600 to-cyan-600",
      icon: "🏪",
      technologies: [
        "React",
        "Node.js",
        "RFID",
        "Payment APIs",
        "Touchscreen",
        "Self-Checkout",
      ],
      keyResults: [
        t("projects.caixaAutoatendimento.results.scale.item1"),
        t("projects.caixaAutoatendimento.results.efficiency.item1"),
        t("projects.caixaAutoatendimento.results.innovation.item1"),
      ],
    },
  ];

  useEffect(() => {
    if (currentProject) {
      const index = projects.findIndex((p) => p.id === currentProject);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [currentProject]);

  const nextProject = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);

    // Se já explorou uma vez, carrega automaticamente os detalhes
    if (hasExploredOnce) {
      onProjectSelect(projects[newIndex].id);
    }
  };

  const previousProject = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);

    // Se já explorou uma vez, carrega automaticamente os detalhes
    if (hasExploredOnce) {
      onProjectSelect(projects[newIndex].id);
    }
  };

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
    onProjectSelect(projectId);
  };

  const closePreview = () => {
    setSelectedProject(null);
  };

  const currentProjectData = projects[currentIndex];

  return (
    <div className="w-full">
      {/* Project Navigator Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {t("projects.navigation.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6"
        >
          {t("projects.navigation.subtitle")}
        </motion.p>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {currentIndex + 1} de {projects.length}
            </span>
            <div className="flex space-x-1">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
            {hasExploredOnce && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center ml-3"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                  {t("projects.navigation.autoLoad") || "Auto-load"}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Project Carousel */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={previousProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-dark-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-dark-700"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-dark-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-dark-700"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Project Cards Container */}
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex"
            animate={{ x: -currentIndex * 100 + "%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="w-full flex-shrink-0 px-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative h-96 bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden cursor-pointer group`}
                  onClick={() => handleProjectSelect(project.id)}
                >
                  {/* Background Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                    {/* Header */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{project.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">
                            {project.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-white/90 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white/80 text-sm font-semibold mb-3">
                        {t("projects.navigation.technologies")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleProjectSelect(project.id)}
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white/25 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/35 transition-all duration-300 group-hover:shadow-lg border border-white/20"
                      >
                        <span className="mr-2">
                          {t("projects.navigation.viewDetails")}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.button>

                      {project.link && (
                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-3 bg-white/15 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/25 transition-all duration-300 group-hover:shadow-lg border border-white/20"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => {
                setCurrentIndex(index);
                // Se já explorou uma vez, carrega automaticamente os detalhes
                if (hasExploredOnce) {
                  onProjectSelect(project.id);
                }
              }}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              <span className="text-sm font-medium">
                {project.id === "gbRastreio" && "GB Rastreio"}
                {project.id === "vendaUnificada" && "Venda Unificada"}
                {project.id === "caixaAutoatendimento" && "Autoatendimento"}
              </span>
              {index === currentIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">
                      {currentProjectData.icon}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full mr-3">
                          {t("projects.navigation.currentProject")}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {currentProjectData.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {currentProjectData.subtitle}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closePreview}
                    className="p-3 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-xl transition-colors duration-200 hover:scale-105"
                  >
                    <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t("projects.navigation.projectOverview")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {currentProjectData.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t("projects.navigation.technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {currentProjectData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Results */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t("projects.navigation.results")}
                  </h4>
                  <ul className="space-y-3">
                    {currentProjectData.keyResults.map((result) => (
                      <li
                        key={result}
                        className="flex items-start"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      closePreview();
                      onProjectSelect(selectedProject);
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <span className="mr-3 text-lg">
                      {t("projects.navigation.viewDetails")}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  {currentProjectData.link && (
                    <motion.a
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      href={currentProjectData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-5 h-5 mr-3" />
                      <span className="text-lg">
                        {t("projects.gbRastreio.viewPlatform")}
                      </span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectNavigator;
