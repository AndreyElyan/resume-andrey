import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useTranslation } from "next-i18next";
import {
  ArrowRight,
  Eye,
  Github,
  Linkedin,
} from "lucide-react";
import TypingEffect from "../TypingEffect";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

// Animated counter component
const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, end, {
      duration,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, end, duration, rounded]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { t } = useTranslation("common");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [statsInView, setStatsInView] = useState(false);

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

    return Array.from({ length: 30 }, (_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;
      const size = Math.random() * 2 + 1;
      const color = ["#60a5fa", "#a78bfa", "#818cf8"][
        Math.floor(Math.random() * 3)
      ];

      return {
        id: `particle-${i}-${left}-${top}`,
        left,
        top,
        duration,
        delay,
        size,
        color,
      };
    });
  }, [isClient]);

  const stats = [
    {
      value: null,
      displayValue: "∞",
      label: t("home.stats.coffeeLabel"),
    },
    {
      value: 5,
      suffix: "K+",
      label: t("home.stats.commitsLabel"),
    },
    {
      value: 99,
      suffix: "",
      label: t("home.stats.bugsLabel"),
    },
    {
      value: 342,
      suffix: "",
      label: t("home.stats.stackoverflowLabel"),
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AndreyElyan",
      Icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/andrey-elyan-de-souza-29782a112/",
      Icon: Linkedin,
    },
  ];

  // Character-by-character name animation
  const nameChars = t("home.name").split("");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-8"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-950" />

        {/* Aurora blobs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 0.9, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating particles with colors */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
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
            className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />
        )}
      </div>

      {/* Social Links Sidebar */}
      <motion.div
        className="fixed left-6 bottom-6 flex-col gap-4 z-20 hidden md:flex"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            className="text-white/40 hover:text-white transition-colors duration-300"
            aria-label={link.name}
          >
            <link.Icon size={22} />
          </motion.a>
        ))}
        <div className="w-px h-24 bg-white/20 mx-auto mt-2" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-sm font-medium">
              {t("home.availableStatus")}
            </span>
          </motion.div>

          {/* Profile Image with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-28 h-28 md:w-36 md:h-36 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-50 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
              <Image
                src="/images/profile-picture.jpeg"
                alt="Andrey Elyan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/70 font-light"
          >
            {t("home.greeting")}
          </motion.div>

          {/* Name with character animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
          >
            {nameChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.5 + index * 0.04,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Role with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-white/60 h-16 md:h-20 flex items-center justify-center max-w-4xl mx-auto"
          >
            <TypingEffect text={t("home.role")} speed={40} delay={1800} />
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-2 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            onViewportEnter={() => setStatsInView(true)}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center px-3 py-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.displayValue ? (
                    stat.displayValue
                  ) : statsInView ? (
                    <AnimatedCounter
                      end={stat.value as number}
                      suffix={stat.suffix || ""}
                      duration={2}
                    />
                  ) : (
                    `0${stat.suffix || ""}`
                  )}
                </div>
                <div className="text-[10px] md:text-xs text-white/50 mt-1 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("home.cta")}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </span>
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full overflow-hidden backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Eye size={20} />
                {t("home.viewWork")}
              </span>
            </motion.button>
          </motion.div>

          {/* Resume download link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex items-center justify-center gap-2 text-white/50 text-sm pb-4"
          >
            <motion.a
              href="/cv/Andrey-Elyan-Resume-EN.pdf"
              download
              whileHover={{ color: "#fff" }}
              className="underline underline-offset-4 hover:text-white transition-colors flex items-center gap-1"
            >
              {t("home.downloadResume")}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
