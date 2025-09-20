import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import SkillCard from "../SkillCard";

const SkillsSection = () => {
  const { t } = useTranslation("common");

  const skills = [
    { name: "Node.js", icon: "🟢", category: t("skills.categories.backend") },
    {
      name: "TypeScript",
      icon: "🔷",
      category: t("skills.categories.backend"),
    },
    { name: "NestJS", icon: "🚀", category: t("skills.categories.backend") },
    { name: "React", icon: "⚛️", category: t("skills.categories.frontend") },
    { name: "GraphQL", icon: "🔺", category: t("skills.categories.backend") },
    { name: "AWS", icon: "☁️", category: t("skills.categories.cloud") },
    { name: "Docker", icon: "🐳", category: t("skills.categories.tools") },
    {
      name: "PostgreSQL",
      icon: "🐘",
      category: t("skills.categories.database"),
    },
    { name: "Kubernetes", icon: "⚙️", category: t("skills.categories.cloud") },
    { name: "CI/CD", icon: "🔄", category: t("skills.categories.tools") },
  ];

  return (
    <section
      id="skills"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t("skills.title")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              category={skill.category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
