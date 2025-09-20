import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation("common");

  const contactLinks = [
    {
      name: t("contact.email"),
      icon: Mail,
      href: "mailto:andreyelyan.contato@gmail.com",
      description: "andreyelyan.contato@gmail.com",
    },
    {
      name: t("contact.linkedin"),
      icon: Linkedin,
      href: "https://www.linkedin.com/in/andrey-elyan/",
      description: "linkedin.com/in/andrey-elyan/",
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
      href: "https://wa.me/5551985809513",
      description: "(51) 98580-9513",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-dark-800"
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
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={`contact-${index}-${link.name}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-dark-700 rounded-2xl p-6 text-center group shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-600 h-full"
            >
              <div className="flex flex-col items-center h-full">
                <div className="mb-4">
                  <link.icon className="w-10 h-10 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
