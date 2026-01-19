import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { TrendingDown } from "lucide-react";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
        <div className="flex items-center mb-6 gap-3">
          <div className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-white/10`}>
            <TrendingDown className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-green-400`} />
          </div>
          <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-bold text-white`}>
            {t("projects.navigation.costOptimization")}
          </h2>
        </div>
        <div className={isMobile ? "space-y-3" : "space-y-4"}>
          {costOptimization.details.map((detail, index) => (
            <motion.p
              key={detail.substring(0, 50)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`text-white/70 ${isMobile ? "text-sm" : "text-lg"} leading-relaxed pl-4 border-l-2 border-green-500/30`}
            >
              {detail}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CostOptimizationSection;
