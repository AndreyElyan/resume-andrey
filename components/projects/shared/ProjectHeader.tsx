import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
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
        <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
          <OptimizedImage
            src={heroImage}
            alt={project.title}
            width={400}
            height={192}
            priority={false}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-300 text-sm mb-4">{project.subtitle}</p>

        {demoUrl && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl"
            onClick={() => window.open(demoUrl, "_blank")}
          >
            {t("projects.navigation.viewLiveDemo")}
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
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl">🏗️</span>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-xl">📡</span>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>

          {demoUrl && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              onClick={() => window.open(demoUrl, "_blank")}
            >
              {`${t("projects.navigation.viewLiveDemo")} →`}
            </motion.button>
          )}
        </div>

        <div className="relative">
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <OptimizedImage
              src={heroImage}
              alt={project.title}
              width={600}
              height={320}
              priority={false}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectHeader;
