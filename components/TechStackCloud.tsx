import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiExpress,
  SiAmazon,
  SiAmazondynamodb,
  SiAmazondocumentdb,
  SiAmazonec2,
  SiAmazons3,
  SiAwslambda,
  SiAmazoneks,
  SiAmazoncloudwatch,
  SiAmazoniam,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiPostgresql,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiFastify,
  SiJest,
  SiNodemon,
  SiRedis,
  SiSequelize,
  SiAxios,
  SiBabel,
  SiHelm,
  SiSwagger,
  SiNewrelic,
  SiOpentelemetry,
  SiDatefns,
  SiPassport,
} from "react-icons/si";

type TechSize = "large" | "medium" | "small";

interface TechIconProps {
  name: string;
  icon: string;
  story: string;
  size: TechSize;
  category: string;
  delay: number;
}

const TechIcon = ({
  name,
  icon,
  story,
  size,
  category,
  delay,
}: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, { component: any; className: string }> = {
      react: { component: SiReact, className: "text-blue-500" },
      nextjs: {
        component: SiNextdotjs,
        className: "text-black dark:text-white",
      },
      nodejs: { component: SiNodedotjs, className: "text-green-600" },
      nestjs: { component: SiNestjs, className: "text-red-600" },
      typescript: { component: SiTypescript, className: "text-blue-600" },
      express: {
        component: SiExpress,
        className: "text-gray-800 dark:text-gray-200",
      },
      aws: { component: SiAmazon, className: "text-orange-500" },
      dynamodb: { component: SiAmazondynamodb, className: "text-blue-600" },
      documentdb: {
        component: SiAmazondocumentdb,
        className: "text-green-600",
      },
      ec2: { component: SiAmazonec2, className: "text-orange-500" },
      s3: { component: SiAmazons3, className: "text-yellow-500" },
      lambda: { component: SiAwslambda, className: "text-orange-600" },
      docker: { component: SiDocker, className: "text-blue-500" },
      kubernetes: { component: SiKubernetes, className: "text-blue-600" },
      github: {
        component: SiGithub,
        className: "text-gray-800 dark:text-gray-200",
      },
      postgresql: { component: SiPostgresql, className: "text-blue-700" },
      graphql: { component: SiGraphql, className: "text-pink-600" },
      mongodb: { component: SiMongodb, className: "text-green-600" },
      mongoose: { component: SiMongoose, className: "text-red-600" },
      fastify: { component: SiFastify, className: "text-white" },
      jest: { component: SiJest, className: "text-orange-600" },
      nodemon: { component: SiNodemon, className: "text-green-600" },
      redis: { component: SiRedis, className: "text-red-600" },
      sequelize: { component: SiSequelize, className: "text-blue-500" },
      eks: { component: SiAmazoneks, className: "text-orange-500" },
      cloudwatch: {
        component: SiAmazoncloudwatch,
        className: "text-orange-500",
      },
      iam: { component: SiAmazoniam, className: "text-orange-500" },
      axios: { component: SiAxios, className: "text-purple-600" },
      babel: { component: SiBabel, className: "text-yellow-500" },
      helm: { component: SiHelm, className: "text-blue-600" },
      swagger: { component: SiSwagger, className: "text-green-600" },
      newrelic: { component: SiNewrelic, className: "text-orange-500" },
      opentelemetry: { component: SiOpentelemetry, className: "text-blue-500" },
      datefns: { component: SiDatefns, className: "text-gray-600" },
      passport: { component: SiPassport, className: "text-blue-600" },
    };

    const iconConfig = iconMap[iconName] || {
      component: SiJavascript,
      className: "text-yellow-500",
    };
    const IconComponent = iconConfig.component;

    return <IconComponent className={iconConfig.className} />;
  };

  const getSizeClasses = () => {
    switch (size) {
      case "large":
        return {
          container: "p-4 sm:p-6 min-h-[100px] sm:min-h-[120px]",
          icon: "text-3xl sm:text-4xl",
          text: "text-sm sm:text-base font-semibold",
        };
      case "medium":
        return {
          container: "p-3 sm:p-4 min-h-[80px] sm:min-h-[100px]",
          icon: "text-2xl sm:text-3xl",
          text: "text-xs sm:text-sm font-medium",
        };
      case "small":
        return {
          container: "p-2 sm:p-3 min-h-[60px] sm:min-h-[80px]",
          icon: "text-xl sm:text-2xl",
          text: "text-xs font-medium",
        };
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "frontend":
        return "border-blue-500/30 bg-blue-500/5";
      case "backend":
        return "border-green-500/30 bg-green-500/5";
      case "cloud":
        return "border-orange-500/30 bg-orange-500/5";
      case "database":
        return "border-purple-500/30 bg-purple-500/5";
      case "others":
        return "border-gray-500/30 bg-gray-500/5";
      default:
        return "border-gray-500/30 bg-gray-500/5";
    }
  };

  const sizeClasses = getSizeClasses();
  const categoryColor = getCategoryColor();

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`flex flex-col items-center ${sizeClasses.container} bg-white/10 dark:bg-gray-800/20 rounded-xl backdrop-blur-sm border ${categoryColor} cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/30`}
      >
        <div className={`mb-2 flex-shrink-0 ${sizeClasses.icon}`}>
          {getIconComponent(icon)}
        </div>
        <span
          className={`${sizeClasses.text} text-white text-center leading-tight`}
        >
          {name}
        </span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
          >
            <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-xl border border-gray-700 dark:border-gray-300 max-w-xs sm:max-w-sm">
              <div className="text-xs text-gray-300 dark:text-gray-600 leading-relaxed">
                {story}
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface TechCategoryProps {
  title: string;
  icon: string;
  technologies: Array<{
    name: string;
    icon: string;
    story: string;
    size: TechSize;
    category: string;
  }>;
  delay: number;
}

