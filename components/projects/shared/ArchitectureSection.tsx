import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

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

  const containerClasses = isMobile
    ? "bg-gray-800 rounded-2xl p-6"
    : "bg-gray-800 rounded-2xl p-8";

  const titleClasses = isMobile ? "text-xl font-bold" : "text-3xl font-bold";

  const iconClasses = isMobile
    ? "text-2xl mr-3"
    : "w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4";

  const gridClasses = isMobile ? "space-y-4" : "grid grid-cols-2 gap-8";

  const sectionTitleClasses = isMobile
    ? "font-semibold text-sm text-blue-400 mb-2"
    : "font-bold text-lg text-blue-400 mb-4";

  const renderTechSection = (
    title: string,
    items: string[] | undefined,
    color: string = "blue",
  ) => {
    if (!items || items.length === 0) return null;

    const colorClasses = {
      blue: {
        title: "text-blue-400",
        tag: isMobile
          ? "bg-blue-600/20 text-blue-300"
          : "bg-blue-600/20 text-blue-300 border-blue-600/30",
      },
      orange: {
        title: "text-orange-400",
        tag: isMobile
          ? "bg-orange-600/20 text-orange-300"
          : "bg-orange-600/20 text-orange-300 border-orange-600/30",
      },
      green: {
        title: "text-green-400",
        tag: isMobile
          ? "bg-green-600/20 text-green-300"
          : "bg-green-600/20 text-green-300 border-green-600/30",
      },
      purple: {
        title: "text-purple-400",
        tag: isMobile
          ? "bg-purple-600/20 text-purple-300"
          : "bg-purple-600/20 text-purple-300 border-purple-600/30",
      },
    };

    const colors =
      colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

    return (
      <div>
        <h3 className={`${sectionTitleClasses} ${colors.title}`}>{title}</h3>
        <div
          className={isMobile ? "flex flex-wrap gap-2" : "flex flex-wrap gap-3"}
        >
          {Array.isArray(items) &&
            items.map((tech: string) => (
              <span
                key={tech}
                className={`${
                  isMobile
                    ? "px-2 py-1 text-xs rounded-full"
                    : "px-4 py-2 rounded-full border"
                } ${colors.tag}`}
              >
                {tech}
              </span>
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
      <div className={containerClasses}>
        <div className="flex items-center mb-4">
          {isMobile ? (
            <span className={iconClasses}>🏗️</span>
          ) : (
            <div className={iconClasses}>
              <span className="text-2xl">🏗️</span>
            </div>
          )}
          <h2 className={titleClasses}>
            {t("projects.navigation.architecture")}
          </h2>
        </div>
        <div className={gridClasses}>
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
