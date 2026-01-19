import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { BarChart3 } from "lucide-react";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
        <div className="flex items-center mb-6 gap-3">
          <div className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-white/10`}>
            <BarChart3 className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-purple-400`} />
          </div>
          <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-bold text-white`}>
            {t("projects.navigation.impact")}
          </h2>
        </div>
        <div className={isMobile ? "grid grid-cols-2 gap-4" : "grid grid-cols-4 gap-6"}>
          {impact.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 group hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />

              <div className={`${isMobile ? "text-2xl mb-2" : "text-4xl mb-3"} relative z-10`}>
                {item.icon}
              </div>
              <div className={`${isMobile ? "text-xl" : "text-3xl"} font-bold mb-1 relative z-10`}>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {item.value}
                </span>
              </div>
              <div className={`text-white/50 ${isMobile ? "text-xs" : "text-sm"} relative z-10`}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactSection;
