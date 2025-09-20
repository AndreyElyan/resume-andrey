import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import OptimizedImage from "../OptimizedImage";
import TechStackCloud from "../TechStackCloudWrapper";

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

            <div className="space-y-6">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {t("about.greeting")}
                </motion.h3>
                <motion.p
                  className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {t("about.intro")}
                </motion.p>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t("about.journey")}
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.h4
                  className="text-lg font-semibold text-gray-800 dark:text-white mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  {t("about.achievements")}
                </motion.h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {[
                    t("about.achievement1"),
                    t("about.achievement2"),
                    t("about.achievement3"),
                    t("about.achievement4"),
                  ].map((achievement, index) => (
                    <motion.li
                      key={`achievement-${achievement.slice(0, 20)}`}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                    >
                      <motion.span
                        className="text-green-500 mr-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.8 + index * 0.05,
                        }}
                      >
                        ✓
                      </motion.span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {t("about.passion")}
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                {t("about.personality")}
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                {t("about.mission")}
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl p-6 text-white text-center cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 },
                }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(0,0,0,0.1)",
                    "0 15px 35px rgba(0,0,0,0.15)",
                    "0 10px 30px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.2,
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <motion.p
                  className="text-lg font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                >
                  {t("about.cta")}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
              <TechStackCloud />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
