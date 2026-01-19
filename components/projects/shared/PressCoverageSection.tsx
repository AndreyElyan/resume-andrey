import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Newspaper, ExternalLink } from "lucide-react";

interface PressArticle {
  title: string;
  url: string;
  source: string;
}

interface PressCoverageSectionProps {
  pressCoverage: PressArticle[];
  isMobile: boolean;
}

const PressCoverageSection: React.FC<PressCoverageSectionProps> = ({
  pressCoverage,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
        <div className="flex items-center mb-6 gap-3">
          <div className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} backdrop-blur-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-white/10`}>
            <Newspaper className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-red-400`} />
          </div>
          <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-bold text-white`}>
            {t("projects.navigation.pressCoverage")}
          </h2>
        </div>
        <div className={isMobile ? "space-y-3" : "grid grid-cols-2 gap-4"}>
          {pressCoverage.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className={`font-semibold ${isMobile ? "text-sm" : "text-base"} text-white group-hover:text-purple-400 transition-colors mb-1`}>
                    {article.title}
                  </h3>
                  <p className={`${isMobile ? "text-xs" : "text-sm"} text-white/50`}>
                    {article.source}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PressCoverageSection;
