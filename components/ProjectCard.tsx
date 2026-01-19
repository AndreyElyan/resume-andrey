import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { ArrowRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group cursor-pointer overflow-hidden
        ${isMobile ? "w-full mb-6 rounded-2xl" : "w-full h-full rounded-2xl"}
        backdrop-blur-xl bg-white/5
        border border-white/10
        shadow-lg hover:shadow-2xl hover:shadow-purple-500/20
        transition-all duration-300 ease-out
      `}
      onClick={onClick}
    >
      {/* Gradient glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-indigo-500/20 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          width={400}
          height={224}
          priority={false}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Category badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
          {project.shortTitle}
        </div>

        {/* Hover overlay with shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/30 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"
          style={{ transition: 'transform 0.7s ease-in-out, opacity 0.3s' }}
        />

        {/* View Details button - Desktop */}
        {!isMobile && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 flex items-center gap-2"
            >
              {t("projects.navigation.viewDetails")}
              <ArrowRight size={18} />
            </motion.div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-6 z-20">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-blue-400 text-sm sm:text-base mb-3 font-medium">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-white/60 text-sm sm:text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white/80 text-xs font-medium rounded-full border border-white/10">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Mobile View Details button */}
        {isMobile && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 hover:shadow-purple-500/40 transition-all duration-300"
          >
            {t("projects.navigation.viewDetails")}
            <ArrowRight size={18} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
