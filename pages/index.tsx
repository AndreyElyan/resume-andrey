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
import ProjectCard from "../components/ProjectCard";
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title={t("projects.items.microservice.title")}
                description={t("projects.items.microservice.description")}
                tech={t("projects.items.microservice.tech")}
                githubUrl="https://github.com/andreyelyan/ecommerce-microservice"
                delay={0}
              />
              <ProjectCard
                title={t("projects.items.dashboard.title")}
                description={t("projects.items.dashboard.description")}
                tech={t("projects.items.dashboard.tech")}
                githubUrl="https://github.com/andreyelyan/analytics-dashboard"
                liveUrl="https://dashboard-demo.vercel.app"
                delay={0.1}
              />
              <ProjectCard
                title={t("projects.items.rfid.title")}
                description={t("projects.items.rfid.description")}
                tech={t("projects.items.rfid.tech")}
                githubUrl="https://github.com/andreyelyan/rfid-integration"
                delay={0.2}
              />
            </div>
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
