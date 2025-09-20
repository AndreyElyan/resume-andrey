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
        <select
          value={activeFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {filters.map((filter) => (
            <option
              key={filter.id}
              value={filter.id}
            >
              {filter.label}
            </option>
          ))}
        </select>
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
            px-6 py-3 rounded-full font-semibold transition-all duration-300
            ${
              activeFilter === filter.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600"
            }
          `}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilters;
