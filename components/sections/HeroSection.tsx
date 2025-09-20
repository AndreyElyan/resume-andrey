import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import {
  ChevronDown,
  Download,
  Code,
  Database,
  Cloud,
  Zap,
} from "lucide-react";
import TypingEffect from "../TypingEffect";
import { useEffect, useState, useMemo } from "react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { t } = useTranslation("common");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = useMemo(() => {
    if (!isClient) return [];

    return Array.from({ length: 50 }, (_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;

      return {
        id: `particle-${i}-${left}-${top}`,
        left,
        top,
        duration,
        delay,
      };
    });
  }, [isClient]);

  const floatingIcons = [
    { Icon: Code, delay: 0, x: 10, y: 20 },
    { Icon: Database, delay: 0.5, x: 85, y: 15 },
    { Icon: Cloud, delay: 1, x: 15, y: 80 },
    { Icon: Zap, delay: 1.5, x: 80, y: 75 },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2))",
              "linear-gradient(225deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2), rgba(59, 130, 246, 0.2))",
              "linear-gradient(45deg, rgba(79, 70, 229, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Mouse-following glow */}
        {isClient && (
          <motion.div
            className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />
        )}
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={`icon-${Icon.name}-${x}-${y}`}
          className="absolute text-white/20"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl text-white/80 font-light"
          >
            {t("home.greeting")}
          </motion.div>

          {/* Name with enhanced gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
              {t("home.name")}
            </span>
          </motion.h1>

          {/* Role with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/70 h-20 flex items-center justify-center"
          >
            <TypingEffect
              text={t("home.role")}
              speed={50}
              delay={1500}
            />
          </motion.div>

          {/* Enhanced buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden group"
            >
              <span className="relative z-10">{t("home.cta")}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.a
              href="/cv/Andrey-Elyan-Resume-EN.pdf"
              download="Andrey-Elyan-Resume-EN.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full overflow-hidden group backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center">
                <Download
                  className="mr-2"
                  size={20}
                />
                {t("contact.resume")}
              </span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("about")}
          className="text-white/60 hover:text-white transition-colors duration-300 p-2 rounded-full border border-white/20 backdrop-blur-sm"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
