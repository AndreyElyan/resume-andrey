import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Github, ExternalLink, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  tech,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <div className="flex space-x-2">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.split(", ").map((technology, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.1 }}
            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
          >
            {technology}
          </motion.span>
        ))}
      </div>

      <div className="flex space-x-3">
        {githubUrl && (
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300"
          >
            <Code
              size={16}
              className="mr-2"
            />
            {t("projects.viewCode")}
          </motion.a>
        )}
        {liveUrl && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300"
          >
            <ExternalLink
              size={16}
              className="mr-2"
            />
            {t("projects.liveDemo")}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
