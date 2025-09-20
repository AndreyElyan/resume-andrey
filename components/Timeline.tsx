import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Calendar, MapPin } from "lucide-react";

interface TimelineItem {
  id: string;
  company: string;
  period: string;
  role: string;
  description: string;
  isCurrent?: boolean;
}

const Timeline = () => {
  const { t } = useTranslation("common");

  const experiences: TimelineItem[] = [
    {
      id: "boticario",
      company: t("experience.positions.boticario.company"),
      period: t("experience.positions.boticario.period"),
      role: t("experience.positions.boticario.role"),
      description: t("experience.positions.boticario.description"),
      isCurrent: true,
    },
    {
      id: "renner",
      company: t("experience.positions.renner.company"),
      period: t("experience.positions.renner.period"),
      role: t("experience.positions.renner.role"),
      description: t("experience.positions.renner.description"),
    },
    {
      id: "ilegra",
      company: t("experience.positions.ilegra.company"),
      period: t("experience.positions.ilegra.period"),
      role: t("experience.positions.ilegra.role"),
      description: t("experience.positions.ilegra.description"),
    },
    {
      id: "4all",
      company: t("experience.positions.4all.company"),
      period: t("experience.positions.4all.period"),
      role: t("experience.positions.4all.role"),
      description: t("experience.positions.4all.description"),
    },
    {
      id: "linx",
      company: t("experience.positions.linx.company"),
      period: t("experience.positions.linx.period"),
      role: t("experience.positions.linx.role"),
      description: t("experience.positions.linx.description"),
    },
    {
      id: "sintech",
      company: t("experience.positions.sintech.company"),
      period: t("experience.positions.sintech.period"),
      role: t("experience.positions.sintech.role"),
      description: t("experience.positions.sintech.description"),
    },
    {
      id: "militar",
      company: t("experience.positions.militar.company"),
      period: t("experience.positions.militar.period"),
      role: t("experience.positions.militar.role"),
      description: t("experience.positions.militar.description"),
    },
    {
      id: "autonomo",
      company: t("experience.positions.autonomo.company"),
      period: t("experience.positions.autonomo.period"),
      role: t("experience.positions.autonomo.role"),
      description: t("experience.positions.autonomo.description"),
    },
    {
      id: "bll",
      company: t("experience.positions.bll.company"),
      period: t("experience.positions.bll.period"),
      role: t("experience.positions.bll.role"),
      description: t("experience.positions.bll.description"),
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-500"></div>

      {experiences.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`relative flex items-center mb-8 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? "md:pr-8" : "md:pl-8"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-dark-700 relative"
            >
              {item.isCurrent && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {t("experience.current")}
                </div>
              )}

              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 text-primary-500 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {item.role}
              </h3>

              <div className="flex items-center mb-3">
                <MapPin className="w-4 h-4 text-primary-500 mr-2" />
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  {item.company}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </div>

          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
