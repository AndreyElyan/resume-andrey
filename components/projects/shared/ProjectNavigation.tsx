import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
      <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/90 border-t border-white/10 p-4">
        <div className="flex space-x-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBackToProjects}
            className="flex-1 py-3 backdrop-blur-xl bg-white/5 text-white font-semibold rounded-xl border border-white/10 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            {t("projects.navigation.backToProjects")}
          </motion.button>
          {hasNext && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onNextProject}
              className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
            >
              {t("projects.navigation.nextProject")}
              <ArrowRight size={18} />
            </motion.button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.02, x: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBackToProjects}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
          >
            <ArrowLeft size={18} />
            <span>{t("projects.navigation.backToProjects")}</span>
          </motion.button>

          <div className="flex items-center gap-3">
            {hasPrevious && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPreviousProject}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">{t("projects.navigation.previousProject")}</span>
              </motion.button>
            )}
            {hasNext && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNextProject}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
              >
                <span className="hidden sm:inline">{t("projects.navigation.nextProject")}</span>
                <ChevronRight size={18} />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNavigation;
