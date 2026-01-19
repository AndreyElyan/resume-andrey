import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Target } from "lucide-react";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={isMobile ? "mt-8" : "mb-16"}
    >
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
        <div className="flex items-center mb-4 gap-3">
          <div className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-white/10`}>
            <Target className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-blue-400`} />
          </div>
          <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-bold text-white`}>
            {t("projects.navigation.challenge")}
          </h2>
        </div>
        <p className={`text-white/70 ${isMobile ? "text-sm" : "text-lg"} leading-relaxed mb-4`}>
          {challenge}
        </p>
        {scale && (
          <p className={`${isMobile ? "text-sm" : "text-lg"} font-medium mt-4`}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {scale}
            </span>
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ChallengeSection;
