import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Wrench } from "lucide-react";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
        <div className="flex items-center mb-6 gap-3">
          <div className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-white/10`}>
            <Wrench className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-green-400`} />
          </div>
          <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-bold text-white`}>
            {t("projects.navigation.contributions")}
          </h2>
        </div>
        <div className={isMobile ? "space-y-4" : "grid grid-cols-2 gap-6"}>
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start group"
            >
              <span className={`${isMobile ? "text-lg mr-3" : "text-2xl mr-4"} mt-1 group-hover:scale-110 transition-transform`}>
                {contribution.icon}
              </span>
              <div>
                <h3 className={`font-semibold ${isMobile ? "text-sm" : "text-lg"} text-white mb-1`}>
                  {contribution.title}
                </h3>
                <p className={`text-white/60 ${isMobile ? "text-xs" : "text-base"}`}>
                  {contribution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContributionsSection;
