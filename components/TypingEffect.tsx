import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypingEffect = ({ text, speed = 100, delay = 0 }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }
      },
      currentIndex === 0 ? delay : speed,
    );

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  return (
    <span className="relative">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-primary-600 ml-1"
      />
    </span>
  );
};

export default TypingEffect;
