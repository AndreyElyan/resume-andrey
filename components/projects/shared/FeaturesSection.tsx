import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Sparkles, Check } from "lucide-react";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
        <div className="flex items-center mb-6 gap-3">
          <div className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-white/10`}>
            <Sparkles className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-yellow-400`} />
          </div>
          <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-bold text-white`}>
            {t("projects.navigation.keyFeatures")}
          </h2>
        </div>
        <div className={isMobile ? "space-y-3" : "grid grid-cols-2 gap-4"}>
          {Array.isArray(features) &&
            features.map((feature: string, index: number) => (
              <motion.div
                key={feature.substring(0, 30)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-400" />
                </div>
                <p className={`text-white/70 ${isMobile ? "text-sm" : "text-base"}`}>
                  {feature}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
