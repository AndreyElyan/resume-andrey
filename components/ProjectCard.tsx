import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import OptimizedImage from "./OptimizedImage";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    shortTitle: string;
    subtitle: string;
    description: string;
    technologies: string[];
    gradient: string;
    image: string;
    demoUrl?: string;
    githubUrl?: string;
  };
  onClick: () => void;
  isMobile?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  isMobile = false,
}) => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group cursor-pointer overflow-hidden
        ${isMobile ? "w-full mb-6 rounded-2xl" : "w-full h-full rounded-2xl"}
        bg-gradient-to-br ${project.gradient}
        shadow-lg hover:shadow-2xl
        transition-all duration-300 ease-out
      `}
      onClick={onClick}
    >
      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          width={400}
          height={224}
          priority={false}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* View Details button - Desktop */}
        {!isMobile && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {t("projects.navigation.viewDetails")}
            </motion.button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-6 z-20">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-blue-100 text-sm sm:text-base mb-3 font-medium">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-200 text-sm sm:text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Mobile View Details button */}
        {isMobile && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-200"
          >
            {t("projects.navigation.viewDetails")}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
