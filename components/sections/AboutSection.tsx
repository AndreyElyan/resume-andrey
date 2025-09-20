import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import OptimizedImage from "../OptimizedImage";

const AboutSection = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t("about.title")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center lg:items-start mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
                  <OptimizedImage
                    src="/images/profile-picture.jpeg"
                    alt="Andrey Elyan"
                    width={192}
                    height={192}
                    priority={false}
                    className="w-full h-full object-cover"
                    unoptimized={false}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-dark-900 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </motion.div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("about.description")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("about.passion")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("about.focus")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-2 bg-white/30 rounded-full">
                    <div className="h-2 bg-white rounded-full w-4/5"></div>
                  </div>
                  <span className="text-sm">Node.js & TypeScript</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/30 rounded-full">
                    <div className="h-2 bg-white rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm">AWS & Microservices</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/30 rounded-full">
                    <div className="h-2 bg-white rounded-full w-5/6"></div>
                  </div>
                  <span className="text-sm">React & NestJS</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/30 rounded-full">
                    <div className="h-2 bg-white rounded-full w-4/5"></div>
                  </div>
                  <span className="text-sm">CI/CD & DevOps</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
