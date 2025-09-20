import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Download,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import TypingEffect from "../components/TypingEffect";
import Timeline from "../components/Timeline";
import SkillCard from "../components/SkillCard";

const Home = () => {
  const { t } = useTranslation("common");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { name: "Node.js", icon: "🟢", category: t("skills.categories.backend") },
    {
      name: "TypeScript",
      icon: "🔷",
      category: t("skills.categories.backend"),
    },
    { name: "NestJS", icon: "🚀", category: t("skills.categories.backend") },
    { name: "React", icon: "⚛️", category: t("skills.categories.frontend") },
    { name: "GraphQL", icon: "🔺", category: t("skills.categories.backend") },
    { name: "AWS", icon: "☁️", category: t("skills.categories.cloud") },
    { name: "Docker", icon: "🐳", category: t("skills.categories.tools") },
    {
      name: "PostgreSQL",
      icon: "🐘",
      category: t("skills.categories.database"),
    },
    { name: "Kubernetes", icon: "⚙️", category: t("skills.categories.cloud") },
    { name: "CI/CD", icon: "🔄", category: t("skills.categories.tools") },
  ];

  const contactLinks = [
    {
      name: t("contact.email"),
      icon: Mail,
      href: "mailto:andrey.elyan@email.com",
      description: "andrey.elyan@email.com",
    },
    {
      name: t("contact.linkedin"),
      icon: Linkedin,
      href: "https://linkedin.com/in/andreyelyan",
      description: "linkedin.com/in/andreyelyan",
    },
    {
      name: t("contact.github"),
      icon: Github,
      href: "https://github.com/andreyelyan",
      description: "github.com/andreyelyan",
    },
    {
      name: t("contact.whatsapp"),
      icon: MessageCircle,
      href: "https://wa.me/5511999999999",
      description: "+55 11 99999-9999",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <Navbar />

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-900"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
              >
                {t("home.greeting")} <br />
                <span className="gradient-text">{t("home.name")}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 h-16 flex items-center justify-center"
              >
                <TypingEffect
                  text={t("home.role")}
                  speed={50}
                  delay={1000}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary"
                >
                  {t("home.cta")}
                </motion.button>

                <motion.a
                  href="/cv/Andrey-Elyan-Resume-EN.pdf"
                  download="Andrey-Elyan-Resume-EN.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center"
                >
                  <Download
                    className="mr-2"
                    size={20}
                  />
                  {t("contact.resume")}
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection("about")}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </section>

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
                      <img
                        src="/images/profile-picture.jpeg"
                        alt="Andrey Elyan"
                        className="w-full h-full object-cover"
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

        <section
          id="experience"
          className="py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              {t("experience.title")}
            </motion.h2>

            <div className="max-w-4xl mx-auto">
              <Timeline />
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-20 bg-gray-50 dark:bg-dark-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              {t("projects.title")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-dark-700">
                <div className="relative h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 p-8 h-full flex items-center justify-between">
                    <div className="text-white">
                      <div className="flex items-center mb-4">
                        <img
                          src="/images/gb-rastreio-logo.png"
                          alt="GB Rastreio Logo"
                          className="h-12 w-auto mr-4"
                        />
                        <div>
                          <h3 className="text-3xl font-bold">GB Rastreio</h3>
                          <p className="text-blue-200">
                            Grupo Boticário • Jan 2024 - Present
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-blue-100 max-w-2xl">
                        Enterprise RFID traceability platform enabling
                        end-to-end product tracking across distribution centers
                        and factories, processing millions of RFID tags monthly.
                      </p>
                    </div>
                    <div className="hidden lg:flex space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">📡</span>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">🏭</span>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">☁️</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <span className="text-2xl mr-3">🎯</span>
                        Project Overview
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Led the development of a comprehensive RFID traceability
                        platform for Grupo Boticário, handling the complete
                        product lifecycle from manufacturing to retail. The
                        system processes millions of RFID tags monthly across
                        distribution centers and factories.
                      </p>

                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <span className="text-2xl mr-3">🏗️</span>
                        Architecture & Tech Stack
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            NestJS microservices with TypeScript
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            AWS Serverless (Lambda, API Gateway, DynamoDB)
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            Real-time WebSockets & Event-driven architecture
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            React SPA with RBAC & telemetry
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <span className="text-2xl mr-3">🔧</span>
                        RFID Hardware Integration
                      </h4>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4 text-center">
                          <img
                            src="/hardware/IMPRESSORA_SATO_RFID.png"
                            alt="SATO RFID Printer"
                            className="h-12 w-auto mx-auto mb-2"
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            SATO RFID Printer
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4 text-center">
                          <img
                            src="/hardware/bluebird-rfr900-devicemobile.jpeg"
                            alt="Bluebird RFR900"
                            className="h-12 w-auto mx-auto mb-2"
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Bluebird RFR900
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4 text-center">
                          <img
                            src="/hardware/HEXAPAD-ACCURA.png"
                            alt="Accura HexaPad"
                            className="h-12 w-auto mx-auto mb-2"
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Accura HexaPad
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4 text-center">
                          <img
                            src="/hardware/R700-LEITOR-RFID-UHF-ACCURA.png"
                            alt="Accura R700 Reader"
                            className="h-12 w-auto mx-auto mb-2"
                          />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Accura R700 Reader
                          </p>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <span className="text-2xl mr-3">📊</span>
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            Scalable ingestion handling traffic spikes
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            Near real-time operational visibility
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            Reduced MTTR with observability
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-700">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                          NestJS
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                          AWS Lambda
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                          DynamoDB
                        </span>
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">
                          React
                        </span>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full">
                          RFID
                        </span>
                      </div>
                      <a
                        href="https://rastreabilidade.demanda-abastecimento.grupoboticario.digital/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center"
                      >
                        <span className="mr-2">🌐</span>
                        View Platform
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="skills"
          className="py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              {t("skills.title")}
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  category={skill.category}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

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

        <section
          id="contact"
          className="py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              {t("contact.title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-xl text-gray-600 dark:text-gray-300 mb-12"
            >
              {t("contact.subtitle")}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="card p-6 text-center group"
                >
                  <link.icon className="w-8 h-8 mx-auto mb-4 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {link.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: {
  locale?: string;
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

export default Home;
