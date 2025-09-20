import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation("common");

  return (
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
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white dark:bg-dark-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-dark-700">
            {/* Hero Banner */}
            <div className="relative h-80 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent"></div>

              <div className="relative z-10 p-8 h-full flex items-center justify-between">
                <div className="text-white max-w-3xl">
                  <div className="flex items-center mb-6">
                    <img
                      src="/images/gb-rastreio-logo.png"
                      alt="GB Rastreio Logo"
                      className="h-16 w-auto mr-6"
                    />
                    <div>
                      <h3 className="text-4xl font-bold mb-2">
                        {t("projects.gbRastreio.title")}
                      </h3>
                      <p className="text-blue-200 text-lg">
                        {t("projects.gbRastreio.subtitle")}
                      </p>
                    </div>
                  </div>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    {t("projects.gbRastreio.description")}
                  </p>
                </div>

                <div className="hidden lg:flex space-x-4">
                  <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <span className="text-3xl">📡</span>
                  </div>
                  <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <span className="text-3xl">🏭</span>
                  </div>
                  <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <span className="text-3xl">☁️</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Context & Problem */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="text-3xl mr-4">🎯</span>
                  {t("projects.gbRastreio.challenge.title")}
                </h4>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    <strong>Grupo Boticário</strong>{" "}
                    {t("projects.gbRastreio.challenge.problem")}
                    <strong> {t("projects.gbRastreio.challenge.scale")}</strong>
                    .
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("projects.gbRastreio.challenge.technical")}
                  </p>
                </div>
              </div>

              {/* My Contribution */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="text-3xl mr-4">🚀</span>
                  {t("projects.gbRastreio.contribution.title")}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("projects.gbRastreio.contribution.architecture")}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("projects.gbRastreio.contribution.aws")}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("projects.gbRastreio.contribution.migration")}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("projects.gbRastreio.contribution.tagService")}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("projects.gbRastreio.contribution.security")}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("projects.gbRastreio.contribution.rfid")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="text-3xl mr-4">🛠️</span>
                  {t("projects.gbRastreio.technologies.title")}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="text-xl mr-2">⚡</span>
                      {t("projects.gbRastreio.technologies.backend.title")}
                    </h5>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full mr-2 mb-2">
                        NestJS
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full mr-2 mb-2">
                        Node.js
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full mr-2 mb-2">
                        TypeScript
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full mr-2 mb-2">
                        GraphQL
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="text-xl mr-2">☁️</span>
                      {t("projects.gbRastreio.technologies.cloud.title")}
                    </h5>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mr-2 mb-2">
                        Lambda
                      </span>
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mr-2 mb-2">
                        API Gateway
                      </span>
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mr-2 mb-2">
                        DocumentDB
                      </span>
                      <span className="inline-block px-3 py-1 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mr-2 mb-2">
                        S3 + Athena
                      </span>
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mr-2 mb-2">
                        DynamoDB
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="text-xl mr-2">🔧</span>
                      {t("projects.gbRastreio.technologies.hardware.title")}
                    </h5>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full mr-2 mb-2">
                        EPC Tags
                      </span>
                      <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full mr-2 mb-2">
                        SATO Printers
                      </span>
                      <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full mr-2 mb-2">
                        Bluebird Readers
                      </span>
                      <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full mr-2 mb-2">
                        Accura Hardware
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results & Metrics */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="text-3xl mr-4">📊</span>
                  {t("projects.gbRastreio.results.title")}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">
                        📈 {t("projects.gbRastreio.results.scale.title")}
                      </h5>
                      <ul className="text-green-700 dark:text-green-300 space-y-1">
                        <li>
                          • {t("projects.gbRastreio.results.scale.item1")}
                        </li>
                        <li>
                          • {t("projects.gbRastreio.results.scale.item2")}
                        </li>
                        <li>
                          • {t("projects.gbRastreio.results.scale.item3")}
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
                        💰 {t("projects.gbRastreio.results.cost.title")}
                      </h5>
                      <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• {t("projects.gbRastreio.results.cost.item1")}</li>
                        <li>• {t("projects.gbRastreio.results.cost.item2")}</li>
                        <li>• {t("projects.gbRastreio.results.cost.item3")}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
                      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">
                        🎯 {t("projects.gbRastreio.results.business.title")}
                      </h5>
                      <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                        <li>
                          • {t("projects.gbRastreio.results.business.item1")}
                        </li>
                        <li>
                          • {t("projects.gbRastreio.results.business.item2")}
                        </li>
                        <li>
                          • {t("projects.gbRastreio.results.business.item3")}
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg">
                      <h5 className="font-bold text-orange-800 dark:text-orange-200 mb-2">
                        🔒 {t("projects.gbRastreio.results.security.title")}
                      </h5>
                      <ul className="text-orange-700 dark:text-orange-300 space-y-1">
                        <li>
                          • {t("projects.gbRastreio.results.security.item1")}
                        </li>
                        <li>
                          • {t("projects.gbRastreio.results.security.item2")}
                        </li>
                        <li>
                          • {t("projects.gbRastreio.results.security.item3")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Highlights */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="text-3xl mr-4">⭐</span>
                  {t("projects.gbRastreio.highlights.title")}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="text-xl mr-2">🏗️</span>
                      {t("projects.gbRastreio.highlights.dataLake.title")}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {t("projects.gbRastreio.highlights.dataLake.description")}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="text-xl mr-2">🏷️</span>
                      {t("projects.gbRastreio.highlights.tagService.title")}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {t(
                        "projects.gbRastreio.highlights.tagService.description",
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hardware Integration */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="text-3xl mr-4">🔧</span>
                  {t("projects.gbRastreio.hardwareIntegration.title")}
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <img
                      src="/hardware/IMPRESSORA_SATO_RFID.png"
                      alt="SATO RFID Printer"
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t(
                        "projects.gbRastreio.hardwareIntegration.devices.sato.name",
                      )}
                    </h6>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t(
                        "projects.gbRastreio.hardwareIntegration.devices.sato.description",
                      )}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <img
                      src="/hardware/bluebird-rfr900-devicemobile.jpeg"
                      alt="Bluebird RFR900"
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t(
                        "projects.gbRastreio.hardwareIntegration.devices.bluebird.name",
                      )}
                    </h6>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t(
                        "projects.gbRastreio.hardwareIntegration.devices.bluebird.description",
                      )}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <img
                      src="/hardware/HEXAPAD-ACCURA.png"
                      alt="Accura HexaPad"
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t(
                        "projects.gbRastreio.hardwareIntegration.devices.hexapad.name",
                      )}
                    </h6>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t(
                        "projects.gbRastreio.hardwareIntegration.devices.hexapad.description",
                      )}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <img
                      src="/hardware/R700-LEITOR-RFID-UHF-ACCURA.png"
                      alt="Accura R700 Reader"
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t(
                        "projects.gbRastreio.hardwareIntegration.devices.r700.name",
                      )}
                    </h6>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t(
                        "projects.gbRastreio.hardwareIntegration.devices.r700.description",
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-8 border-t border-gray-200 dark:border-dark-700">
                <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
                      NestJS
                    </span>
                    <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full font-medium">
                      AWS Lambda
                    </span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">
                      S3 + Athena
                    </span>
                    <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full font-medium">
                      TypeScript
                    </span>
                    <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full font-medium">
                      RFID
                    </span>
                    <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full font-medium">
                      Microservices
                    </span>
                  </div>
                  <a
                    href="https://rastreabilidade.demanda-abastecimento.grupoboticario.digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center px-6 py-3 text-lg"
                  >
                    <span className="mr-2">🌐</span>
                    {t("projects.gbRastreio.viewPlatform")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
