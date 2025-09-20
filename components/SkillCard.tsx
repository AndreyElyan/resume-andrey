import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  name: string;
  category: string;
  delay?: number;
}

const SkillCard = ({ icon, name, category, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="group bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700 text-center"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="text-4xl mb-4 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
        {name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
    </motion.div>
  );
};

export default SkillCard;
