import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { ExternalLink } from "lucide-react";
import OptimizedImage from "../../OptimizedImage";

interface ProjectHeaderProps {
  project: {
    title: string;
    subtitle: string;
  };
  heroImage: string;
  demoUrl?: string;
  isMobile: boolean;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  project,
  heroImage,
  demoUrl,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border border-white/10">
          <OptimizedImage
            src={heroImage}
            alt={project.title}
            width={400}
            height={192}
            priority={false}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        <h1 className="text-2xl font-bold mb-2">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {project.title}
          </span>
        </h1>
        <p className="text-white/60 text-sm mb-4">
          {project.subtitle}
        </p>

        {demoUrl && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
            onClick={() => window.open(demoUrl, "_blank")}
          >
            {t("projects.navigation.viewLiveDemo")}
            <ExternalLink size={16} />
          </motion.button>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          {/* Icon badges with glassmorphism */}
          <div className="flex items-center mb-6 gap-3">
            <motion.div
              className="w-14 h-14 backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-white/10"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="text-2xl">🏗️</span>
            </motion.div>
            <motion.div
              className="w-11 h-11 backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center border border-white/10"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <span className="text-xl">📡</span>
            </motion.div>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          <p className="text-xl text-white/60 mb-8">
            {project.subtitle}
          </p>

          {demoUrl && (
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 flex items-center gap-2 overflow-hidden group"
              onClick={() => window.open(demoUrl, "_blank")}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative z-10">{t("projects.navigation.viewLiveDemo")}</span>
              <ExternalLink size={18} className="relative z-10" />
            </motion.button>
          )}
        </div>

        <div className="relative group">
          {/* Glow effect behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10">
            <OptimizedImage
              src={heroImage}
              alt={project.title}
              width={600}
              height={320}
              priority={false}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectHeader;
