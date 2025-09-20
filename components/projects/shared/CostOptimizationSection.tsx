import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface CostOptimizationSectionProps {
  costOptimization: {
    title: string;
    details: string[];
  };
  isMobile: boolean;
}

const CostOptimizationSection: React.FC<CostOptimizationSectionProps> = ({
  costOptimization,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  const containerClasses = isMobile
    ? "bg-gray-800 rounded-2xl p-6"
    : "bg-gray-800 rounded-2xl p-8";

  const titleClasses = isMobile ? "text-xl font-bold" : "text-3xl font-bold";

  const iconClasses = isMobile
    ? "text-2xl mr-3"
    : "w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4";

  const textClasses = isMobile
    ? "text-gray-300 text-sm leading-relaxed"
    : "text-gray-300 text-lg leading-relaxed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className={containerClasses}>
        <div className="flex items-center mb-4">
          {isMobile ? (
            <span className={iconClasses}>💰</span>
          ) : (
            <div className={iconClasses}>
              <span className="text-2xl">💰</span>
            </div>
          )}
          <h2 className={titleClasses}>
            {t("projects.navigation.costOptimization")}
          </h2>
        </div>
        <div className={isMobile ? "space-y-3" : "space-y-4"}>
          {costOptimization.details.map((detail) => (
            <p
              key={detail.substring(0, 50)}
              className={textClasses}
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CostOptimizationSection;
