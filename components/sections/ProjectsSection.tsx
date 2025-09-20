import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import ProjectNavigator from "../ProjectNavigator";
import { useState } from "react";

const ProjectsSection = () => {
  const { t } = useTranslation("common");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hasExploredOnce, setHasExploredOnce] = useState(false);

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
    setHasExploredOnce(true); // Marca que o usuário já explorou pelo menos uma vez
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Navigator */}
        <ProjectNavigator
          onProjectSelect={handleProjectSelect}
          currentProject={selectedProject || undefined}
          hasExploredOnce={hasExploredOnce}
        />

        {/* Project Details - Only show if a project is selected */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-7xl mx-auto space-y-12"
          >
            {/* Back to Navigator Button */}
            <div className="flex justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-dark-600"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Voltar ao Navegador
              </motion.button>
            </div>
            {/* GB Rastreio Project */}
            {selectedProject === "gbRastreio" && (
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
                        <strong>
                          {" "}
                          {t("projects.gbRastreio.challenge.scale")}
                        </strong>
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
                            <li>
                              • {t("projects.gbRastreio.results.cost.item1")}
                            </li>
                            <li>
                              • {t("projects.gbRastreio.results.cost.item2")}
                            </li>
                            <li>
                              • {t("projects.gbRastreio.results.cost.item3")}
                            </li>
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
                              •{" "}
                              {t("projects.gbRastreio.results.business.item1")}
                            </li>
                            <li>
                              •{" "}
                              {t("projects.gbRastreio.results.business.item2")}
                            </li>
                            <li>
                              •{" "}
                              {t("projects.gbRastreio.results.business.item3")}
                            </li>
                          </ul>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg">
                          <h5 className="font-bold text-orange-800 dark:text-orange-200 mb-2">
                            🔒 {t("projects.gbRastreio.results.security.title")}
                          </h5>
                          <ul className="text-orange-700 dark:text-orange-300 space-y-1">
                            <li>
                              •{" "}
                              {t("projects.gbRastreio.results.security.item1")}
                            </li>
                            <li>
                              •{" "}
                              {t("projects.gbRastreio.results.security.item2")}
                            </li>
                            <li>
                              •{" "}
                              {t("projects.gbRastreio.results.security.item3")}
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
                          {t(
                            "projects.gbRastreio.highlights.dataLake.description",
                          )}
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

                {/* Platform Screenshot Section */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-700 dark:to-dark-600">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                      <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {t("projects.gbRastreio.screenshot.title")}
                      </h4>
                      <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                        {t("projects.gbRastreio.screenshot.subtitle")}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                        {t("projects.gbRastreio.screenshot.description")}
                      </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                      <div className="bg-white dark:bg-dark-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-dark-700">
                        <div className="p-8">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              GB Rastreio - Plataforma de Rastreabilidade
                            </div>
                          </div>

                          <div className="relative">
                            <img
                              src="/prints/gb-rastreio-home.jpeg"
                              alt="GB Rastreio Platform Interface"
                              className="w-full h-auto rounded-2xl shadow-lg border border-gray-200 dark:border-dark-600"
                            />

                            {/* Overlay with info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 text-white">
                                <div className="bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg">
                                  <p className="text-sm font-medium">
                                    Interface da Plataforma RFID
                                  </p>
                                  <p className="text-xs text-gray-300">
                                    Sistema de Tagueamento e Rastreabilidade
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RFID Printing Process Section */}
                <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-dark-700 dark:to-dark-600">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                      <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {t("projects.gbRastreio.printing.title")}
                      </h4>
                      <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                        {t("projects.gbRastreio.printing.subtitle")}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                        {t("projects.gbRastreio.printing.description")}
                      </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                      <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                        <video
                          className="w-full h-auto rounded-2xl"
                          controls
                          preload="none"
                          style={{ maxHeight: "600px" }}
                          onLoadStart={() =>
                            console.log("Printing video loading started")
                          }
                          onCanPlay={() =>
                            console.log("Printing video can play")
                          }
                          onError={(e) =>
                            console.log("Printing video error:", e)
                          }
                        >
                          <source
                            src="/videos/printing-tags-rfid.mp4"
                            type="video/mp4"
                          />
                          <track
                            kind="captions"
                            srcLang="pt"
                            label="Português"
                          />
                          <track
                            kind="captions"
                            srcLang="en"
                            label="English"
                          />
                          Seu navegador não suporta o elemento de vídeo.
                        </video>

                        {/* Loading indicator */}
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          🖨️ Impressão RFID
                        </div>
                      </div>

                      {/* Instructions */}
                      <div className="mt-4 text-center">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          💡 <strong>Dica:</strong> Clique no botão de play para
                          ver o processo de impressão das etiquetas RFID em ação
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Demo Section */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-700 dark:to-dark-600">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                      <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {t("projects.gbRastreio.demo.title")}
                      </h4>
                      <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                        {t("projects.gbRastreio.demo.subtitle")}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                        {t("projects.gbRastreio.demo.description")}
                      </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                      <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                        <video
                          className="w-full h-auto rounded-2xl"
                          controls
                          preload="none"
                          style={{ maxHeight: "600px" }}
                          onLoadStart={() =>
                            console.log("Video loading started")
                          }
                          onCanPlay={() => console.log("Video can play")}
                          onError={(e) => console.log("Video error:", e)}
                        >
                          <source
                            src="/videos/RFID_OPERATION.mp4"
                            type="video/mp4"
                          />
                          <track
                            kind="captions"
                            srcLang="pt"
                            label="Português"
                          />
                          <track
                            kind="captions"
                            srcLang="en"
                            label="English"
                          />
                          Seu navegador não suporta o elemento de vídeo.
                        </video>

                        {/* Loading indicator */}
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          📹 Demo RFID
                        </div>
                      </div>

                      {/* Instructions */}
                      <div className="mt-4 text-center">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          💡 <strong>Dica:</strong> Clique no botão de play para
                          ver a demonstração da plataforma RFID em funcionamento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Venda Unificada Project */}
            {selectedProject === "vendaUnificada" && (
              <div className="bg-white dark:bg-dark-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-dark-700">
                {/* Hero Banner */}
                <div className="relative h-80 bg-gradient-to-br from-pink-600 via-red-600 to-orange-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/50 to-transparent"></div>

                  <div className="relative z-10 p-8 h-full flex items-center justify-between">
                    <div className="text-white max-w-3xl">
                      <div className="flex items-center mb-6">
                        <div className="h-16 w-16 bg-white/20 rounded-xl flex items-center justify-center mr-6 backdrop-blur-sm">
                          <span className="text-3xl">🛍️</span>
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold mb-2">
                            {t("projects.vendaUnificada.title")}
                          </h3>
                          <p className="text-pink-200 text-lg">
                            {t("projects.vendaUnificada.subtitle")}
                          </p>
                        </div>
                      </div>
                      <p className="text-xl text-pink-100 leading-relaxed">
                        {t("projects.vendaUnificada.description")}
                      </p>
                    </div>

                    <div className="hidden lg:flex space-x-4">
                      <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <span className="text-3xl">📱</span>
                      </div>
                      <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <span className="text-3xl">🏪</span>
                      </div>
                      <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <span className="text-3xl">💳</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Context & Problem */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">🎯</span>
                      {t("projects.vendaUnificada.challenge.title")}
                    </h4>
                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Lojas Renner</strong>{" "}
                        {t("projects.vendaUnificada.challenge.problem")}
                        <strong>
                          {" "}
                          {t("projects.vendaUnificada.challenge.scale")}
                        </strong>
                        .
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t("projects.vendaUnificada.challenge.technical")}
                      </p>
                    </div>
                  </div>

                  {/* My Contribution */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">🚀</span>
                      {t("projects.vendaUnificada.contribution.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t(
                              "projects.vendaUnificada.contribution.architecture",
                            )}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t(
                              "projects.vendaUnificada.contribution.authentication",
                            )}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t("projects.vendaUnificada.contribution.api")}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t("projects.vendaUnificada.contribution.rfid")}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t("projects.vendaUnificada.contribution.payment")}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t("projects.vendaUnificada.contribution.mobile")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">🛠️</span>
                      {t("projects.vendaUnificada.technologies.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">📱</span>
                          {t(
                            "projects.vendaUnificada.technologies.mobile.title",
                          )}
                        </h5>
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full mr-2 mb-2">
                            React Native
                          </span>
                          <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full mr-2 mb-2">
                            GraphQL
                          </span>
                          <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full mr-2 mb-2">
                            Keycloak
                          </span>
                          <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full mr-2 mb-2">
                            Mobile UI/UX
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">⚡</span>
                          {t(
                            "projects.vendaUnificada.technologies.backend.title",
                          )}
                        </h5>
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full mr-2 mb-2">
                            Node.js
                          </span>
                          <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full mr-2 mb-2">
                            BFF Architecture
                          </span>
                          <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full mr-2 mb-2">
                            GraphQL
                          </span>
                          <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full mr-2 mb-2">
                            REST APIs
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">🔧</span>
                          {t(
                            "projects.vendaUnificada.technologies.hardware.title",
                          )}
                        </h5>
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full mr-2 mb-2">
                            Bluebird RFR900
                          </span>
                          <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full mr-2 mb-2">
                            RFID Tags
                          </span>
                          <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full mr-2 mb-2">
                            Pinpad Devices
                          </span>
                          <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full mr-2 mb-2">
                            Mobile Sled
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results & Metrics */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">📊</span>
                      {t("projects.vendaUnificada.results.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-6 rounded-r-lg">
                          <h5 className="font-bold text-pink-800 dark:text-pink-200 mb-2">
                            🏪{" "}
                            {t(
                              "projects.vendaUnificada.results.efficiency.title",
                            )}
                          </h5>
                          <ul className="text-pink-700 dark:text-pink-300 space-y-1">
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.efficiency.item1",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.efficiency.item2",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.efficiency.item3",
                              )}
                            </li>
                          </ul>
                        </div>

                        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                          <h5 className="font-bold text-red-800 dark:text-red-200 mb-2">
                            ⚡{" "}
                            {t(
                              "projects.vendaUnificada.results.technology.title",
                            )}
                          </h5>
                          <ul className="text-red-700 dark:text-red-300 space-y-1">
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.technology.item1",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.technology.item2",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.technology.item3",
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg">
                          <h5 className="font-bold text-orange-800 dark:text-orange-200 mb-2">
                            🎯{" "}
                            {t(
                              "projects.vendaUnificada.results.business.title",
                            )}
                          </h5>
                          <ul className="text-orange-700 dark:text-orange-300 space-y-1">
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.business.item1",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.business.item2",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.business.item3",
                              )}
                            </li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
                          <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">
                            🚀{" "}
                            {t(
                              "projects.vendaUnificada.results.innovation.title",
                            )}
                          </h5>
                          <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.innovation.item1",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.innovation.item2",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.vendaUnificada.results.innovation.item3",
                              )}
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
                      {t("projects.vendaUnificada.highlights.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">🛍️</span>
                          {t(
                            "projects.vendaUnificada.highlights.omnichannel.title",
                          )}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {t(
                            "projects.vendaUnificada.highlights.omnichannel.description",
                          )}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-purple-50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">📡</span>
                          {t("projects.vendaUnificada.highlights.rfid.title")}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {t(
                            "projects.vendaUnificada.highlights.rfid.description",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RFID Technology Showcase */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">🏷️</span>
                      {t("projects.vendaUnificada.rfidShowcase.title")}
                    </h4>
                    <div className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-2 lg:order-1">
                          <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="text-2xl mr-3">📡</span>
                            {t("projects.vendaUnificada.rfidShowcase.subtitle")}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {t(
                              "projects.vendaUnificada.rfidShowcase.description",
                            )}
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>
                                  {t(
                                    "projects.vendaUnificada.rfidShowcase.details.productCode",
                                  )}
                                </strong>{" "}
                                546099971
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>
                                  {t(
                                    "projects.vendaUnificada.rfidShowcase.details.epcCode",
                                  )}
                                </strong>{" "}
                                3BE10000208CD30300002723
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>
                                  {t(
                                    "projects.vendaUnificada.rfidShowcase.details.size",
                                  )}
                                </strong>{" "}
                                M (Medium)
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>
                                  {t(
                                    "projects.vendaUnificada.rfidShowcase.details.qrCode",
                                  )}
                                </strong>{" "}
                                {t(
                                  "projects.vendaUnificada.rfidShowcase.details.qrDescription",
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="order-1 lg:order-2">
                          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-dark-600">
                            <img
                              src="/images/rfid-tag-on-clothe-renner.jpg"
                              alt="RFID Tag embedded in Lojas Renner clothing showing product details, size information, QR code, and RFID symbol for inventory tracking"
                              className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hardware Integration */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">🔧</span>
                      {t("projects.vendaUnificada.hardwareIntegration.title")}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <img
                          src="/hardware/bluebird-rfr900-devicemobile.jpeg"
                          alt="Bluebird RFR900 Mobile RFID Reader"
                          className="h-20 w-auto mx-auto mb-4 rounded-lg"
                        />
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t(
                            "projects.vendaUnificada.hardwareIntegration.devices.bluebird.name",
                          )}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(
                            "projects.vendaUnificada.hardwareIntegration.devices.bluebird.description",
                          )}
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="h-20 w-20 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl">💳</span>
                        </div>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t(
                            "projects.vendaUnificada.hardwareIntegration.devices.pinpad.name",
                          )}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(
                            "projects.vendaUnificada.hardwareIntegration.devices.pinpad.description",
                          )}
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="h-20 w-20 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl">📱</span>
                        </div>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t(
                            "projects.vendaUnificada.hardwareIntegration.devices.mobile.name",
                          )}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(
                            "projects.vendaUnificada.hardwareIntegration.devices.mobile.description",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Demo & Screenshots */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">📱</span>
                      {t("projects.vendaUnificada.demo.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">🛍️</span>
                          {t(
                            "projects.vendaUnificada.demo.productInterface.title",
                          )}
                        </h5>
                        <div className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-lg">
                          <img
                            src="/prints/ui-omni-sale-demo.jpeg"
                            alt="Omni Sale Demo Interface"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 leading-relaxed">
                          {t(
                            "projects.vendaUnificada.demo.productInterface.description",
                          )}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-purple-50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">📱</span>
                          {t("projects.vendaUnificada.demo.mobileApp.title")}
                        </h5>
                        <div className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-lg">
                          <img
                            src="/prints/demo-app-real-omni-sale.jpeg"
                            alt="Real Omni Sale App Demo"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 leading-relaxed">
                          {t(
                            "projects.vendaUnificada.demo.mobileApp.description",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-8 border-t border-gray-200 dark:border-dark-700">
                    <div className="flex justify-center">
                      <div className="flex flex-wrap gap-3 justify-center">
                        <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full font-medium">
                          React Native
                        </span>
                        <span className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full font-medium">
                          Node.js
                        </span>
                        <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full font-medium">
                          GraphQL
                        </span>
                        <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">
                          Keycloak
                        </span>
                        <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full font-medium">
                          RFID
                        </span>
                        <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
                          Omnichannel
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Caixa de Autoatendimento Project */}
            {selectedProject === "caixaAutoatendimento" && (
              <div className="bg-white dark:bg-dark-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-dark-700">
                {/* Hero Banner */}
                <div className="relative h-80 bg-gradient-to-br from-green-600 via-teal-600 to-cyan-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-transparent"></div>

                  <div className="relative z-10 p-8 h-full flex items-center justify-between">
                    <div className="text-white max-w-3xl">
                      <div className="flex items-center mb-6">
                        <div className="h-16 w-16 bg-white/20 rounded-xl flex items-center justify-center mr-6 backdrop-blur-sm">
                          <span className="text-3xl">🏪</span>
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold mb-2">
                            {t("projects.caixaAutoatendimento.title")}
                          </h3>
                          <p className="text-green-200 text-lg">
                            {t("projects.caixaAutoatendimento.subtitle")}
                          </p>
                        </div>
                      </div>
                      <p className="text-xl text-green-100 leading-relaxed">
                        {t("projects.caixaAutoatendimento.description")}
                      </p>
                    </div>

                    <div className="hidden lg:flex space-x-4">
                      <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <span className="text-3xl">💳</span>
                      </div>
                      <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <span className="text-3xl">📱</span>
                      </div>
                      <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <span className="text-3xl">🏷️</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Context & Problem */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">🎯</span>
                      {t("projects.caixaAutoatendimento.challenge.title")}
                    </h4>
                    <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>Lojas Renner</strong>{" "}
                        {t("projects.caixaAutoatendimento.challenge.problem")}
                        <strong>
                          {" "}
                          {t("projects.caixaAutoatendimento.challenge.scale")}
                        </strong>
                        .
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t("projects.caixaAutoatendimento.challenge.technical")}
                      </p>
                    </div>
                  </div>

                  {/* My Contribution */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">🚀</span>
                      {t("projects.caixaAutoatendimento.contribution.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t(
                              "projects.caixaAutoatendimento.contribution.architecture",
                            )}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t(
                              "projects.caixaAutoatendimento.contribution.rfid",
                            )}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t(
                              "projects.caixaAutoatendimento.contribution.payment",
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t("projects.caixaAutoatendimento.contribution.ui")}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-lime-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t(
                              "projects.caixaAutoatendimento.contribution.security",
                            )}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t(
                              "projects.caixaAutoatendimento.contribution.scalability",
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">🛠️</span>
                      {t("projects.caixaAutoatendimento.technologies.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">📱</span>
                          {t(
                            "projects.caixaAutoatendimento.technologies.frontend.title",
                          )}
                        </h5>
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mr-2 mb-2">
                            Touchscreen Interface
                          </span>
                          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mr-2 mb-2">
                            React
                          </span>
                          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mr-2 mb-2">
                            Payment UI
                          </span>
                          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full mr-2 mb-2">
                            Customer Experience
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">⚡</span>
                          {t(
                            "projects.caixaAutoatendimento.technologies.backend.title",
                          )}
                        </h5>
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm rounded-full mr-2 mb-2">
                            Node.js
                          </span>
                          <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm rounded-full mr-2 mb-2">
                            Payment APIs
                          </span>
                          <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm rounded-full mr-2 mb-2">
                            RFID Middleware
                          </span>
                          <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm rounded-full mr-2 mb-2">
                            Inventory Management
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">🔧</span>
                          {t(
                            "projects.caixaAutoatendimento.technologies.hardware.title",
                          )}
                        </h5>
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm rounded-full mr-2 mb-2">
                            RFID Readers
                          </span>
                          <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm rounded-full mr-2 mb-2">
                            Payment Terminals
                          </span>
                          <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm rounded-full mr-2 mb-2">
                            Self-Checkout Kiosks
                          </span>
                          <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm rounded-full mr-2 mb-2">
                            Alarm Systems
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results & Metrics */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">📊</span>
                      {t("projects.caixaAutoatendimento.results.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                          <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">
                            🏪{" "}
                            {t(
                              "projects.caixaAutoatendimento.results.scale.title",
                            )}
                          </h5>
                          <ul className="text-green-700 dark:text-green-300 space-y-1">
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.scale.item1",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.scale.item2",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.scale.item3",
                              )}
                            </li>
                          </ul>
                        </div>

                        <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-6 rounded-r-lg">
                          <h5 className="font-bold text-teal-800 dark:text-teal-200 mb-2">
                            ⚡{" "}
                            {t(
                              "projects.caixaAutoatendimento.results.efficiency.title",
                            )}
                          </h5>
                          <ul className="text-teal-700 dark:text-teal-300 space-y-1">
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.efficiency.item1",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.efficiency.item2",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.efficiency.item3",
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                          <h5 className="font-bold text-cyan-800 dark:text-cyan-200 mb-2">
                            🚀{" "}
                            {t(
                              "projects.caixaAutoatendimento.results.innovation.title",
                            )}
                          </h5>
                          <ul className="text-cyan-700 dark:text-cyan-300 space-y-1">
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.innovation.item1",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.innovation.item2",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.innovation.item3",
                              )}
                            </li>
                          </ul>
                        </div>

                        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded-r-lg">
                          <h5 className="font-bold text-emerald-800 dark:text-emerald-200 mb-2">
                            👥{" "}
                            {t(
                              "projects.caixaAutoatendimento.results.customer.title",
                            )}
                          </h5>
                          <ul className="text-emerald-700 dark:text-emerald-300 space-y-1">
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.customer.item1",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.customer.item2",
                              )}
                            </li>
                            <li>
                              •{" "}
                              {t(
                                "projects.caixaAutoatendimento.results.customer.item3",
                              )}
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
                      {t("projects.caixaAutoatendimento.highlights.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">🏷️</span>
                          {t(
                            "projects.caixaAutoatendimento.highlights.rfid.title",
                          )}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {t(
                            "projects.caixaAutoatendimento.highlights.rfid.description",
                          )}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 dark:from-cyan-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">📈</span>
                          {t(
                            "projects.caixaAutoatendimento.highlights.scalability.title",
                          )}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {t(
                            "projects.caixaAutoatendimento.highlights.scalability.description",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hardware Integration */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">🔧</span>
                      {t(
                        "projects.caixaAutoatendimento.hardwareIntegration.title",
                      )}
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="h-16 w-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🏪</span>
                        </div>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t(
                            "projects.caixaAutoatendimento.hardwareIntegration.devices.kiosk.name",
                          )}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(
                            "projects.caixaAutoatendimento.hardwareIntegration.devices.kiosk.description",
                          )}
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="h-16 w-16 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">💳</span>
                        </div>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t(
                            "projects.caixaAutoatendimento.hardwareIntegration.devices.payment.name",
                          )}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(
                            "projects.caixaAutoatendimento.hardwareIntegration.devices.payment.description",
                          )}
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="h-16 w-16 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">📡</span>
                        </div>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t(
                            "projects.caixaAutoatendimento.hardwareIntegration.devices.rfid.name",
                          )}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(
                            "projects.caixaAutoatendimento.hardwareIntegration.devices.rfid.description",
                          )}
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🔒</span>
                        </div>
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t(
                            "projects.caixaAutoatendimento.hardwareIntegration.devices.alarm.name",
                          )}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(
                            "projects.caixaAutoatendimento.hardwareIntegration.devices.alarm.description",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Demo & Screenshots */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">📱</span>
                      {t("projects.caixaAutoatendimento.demo.title")}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">🏪</span>
                          {t("projects.caixaAutoatendimento.demo.totem.title")}
                        </h5>
                        <div className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-lg">
                          <img
                            src="/images/renner-totem.jpeg"
                            alt="Self-Checkout Station at Lojas Renner"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 leading-relaxed">
                          {t(
                            "projects.caixaAutoatendimento.demo.totem.description",
                          )}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 dark:from-cyan-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <span className="text-xl mr-2">💳</span>
                          {t(
                            "projects.caixaAutoatendimento.demo.payment.title",
                          )}
                        </h5>
                        <div className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-lg">
                          <img
                            src="/images/aixa_autoatendimento_renner_credito_divulgacao-2048x1363.jpg"
                            alt="Payment Interface at Self-Checkout"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 leading-relaxed">
                          {t(
                            "projects.caixaAutoatendimento.demo.payment.description",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Press Coverage & Media Links */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <span className="text-3xl mr-4">📰</span>
                      {t("projects.caixaAutoatendimento.press.title")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-4xl mx-auto">
                      {t("projects.caixaAutoatendimento.press.description")}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Mercado e Consumo Article */}
                      <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                              <span className="text-xl">📰</span>
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-900 dark:text-white text-lg">
                                {t(
                                  "projects.caixaAutoatendimento.press.articles.mercadoeconsumo.title",
                                )}
                              </h5>
                              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                                {t(
                                  "projects.caixaAutoatendimento.press.articles.mercadoeconsumo.source",
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center text-blue-500 dark:text-blue-400">
                            <span className="text-sm mr-1">
                              {t(
                                "projects.caixaAutoatendimento.press.externalLink",
                              )}
                            </span>
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          {t(
                            "projects.caixaAutoatendimento.press.articles.mercadoeconsumo.description",
                          )}
                        </p>
                        <a
                          href="https://mercadoeconsumo.com.br/15/03/2023/noticias-varejo/renner-acelera-implantacao-de-caixas-de-autoatendimento/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 group-hover:shadow-lg"
                        >
                          <span className="mr-2">
                            {t("projects.caixaAutoatendimento.press.readMore")}
                          </span>
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>

                      {/* Lojas Renner Official Article */}
                      <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                              <span className="text-xl">🏢</span>
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-900 dark:text-white text-lg">
                                {t(
                                  "projects.caixaAutoatendimento.press.articles.renner.title",
                                )}
                              </h5>
                              <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                                {t(
                                  "projects.caixaAutoatendimento.press.articles.renner.source",
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center text-green-500 dark:text-green-400">
                            <span className="text-sm mr-1">
                              {t(
                                "projects.caixaAutoatendimento.press.externalLink",
                              )}
                            </span>
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          {t(
                            "projects.caixaAutoatendimento.press.articles.renner.description",
                          )}
                        </p>
                        <a
                          href="https://www.lojasrennersa.com.br/imprensa-destaques/renner-acelera-implantacao-de-caixas-de-autoatendimento-com-tecnologia-rfid/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 group-hover:shadow-lg"
                        >
                          <span className="mr-2">
                            {t("projects.caixaAutoatendimento.press.readMore")}
                          </span>
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-8 border-t border-gray-200 dark:border-dark-700">
                    <div className="flex justify-center">
                      <div className="flex flex-wrap gap-3 justify-center">
                        <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full font-medium">
                          RFID
                        </span>
                        <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm rounded-full font-medium">
                          Node.js
                        </span>
                        <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-sm rounded-full font-medium">
                          React
                        </span>
                        <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm rounded-full font-medium">
                          Payment APIs
                        </span>
                        <span className="px-4 py-2 bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200 text-sm rounded-full font-medium">
                          Self-Checkout
                        </span>
                        <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
                          Innovation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
