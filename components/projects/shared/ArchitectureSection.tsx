import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Layers } from "lucide-react";

interface Architecture {
  title: string;
  backend?: string[];
  aws?: string[];
  platform?: string[];
  frontend?: string[];
  mobile?: string[];
  auth?: string[];
  payment?: string[];
  hardware?: string[];
  integration?: string[];
}

interface ArchitectureSectionProps {
  architecture: Architecture;
  isMobile: boolean;
}

const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({
  architecture,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  const renderTechSection = (
    title: string,
    items: string[] | undefined,
    color: string = "blue",
  ) => {
    if (!items || items.length === 0) return null;

    const colorClasses = {
      blue: {
        title: "text-blue-400",
        tag: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/20",
      },
      orange: {
        title: "text-orange-400",
        tag: "bg-orange-500/10 text-orange-300 border-orange-500/20 hover:border-orange-400/40 hover:bg-orange-500/20",
      },
      green: {
        title: "text-green-400",
        tag: "bg-green-500/10 text-green-300 border-green-500/20 hover:border-green-400/40 hover:bg-green-500/20",
      },
      purple: {
        title: "text-purple-400",
        tag: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-500/20",
      },
    };

    const colors =
      colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

    return (
      <div className="mb-4 last:mb-0">
        <h3 className={`font-semibold ${isMobile ? "text-sm mb-2" : "text-base mb-3"} ${colors.title}`}>
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {Array.isArray(items) &&
            items.map((tech: string, index: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className={`${
                  isMobile ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm"
                } rounded-full border transition-all duration-200 cursor-default ${colors.tag}`}
              >
                {tech}
              </motion.span>
            ))}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className={isMobile ? "mt-6" : "mb-16"}
    >
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
        <div className="flex items-center mb-6 gap-3">
          <div className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-white/10`}>
            <Layers className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-cyan-400`} />
          </div>
          <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-bold text-white`}>
            {t("projects.navigation.architecture")}
          </h2>
        </div>
        <div className={isMobile ? "space-y-4" : "grid grid-cols-2 gap-6"}>
          {architecture.backend &&
            architecture.backend.length > 0 &&
            renderTechSection("Backend", architecture.backend, "blue")}
          {architecture.aws &&
            architecture.aws.length > 0 &&
            renderTechSection("AWS", architecture.aws, "orange")}
          {architecture.frontend &&
            architecture.frontend.length > 0 &&
            renderTechSection("Frontend", architecture.frontend, "green")}
          {architecture.platform &&
            architecture.platform.length > 0 &&
            renderTechSection("Platform", architecture.platform, "purple")}
          {architecture.mobile &&
            architecture.mobile.length > 0 &&
            renderTechSection("Mobile", architecture.mobile, "blue")}
          {architecture.auth &&
            architecture.auth.length > 0 &&
            renderTechSection("Auth", architecture.auth, "green")}
          {architecture.payment &&
            architecture.payment.length > 0 &&
            renderTechSection("Payment", architecture.payment, "purple")}
          {architecture.hardware &&
            architecture.hardware.length > 0 &&
            renderTechSection("Hardware", architecture.hardware, "orange")}
          {architecture.integration &&
            architecture.integration.length > 0 &&
            renderTechSection("Integration", architecture.integration, "blue")}
        </div>
      </div>
    </motion.div>
  );
};

export default ArchitectureSection;
