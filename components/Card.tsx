import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

const Card = ({ children, className = "", delay = 0, onClick }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`card ${className} ${onClick ? "cursor-pointer" : ""}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
