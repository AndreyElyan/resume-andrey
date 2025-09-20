import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface ProjectNavigationProps {
  onBackToProjects: () => void;
  onNextProject: () => void;
  onPreviousProject: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  isMobile: boolean;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  onBackToProjects,
  onNextProject,
  onPreviousProject,
  hasNext,
  hasPrevious,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex space-x-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBackToProjects}
            className="flex-1 py-3 bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-dark-600"
          >
            ← {t("projects.navigation.backToProjects")}
          </motion.button>
          {hasNext && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onNextProject}
              className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-xl"
            >
              {t("projects.navigation.nextProject")} →
            </motion.button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 bg-white/95 dark:bg-dark-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToProjects}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <span className="mr-2">←</span>
            {t("projects.navigation.backToProjects")}
          </motion.button>
          <div className="flex space-x-4">
            {hasPrevious && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPreviousProject}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                ← {t("projects.navigation.previousProject")}
              </motion.button>
            )}
            {hasNext && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNextProject}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {t("projects.navigation.nextProject")} →
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNavigation;
