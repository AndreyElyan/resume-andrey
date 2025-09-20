import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface FeaturesSectionProps {
  features: string[];
  isMobile: boolean;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  features,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  if (!features || features.length === 0) return null;

  const containerClasses = isMobile
    ? "bg-gray-800 rounded-2xl p-6"
    : "bg-gray-800 rounded-2xl p-8";

  const titleClasses = isMobile ? "text-xl font-bold" : "text-3xl font-bold";

  const iconClasses = isMobile
    ? "text-2xl mr-3"
    : "w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4";

  const gridClasses = isMobile ? "space-y-2" : "grid grid-cols-2 gap-4";

  const featureClasses = isMobile ? "flex items-start" : "flex items-start";

  const bulletClasses = isMobile
    ? "text-blue-400 mr-2 mt-1"
    : "text-blue-400 mr-3 mt-1 text-xl";

  const textClasses = isMobile ? "text-gray-300 text-sm" : "text-gray-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className={containerClasses}>
        <div className="flex items-center mb-4">
          {isMobile ? (
            <span className={iconClasses}>✨</span>
          ) : (
            <div className={iconClasses}>
              <span className="text-2xl">✨</span>
            </div>
          )}
          <h2 className={titleClasses}>
            {t("projects.navigation.keyFeatures")}
          </h2>
        </div>
        <div className={gridClasses}>
          {Array.isArray(features) &&
            features.map((feature: string) => (
              <div
                key={feature.substring(0, 30)}
                className={featureClasses}
              >
                <span className={bulletClasses}>•</span>
                <p className={textClasses}>{feature}</p>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
