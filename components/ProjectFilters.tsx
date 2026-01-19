import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  isMobile?: boolean;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  activeFilter,
  onFilterChange,
  isMobile = false,
}) => {
  const { t } = useTranslation("common");

  const filters = [
    { id: "all", label: t("projects.filters.all") },
    { id: "rfid", label: t("projects.filters.rfid") },
    { id: "omni", label: t("projects.filters.omni") },
    { id: "retail", label: t("projects.filters.retail") },
  ];

  if (isMobile) {
    return (
      <div className="mb-8">
        <div className="relative">
          <select
            value={activeFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="w-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 appearance-none cursor-pointer"
          >
            {filters.map((filter) => (
              <option
                key={filter.id}
                value={filter.id}
                className="bg-slate-900 text-white"
              >
                {filter.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter.id)}
          className={`
            relative px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden
            ${
              activeFilter === filter.id
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
                : "bg-white/5 backdrop-blur-xl text-white/70 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/10"
            }
          `}
        >
          {/* Shimmer effect for active filter */}
          {activeFilter === filter.id && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          )}
          <span className="relative z-10">{filter.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilters;
