import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface ImpactItem {
  value: string;
  label: string;
  icon: string;
}

interface ImpactSectionProps {
  impact: ImpactItem[];
  isMobile: boolean;
}

const ImpactSection: React.FC<ImpactSectionProps> = ({ impact, isMobile }) => {
  const { t } = useTranslation("common");

  const containerClasses = isMobile
    ? "bg-gray-800 rounded-2xl p-6"
    : "bg-gray-800 rounded-2xl p-8";

  const titleClasses = isMobile ? "text-xl font-bold" : "text-3xl font-bold";

  const iconClasses = isMobile
    ? "text-2xl mr-3"
    : "w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4";

  const gridClasses = isMobile
    ? "grid grid-cols-2 gap-4"
    : "grid grid-cols-4 gap-6";

  const impactIconClasses = isMobile ? "text-2xl mb-1" : "text-4xl mb-3";

  const impactValueClasses = isMobile
    ? "text-xl font-bold text-blue-400"
    : "text-3xl font-bold text-blue-400 mb-2";

  const impactLabelClasses = isMobile
    ? "text-xs text-gray-400"
    : "text-gray-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className={containerClasses}>
        <div className="flex items-center mb-4">
          {isMobile ? (
            <span className={iconClasses}>📊</span>
          ) : (
            <div className={iconClasses}>
              <span className="text-2xl">📊</span>
            </div>
          )}
          <h2 className={titleClasses}>{t("projects.navigation.impact")}</h2>
        </div>
        <div className={gridClasses}>
          {impact.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <div className={impactIconClasses}>{item.icon}</div>
              <div className={impactValueClasses}>{item.value}</div>
              <div className={impactLabelClasses}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactSection;
