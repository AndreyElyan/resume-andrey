import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Trophy } from "lucide-react";
import Image from "next/image";

const CertificationsSection = () => {
  const { t } = useTranslation("common");

  const certifications = [
    {
      title: t("certifications.awsCloudPractitioner.title"),
      issuer: t("certifications.awsCloudPractitioner.issuer"),
      date: t("certifications.awsCloudPractitioner.date"),
      credentialId: t("certifications.awsCloudPractitioner.credentialId"),
      skills: t("certifications.awsCloudPractitioner.skills"),
      description: t("certifications.awsCloudPractitioner.description"),
      type: "AWS",
    },
    {
      title: t("certifications.awsDeveloperLab.title"),
      issuer: t("certifications.awsDeveloperLab.issuer"),
      date: t("certifications.awsDeveloperLab.date"),
      credentialId: t("certifications.awsDeveloperLab.credentialId"),
      skills: t("certifications.awsDeveloperLab.skills"),
      description: t("certifications.awsDeveloperLab.description"),
      type: "AWS",
    },
    {
      title: t("certifications.awsServerless.title"),
      issuer: t("certifications.awsServerless.issuer"),
      date: t("certifications.awsServerless.date"),
      skills: t("certifications.awsServerless.skills"),
      description: t("certifications.awsServerless.description"),
      type: "AWS",
    },
    {
      title: t("certifications.fiapCloud.title"),
      issuer: t("certifications.fiapCloud.issuer"),
      date: t("certifications.fiapCloud.date"),
      credentialId: t("certifications.fiapCloud.credentialId"),
      skills: t("certifications.fiapCloud.skills"),
      description: t("certifications.fiapCloud.description"),
      type: "FIAP",
    },
    {
      title: t("certifications.fiapLeadership.title"),
      issuer: t("certifications.fiapLeadership.issuer"),
      date: t("certifications.fiapLeadership.date"),
      credentialId: t("certifications.fiapLeadership.credentialId"),
      skills: t("certifications.fiapLeadership.skills"),
      description: t("certifications.fiapLeadership.description"),
      type: "FIAP",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-dark-800 dark:via-dark-700 dark:to-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("certifications.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("certifications.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={`cert-${index}-${cert.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-dark-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-600 h-full relative overflow-hidden">
                <div className="flex flex-col h-full">
                  {/* Header with logo and badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12">
                        <Image
                          src={
                            cert.type === "AWS"
                              ? "/images/aws_logo.jpeg"
                              : "/images/fiap-logo.png"
                          }
                          width={48}
                          height={48}
                          alt={`${cert.type} Logo`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cert.type === "AWS"
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {cert.type}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {cert.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </p>
                      {cert.credentialId && (
                        <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>

                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-4">
                      <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">
                        Skills:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.split(" · ").map((skill, skillIndex) => (
                          <span
                            key={`skill-${skillIndex}-${skill}`}
                            className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                5
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Certificações</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 mx-auto mb-4">
                <Image
                  src="/images/aws_logo.jpeg"
                  alt="AWS Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                3
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                AWS Certificações
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 mx-auto mb-4">
                <Image
                  src="/images/fiap-logo.png"
                  alt="FIAP Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                2
              </h3>
              <p className="text-gray-600 dark:text-gray-300">FIAP Cursos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
