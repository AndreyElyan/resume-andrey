import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface PressArticle {
  title: string;
  url: string;
  source: string;
}

interface PressCoverageSectionProps {
  pressCoverage: PressArticle[];
  isMobile: boolean;
}

const PressCoverageSection: React.FC<PressCoverageSectionProps> = ({
  pressCoverage,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  const containerClasses = isMobile
    ? "bg-gray-800 rounded-2xl p-6"
    : "bg-gray-800 rounded-2xl p-8";

  const titleClasses = isMobile ? "text-xl font-bold" : "text-3xl font-bold";

  const iconClasses = isMobile
    ? "text-2xl mr-3"
    : "w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4";

  const gridClasses = isMobile ? "space-y-3" : "grid grid-cols-2 gap-6";

  const articleClasses = isMobile
    ? "block p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
    : "block p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors";

  const articleTitleClasses = isMobile
    ? "font-semibold text-sm text-blue-400 mb-1"
    : "font-bold text-lg text-blue-400 mb-2";

  const articleSourceClasses = isMobile
    ? "text-xs text-gray-400"
    : "text-gray-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className={containerClasses}>
        <div className="flex items-center mb-4">
          {isMobile ? (
            <span className={iconClasses}>📰</span>
          ) : (
            <div className={iconClasses}>
              <span className="text-2xl">📰</span>
            </div>
          )}
          <h2 className={titleClasses}>
            {t("projects.navigation.pressCoverage")}
          </h2>
        </div>
        <div className={gridClasses}>
          {pressCoverage.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={articleClasses}
            >
              <h3 className={articleTitleClasses}>{article.title}</h3>
              <p className={articleSourceClasses}>{article.source}</p>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PressCoverageSection;
