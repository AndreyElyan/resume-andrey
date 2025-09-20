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
  );
};

export default ContactSection;
