import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface ChallengeSectionProps {
  challenge: string;
  scale: string;
  isMobile: boolean;
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  challenge,
  scale,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  const containerClasses = isMobile
    ? "bg-gray-800 rounded-2xl p-6"
    : "bg-gray-800 rounded-2xl p-8";

  const titleClasses = isMobile ? "text-xl font-bold" : "text-3xl font-bold";

  const iconClasses = isMobile
    ? "text-2xl mr-3"
    : "w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4";

  const textClasses = isMobile
    ? "text-gray-300 text-sm leading-relaxed mb-4"
    : "text-gray-300 text-lg leading-relaxed mb-4";

  const scaleClasses = isMobile
    ? "text-blue-400 text-sm mt-2 font-medium"
    : "text-blue-400 text-lg font-medium";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={isMobile ? "mt-8" : "mb-16"}
    >
      <div className={containerClasses}>
        <div className="flex items-center mb-4">
          {isMobile ? (
            <span className={iconClasses}>🎯</span>
          ) : (
            <div className={iconClasses}>
              <span className="text-2xl">🎯</span>
            </div>
          )}
          <h2 className={titleClasses}>{t("projects.navigation.challenge")}</h2>
        </div>
        <p className={textClasses}>{challenge}</p>
        {scale && <p className={scaleClasses}>{scale}</p>}
      </div>
    </motion.div>
  );
};

export default ChallengeSection;
