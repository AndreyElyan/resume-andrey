import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Timeline from "../Timeline";

const ExperienceSection = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id="experience"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t("experience.title")}
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
