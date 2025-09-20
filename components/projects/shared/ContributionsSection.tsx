import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface Contribution {
  icon: string;
  title: string;
  description: string;
}

interface ContributionsSectionProps {
  contributions: Contribution[];
  isMobile: boolean;
}

const ContributionsSection: React.FC<ContributionsSectionProps> = ({
  contributions,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  const containerClasses = isMobile
    ? "bg-white dark:bg-dark-700 rounded-2xl p-6 border border-gray-200 dark:border-dark-600"
    : "bg-white dark:bg-dark-700 rounded-2xl p-8 border border-gray-200 dark:border-dark-600";

  const titleClasses = isMobile
    ? "text-xl font-bold text-gray-900 dark:text-white"
    : "text-3xl font-bold text-gray-900 dark:text-white";

  const iconClasses = isMobile
    ? "text-2xl mr-3"
    : "w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4";

  const gridClasses = isMobile ? "space-y-3" : "grid grid-cols-2 gap-6";

  const contributionIconClasses = isMobile
    ? "text-lg mr-3 mt-1"
    : "text-2xl mr-4 mt-1";

  const contributionTitleClasses = isMobile
    ? "font-semibold text-sm text-gray-900 dark:text-white"
    : "font-bold text-lg mb-2 text-gray-900 dark:text-white";

  const contributionDescClasses = isMobile
    ? "text-gray-600 dark:text-gray-400 text-xs"
    : "text-gray-600 dark:text-gray-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className={containerClasses}>
        <div className="flex items-center mb-4">
          {isMobile ? (
            <span className={iconClasses}>🔧</span>
          ) : (
            <div className={iconClasses}>
              <span className="text-2xl">🔧</span>
            </div>
          )}
          <h2 className={titleClasses}>
            {t("projects.navigation.contributions")}
          </h2>
        </div>
        <div className={gridClasses}>
          {contributions.map((contribution) => (
            <div
              key={contribution.title}
              className="flex items-start"
            >
              <span className={contributionIconClasses}>
                {contribution.icon}
              </span>
              <div>
                <h3 className={contributionTitleClasses}>
                  {contribution.title}
                </h3>
                <p className={contributionDescClasses}>
                  {contribution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContributionsSection;