const TechCategory = ({
  title,
  icon,
  technologies,
  delay,
}: TechCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-white/5 dark:bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-white/10 dark:border-gray-700/20 backdrop-blur-sm"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
        <span className="text-2xl mr-2">{icon}</span>
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {technologies.map((tech, index) => (
          <TechIcon
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            story={tech.story}
            size={tech.size}
            category={tech.category}
            delay={delay + 0.3 + index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
};

const TechStackCloud = () => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("core");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getCategoryData = (categoryKey: string) => {
    try {
      const title = t(`about.techStack.categories.${categoryKey}.title`);
      const icon = t(`about.techStack.categories.${categoryKey}.icon`);
      const technologies = t(
        `about.techStack.categories.${categoryKey}.technologies`,
        {
          returnObjects: true,
        },
      ) as Array<{
        name: string;
        icon: string;
        story: string;
        size: TechSize;
        category: string;
      }>;

      return { title, icon, technologies: technologies || [] };
    } catch (error) {
      console.error(`Error loading category ${categoryKey}:`, error);
      return { title: categoryKey, icon: "🔧", technologies: [] };
    }
  };

  const categories = [
    {
      key: "frontend",
      ...getCategoryData("frontend"),
    },
    {
      key: "backend",
      ...getCategoryData("backend"),
    },
    {
      key: "cloud",
      ...getCategoryData("cloud"),
    },
    {
      key: "database",
      ...getCategoryData("database"),
    },
    {
      key: "others",
      ...getCategoryData("others"),
    },
  ];

  const coreTechnologies = [
    {
      name: "Node.js",
      icon: "nodejs",
      story: "Base sólida para todos os projetos",
      size: "large" as const,
      category: "backend",
    },
    {
      name: "NestJS",
      icon: "nestjs",
      story: "Microserviços escaláveis no Boticário",
      size: "large" as const,
      category: "backend",
    },
    {
      name: "React",
      icon: "react",
      story: "Interfaces modernas no Self-Checkout Renner",
      size: "large" as const,
      category: "frontend",
    },
    {
      name: "AWS",
      icon: "aws",
      story: "Infraestrutura cloud escalável",
      size: "large" as const,
      category: "cloud",
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
      story: "Relacional confiável",
      size: "large" as const,
      category: "database",
    },
  ];

  if (!isClient) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4 w-1/3"></div>
        <div className="h-4 bg-gray-700 rounded mb-6 w-2/3"></div>
        <div className="h-32 bg-gray-700 rounded"></div>
      </div>
    );
  }

  return (
    <>
      <motion.h3
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {t("about.techStack.title")}
      </motion.h3>

      <motion.p
        className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {t("about.techStack.subtitle")}
      </motion.p>

      {/* Tabs Navigation */}
      <div className="mb-6">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          <button
            onClick={() => setActiveTab("core")}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === "core"
                ? "bg-blue-500 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            ⭐ Core
          </button>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveTab(category.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === category.key
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="min-h-[200px]">
        {activeTab === "core" ? (
          <div className="bg-white/5 dark:bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-white/10 dark:border-gray-700/20 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="text-xl mr-2">⭐</span>
              Core Technologies
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {coreTechnologies.map((tech, index) => (
                <TechIcon
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  story={tech.story}
                  size={tech.size}
                  category={tech.category}
                  delay={0.1 + index * 0.1}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            {categories
              .filter((cat) => cat.key === activeTab)
              .map((category) => (
                <TechCategory
                  key={category.key}
                  title={category.title}
                  icon={category.icon}
                  technologies={category.technologies}
                  delay={0.1}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TechStackCloud;
