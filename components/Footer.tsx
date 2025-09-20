import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation("common");

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/andreyelyan",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/andreyelyan",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:andreyelyan.contato@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Andrey Elyan
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Senior Software Engineer specializing in scalable microservices
                and modern web applications.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t("contact.title")}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-lg bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-400 transition-colors duration-300 ${link.color}`}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 Andrey Elyan. {t("footer.rights")}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            {t("footer.built")}{" "}
            <Heart
              className="mx-1 text-red-500"
              size={16}
            />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
