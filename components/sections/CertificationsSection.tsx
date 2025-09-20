import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Card from "../Card";

const CertificationsSection = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t("certifications.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card delay={0}>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t("certifications.aws")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                AWS Certified Solutions Architect - Professional
              </p>
            </div>
          </Card>

          <Card delay={0.1}>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t("certifications.honor")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Brazilian Army Honor to Merit
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
