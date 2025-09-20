import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

interface ProjectDetailViewProps {
  project: {
    id: string;
    title: string;
    shortTitle: string;
    subtitle: string;
    description: string;
    technologies: string[];
    gradient: string;
    image: string;
    category: string;
  };
  onBackToProjects: () => void;
  onNextProject: () => void;
  onPreviousProject: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBackToProjects,
  onNextProject,
  onPreviousProject,
  hasNext,
  hasPrevious,
}) => {
  const { t } = useTranslation("common");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{
    src: string;
    alt: string;
    type: string;
  } | null>(null);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedMedia) {
        setSelectedMedia(null);
      }
    };

    if (selectedMedia) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedMedia]);

  const getProjectData = () => {
    switch (project.id) {
      case "gbRastreio":
        return {
          heroImage: "/images/RFID-STORAGE.jpeg",
          challenge: t("projects.gbRastreio.challenge.problem"),
          scale: t("projects.gbRastreio.challenge.scale"),
          description: t("projects.gbRastreio.description"),
          contributions: [
            {
              icon: "🏗️",
              title: t("projects.gbRastreio.contribution.architecture"),
              description: t("projects.gbRastreio.contribution.architecture"),
            },
            {
              icon: "☁️",
              title: t("projects.gbRastreio.contribution.aws"),
              description: t("projects.gbRastreio.contribution.aws"),
            },
            {
              icon: "📊",
              title: t("projects.gbRastreio.contribution.migration"),
              description: t("projects.gbRastreio.contribution.migration"),
            },
            {
              icon: "🚀",
              title: t("projects.gbRastreio.contribution.cicd"),
              description: t("projects.gbRastreio.contribution.cicd"),
            },
          ],
          impact: [
            {
              value: "91%",
              label: t(
                "projects.gbRastreio.results.impactLabels.storageCostReduction",
              ),
              icon: "💰",
            },
            {
              value: "2M+",
              label: t(
                "projects.gbRastreio.results.impactLabels.rfidTagsMonth",
              ),
              icon: "📦",
            },
            {
              value: "Hours → Minutes",
              label: t(
                "projects.gbRastreio.results.impactLabels.queryPerformance",
              ),
              icon: "⚡",
            },
            {
              value: "40-60%",
              label: t(
                "projects.gbRastreio.results.impactLabels.analyticsSavings",
              ),
              icon: "📈",
            },
          ],
          costOptimization: {
            title: t("projects.gbRastreio.results.cost.title"),
            details: [
              t("projects.gbRastreio.results.cost.item1"),
              t("projects.gbRastreio.results.cost.item2"),
              t("projects.gbRastreio.results.cost.item3"),
            ],
          },
          architecture: {
            title: t("projects.gbRastreio.technologies.title"),
            backend: Array.isArray(
              t("projects.gbRastreio.technologies.backend.items"),
            )
              ? (t(
                  "projects.gbRastreio.technologies.backend.items",
                ) as unknown as string[])
              : ["Node.js", "TypeScript", "NestJS", "REST", "WebSockets"],
            aws: Array.isArray(
              t("projects.gbRastreio.technologies.cloud.items"),
            )
              ? (t(
                  "projects.gbRastreio.technologies.cloud.items",
                ) as unknown as string[])
              : [
                  "Lambda",
                  "API Gateway",
                  "DynamoDB",
                  "DocumentDB",
                  "SQS",
                  "S3",
                  "Athena",
                ],
            platform: [
              "GitHub Actions",
              "Argo CD",
              "New Relic",
              "OpenTelemetry",
            ],
            frontend: ["React", "Next.js", "RBAC", "Telemetry hooks"],
          },
          hardware: [
            {
              name: t(
                "projects.gbRastreio.hardwareIntegration.devices.bluebird.name",
              ),
              description: t(
                "projects.gbRastreio.hardwareIntegration.devices.bluebird.description",
              ),
              image: "/hardware/bluebird-rfr900-devicemobile.jpeg",
            },
            {
              name: t(
                "projects.gbRastreio.hardwareIntegration.devices.sato.name",
              ),
              description: t(
                "projects.gbRastreio.hardwareIntegration.devices.sato.description",
              ),
              image: "/hardware/IMPRESSORA_SATO_RFID.png",
            },
            {
              name: t(
                "projects.gbRastreio.hardwareIntegration.devices.hexapad.name",
              ),
              description: t(
                "projects.gbRastreio.hardwareIntegration.devices.hexapad.description",
              ),
              image: "/hardware/HEXAPAD-ACCURA.png",
            },
            {
              name: t(
                "projects.gbRastreio.hardwareIntegration.devices.r700.name",
              ),
              description: t(
                "projects.gbRastreio.hardwareIntegration.devices.r700.description",
              ),
              image: "/hardware/R700-LEITOR-RFID-UHF-ACCURA.png",
            },
          ],
          media: [
            {
              src: "/prints/gb-rastreio-home.jpeg",
              alt: t("projects.gbRastreio.mediaAlt.rfidDashboard"),
              type: "image",
            },
            {
              src: "/images/RFID-STORAGE.jpeg",
              alt: t("projects.gbRastreio.mediaAlt.cloudArchitecture"),
              type: "image",
            },
            {
              src: "/hardware/bluebird-rfr900-devicemobile.jpeg",
              alt: t("projects.gbRastreio.mediaAlt.rfidHardware"),
              type: "image",
            },
            {
              src: "/videos/RFID_OPERATION.mp4",
              alt: t("projects.gbRastreio.demo.title"),
              type: "video",
            },
            {
              src: "/videos/printing-tags-rfid.mp4",
              alt: t("projects.gbRastreio.printing.title"),
              type: "video",
            },
          ],
          demoUrl:
            "https://rastreabilidade.demanda-abastecimento.grupoboticario.digital/",
        };
      case "vendaUnificada":
        return {
          heroImage: "/images/OMNI-SALE.jpeg",
          challenge: t("projects.vendaUnificada.challenge.problem"),
          scale: t("projects.vendaUnificada.challenge.scale"),
          description: t("projects.vendaUnificada.description"),
          contributions: [
            {
              icon: "📱",
              title: t("projects.vendaUnificada.contributions.mobileDev"),
              description: t(
                "projects.vendaUnificada.contributions.mobileDevDesc",
              ),
            },
            {
              icon: "🔐",
              title: t("projects.vendaUnificada.contributions.auth"),
              description: t("projects.vendaUnificada.contributions.authDesc"),
            },
            {
              icon: "🔗",
              title: t("projects.vendaUnificada.contributions.apiIntegration"),
              description: t(
                "projects.vendaUnificada.contributions.apiIntegrationDesc",
              ),
            },
            {
              icon: "💳",
              title: t(
                "projects.vendaUnificada.contributions.paymentIntegration",
              ),
              description: t(
                "projects.vendaUnificada.contributions.paymentIntegrationDesc",
              ),
            },
          ],
          impact: [
            {
              value: "500+",
              label: t("projects.vendaUnificada.impactLabels.physicalStores"),
              icon: "🏪",
            },
            {
              value: "Unified",
              label: t(
                "projects.vendaUnificada.impactLabels.shoppingExperience",
              ),
              icon: "🛒",
            },
            {
              value: "Real-time",
              label: t("projects.vendaUnificada.impactLabels.inventorySync"),
              icon: "⚡",
            },
            {
              value: "Mobile-first",
              label: t("projects.vendaUnificada.impactLabels.designApproach"),
              icon: "📱",
            },
          ],
          architecture: {
            title: t("projects.vendaUnificada.architecture.title"),
            mobile: t("projects.vendaUnificada.architecture.mobile"),
            backend: t("projects.vendaUnificada.architecture.backend"),
            auth: t("projects.vendaUnificada.architecture.auth"),
            payment: t("projects.vendaUnificada.architecture.payment"),
            hardware: t("projects.vendaUnificada.architecture.hardware"),
          },
          features: t("projects.vendaUnificada.features"),
          media: [
            {
              src: "/prints/ui-omni-sale-demo.jpeg",
              alt: t("projects.vendaUnificada.mediaAlt.omniSaleInterface"),
              type: "image",
            },
            {
              src: "/images/OMNI-SALE.jpeg",
              alt: t("projects.vendaUnificada.mediaAlt.omnichannelIntegration"),
              type: "image",
            },
            {
              src: "/images/rfid-tag-on-clothe-renner.jpg",
              alt: t("projects.vendaUnificada.mediaAlt.rfidTagOnProduct"),
              type: "image",
            },
            {
              src: "/prints/demo-app-real-omni-sale.jpeg",
              alt: t("projects.vendaUnificada.mediaAlt.realOmniSaleDemo"),
              type: "image",
            },
          ],
        };
      case "caixaAutoatendimento":
        return {
          heroImage: "/images/Self-Service Kiosk with RFID Technology.jpeg",
          challenge: t("projects.caixaAutoatendimento.challenge.problem"),
          scale: t("projects.caixaAutoatendimento.challenge.scale"),
          description: t("projects.caixaAutoatendimento.description"),
          contributions: [
            {
              icon: "🏪",
              title: t(
                "projects.caixaAutoatendimento.contributions.selfCheckout",
              ),
              description: t(
                "projects.caixaAutoatendimento.contributions.selfCheckoutDesc",
              ),
            },
            {
              icon: "💳",
              title: t(
                "projects.caixaAutoatendimento.contributions.paymentProcessing",
              ),
              description: t(
                "projects.caixaAutoatendimento.contributions.paymentProcessingDesc",
              ),
            },
            {
              icon: "📊",
              title: t(
                "projects.caixaAutoatendimento.contributions.inventoryManagement",
              ),
              description: t(
                "projects.caixaAutoatendimento.contributions.inventoryManagementDesc",
              ),
            },
            {
              icon: "🔔",
              title: t(
                "projects.caixaAutoatendimento.contributions.securityFeatures",
              ),
              description: t(
                "projects.caixaAutoatendimento.contributions.securityFeaturesDesc",
              ),
            },
          ],
          impact: [
            {
              value: "742",
              label: t(
                "projects.caixaAutoatendimento.impactLabels.selfCheckoutStations",
              ),
              icon: "🏪",
            },
            {
              value: "213",
              label: t(
                "projects.caixaAutoatendimento.impactLabels.storesNationwide",
              ),
              icon: "📍",
            },
            {
              value: "87%",
              label: t(
                "projects.caixaAutoatendimento.impactLabels.stockoutReduction",
              ),
              icon: "📉",
            },
            {
              value: "38%",
              label: t(
                "projects.caixaAutoatendimento.impactLabels.selfCheckoutPayments",
              ),
              icon: "💳",
            },
          ],
          architecture: {
            title: t("projects.caixaAutoatendimento.architecture.title"),
            frontend: t("projects.caixaAutoatendimento.architecture.frontend"),
            backend: t("projects.caixaAutoatendimento.architecture.backend"),
            hardware: t("projects.caixaAutoatendimento.architecture.hardware"),
            integration: t(
              "projects.caixaAutoatendimento.architecture.integration",
            ),
          },
          features: t("projects.caixaAutoatendimento.features"),
          pressCoverage: [
            {
              title: "Renner acelera implantação de caixas de autoatendimento",
              url: "https://mercadoeconsumo.com.br/15/03/2023/noticias-varejo/renner-acelera-implantacao-de-caixas-de-autoatendimento/",
              source: "Mercado e Consumo",
            },
            {
              title:
                "Renner acelera implantação de caixas de autoatendimento com tecnologia RFID",
              url: "https://www.lojasrennersa.com.br/imprensa-destaques/renner-acelera-implantacao-de-caixas-de-autoatendimento-com-tecnologia-rfid/",
              source: "Lojas Renner",
            },
          ],
          media: [
            {
              src: "/images/renner-totem.jpeg",
              alt: t(
                "projects.caixaAutoatendimento.mediaAlt.selfCheckoutKiosk",
              ),
              type: "image",
            },
            {
              src: "/images/Self-Service Kiosk with RFID Technology.jpeg",
              alt: t("projects.caixaAutoatendimento.mediaAlt.rfidTechnology"),
              type: "image",
            },
            {
              src: "/images/aixa_autoatendimento_renner_credito_divulgacao-2048x1363.jpg",
              alt: t("projects.caixaAutoatendimento.mediaAlt.paymentProcess"),
              type: "image",
            },
          ],
        };
      default:
        return {
          heroImage: project.image,
          challenge: project.description,
          scale: "",
          description: project.description,
          contributions: [],
          impact: [],
          architecture: {
            title: "",
            backend: [],
            aws: [],
            platform: [],
            frontend: [],
          },
          features: [],
          media: [],
        };
    }
  };

  const projectData = getProjectData();

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Mobile Header */}
        <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
          <div className="flex items-center justify-between p-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onBackToProjects}
              className="flex items-center text-blue-400 hover:text-blue-300"
            >
              <span className="mr-2">←</span>
              {t("projects.navigation.backToProjects")}
            </motion.button>
            <span className="text-sm text-gray-400">S04</span>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="px-4 pb-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
              <img
                src={projectData.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-300 text-sm mb-4">{project.subtitle}</p>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl"
              onClick={() =>
                projectData.demoUrl &&
                window.open(projectData.demoUrl, "_blank")
              }
            >
              {projectData.demoUrl
                ? t("projects.navigation.viewLiveDemo")
                : t("projects.navigation.viewGitHub")}
            </motion.button>
          </motion.div>

          {/* Challenge & Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8"
          >
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🎯</span>
                <h2 className="text-xl font-bold">
                  {t("projects.navigation.challenge")}
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {projectData.challenge}
              </p>
              {projectData.scale && (
                <p className="text-blue-400 text-sm mt-2 font-medium">
                  {projectData.scale}
                </p>
              )}
            </div>
          </motion.div>

          {/* Technical Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔧</span>
                <h2 className="text-xl font-bold">
                  {t("projects.navigation.contributions")}
                </h2>
              </div>
              <div className="space-y-3">
                {projectData.contributions.map((contribution) => (
                  <div
                    key={contribution.title}
                    className="flex items-start"
                  >
                    <span className="text-lg mr-3 mt-1">
                      {contribution.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-sm">
                        {contribution.title}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {contribution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📊</span>
                <h2 className="text-xl font-bold">
                  {t("projects.navigation.impact")}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {projectData.impact.map((item) => (
                  <div
                    key={item.label}
                    className="text-center"
                  >
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-xl font-bold text-blue-400">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Architecture & Tech Stack */}
          {projectData.architecture && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏗️</span>
                  <h2 className="text-xl font-bold">
                    {t("projects.navigation.architecture")}
                  </h2>
                </div>
                <div className="space-y-4">
                  {projectData.architecture.backend &&
                    projectData.architecture.backend.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-sm text-blue-400 mb-2">
                          Backend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(projectData.architecture.backend) &&
                            projectData.architecture.backend.map(
                              (tech: string) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ),
                            )}
                        </div>
                      </div>
                    )}
                  {projectData.architecture.aws &&
                    projectData.architecture.aws.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-sm text-orange-400 mb-2">
                          AWS
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(projectData.architecture.aws) &&
                            projectData.architecture.aws.map((tech: string) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-orange-600/20 text-orange-300 text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>
                      </div>
                    )}
                  {projectData.architecture.frontend &&
                    projectData.architecture.frontend.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-sm text-green-400 mb-2">
                          Frontend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(projectData.architecture.frontend) &&
                            projectData.architecture.frontend.map(
                              (tech: string) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ),
                            )}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Cost Optimization (GB Rastreio only) */}
          {projectData.costOptimization && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💰</span>
                  <h2 className="text-xl font-bold">
                    {t("projects.navigation.costOptimization")}
                  </h2>
                </div>
                <div className="space-y-3">
                  {projectData.costOptimization.details.map((detail) => (
                    <p
                      key={detail.substring(0, 50)}
                      className="text-gray-300 text-sm leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Features */}
          {projectData.features && projectData.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">✨</span>
                  <h2 className="text-xl font-bold">
                    {t("projects.navigation.keyFeatures")}
                  </h2>
                </div>
                <div className="space-y-2">
                  {Array.isArray(projectData.features) &&
                    projectData.features.map((feature: string) => (
                      <div
                        key={feature.substring(0, 30)}
                        className="flex items-start"
                      >
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Press Coverage (Caixa Autoatendimento only) */}
          {projectData.pressCoverage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6"
            >
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📰</span>
                  <h2 className="text-xl font-bold">
                    {t("projects.navigation.pressCoverage")}
                  </h2>
                </div>
                <div className="space-y-3">
                  {projectData.pressCoverage.map((article) => (
                    <a
                      key={article.title}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <h3 className="font-semibold text-sm text-blue-400 mb-1">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-400">{article.source}</p>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Media Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6"
          >
            <h2 className="text-xl font-bold mb-4">
              {t("projects.navigation.gallery")}
            </h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {projectData.media.map((item) => (
                <div
                  key={item.alt}
                  className="flex-shrink-0 w-48 cursor-pointer"
                  onClick={() => setSelectedMedia(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedMedia(item);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open ${item.alt} in full screen`}
                >
                  <div className="relative h-32 rounded-xl overflow-hidden bg-gray-700 group">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        onClick={(e) => e.stopPropagation()}
                        onError={(e) => {
                          console.error("Video failed to load:", item.src);
                          e.currentTarget.style.display = "none";
                        }}
                        onLoadStart={() =>
                          console.log("Video loading started:", item.src)
                        }
                        onCanPlay={() =>
                          console.log("Video can play:", item.src)
                        }
                      >
                        <track kind="captions" />
                      </video>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          console.error("Image failed to load:", item.src);
                          e.currentTarget.style.display = "none";
                        }}
                        onLoad={() => console.log("Image loaded:", item.src)}
                      />
                    )}
                    {/* Debug info */}
                    <div className="absolute top-1 left-1 bg-black/70 text-white text-xs p-1 rounded">
                      {item.type}
                    </div>
                    {/* Overlay for click indication */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{item.alt}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.src}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4">
          <div className="flex space-x-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onBackToProjects}
              className="flex-1 py-3 bg-gray-800 text-white font-semibold rounded-xl"
            >
              ← {t("projects.navigation.backToProjects")}
            </motion.button>
            {hasNext && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onNextProject}
                className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-xl"
              >
                {t("projects.navigation.nextProject")} →
              </motion.button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Desktop Header */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackToProjects}
              className="flex items-center text-blue-400 hover:text-blue-300"
            >
              <span className="mr-2">←</span>
              {t("projects.navigation.backToProjects")}
            </motion.button>
            <div className="flex space-x-4">
              {hasPrevious && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onPreviousProject}
                  className="text-gray-400 hover:text-white"
                >
                  ← {t("projects.navigation.previousProject")}
                </motion.button>
              )}
              {hasNext && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onNextProject}
                  className="text-gray-400 hover:text-white"
                >
                  {t("projects.navigation.nextProject")} →
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📡</span>
                </div>
              </div>

              <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                onClick={() =>
                  projectData.demoUrl &&
                  window.open(projectData.demoUrl, "_blank")
                }
              >
                {projectData.demoUrl
                  ? `${t("projects.navigation.viewLiveDemo")} →`
                  : `${t("projects.navigation.viewGitHub")} →`}
              </motion.button>
            </div>

            <div className="relative">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src={projectData.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Challenge & Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold">
                {t("projects.navigation.challenge")}
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {projectData.challenge}
            </p>
            {projectData.scale && (
              <p className="text-blue-400 text-lg font-medium">
                {projectData.scale}
              </p>
            )}
          </div>
        </motion.div>

        {/* Technical Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h2 className="text-3xl font-bold">
                {t("projects.navigation.contributions")}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {projectData.contributions.map((contribution) => (
                <div
                  key={contribution.title}
                  className="flex items-start"
                >
                  <span className="text-2xl mr-4 mt-1">
                    {contribution.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      {contribution.title}
                    </h3>
                    <p className="text-gray-400">{contribution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <h2 className="text-3xl font-bold">
                {t("projects.navigation.impact")}
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {projectData.impact.map((item) => (
                <div
                  key={item.label}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {item.value}
                  </div>
                  <div className="text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Architecture & Tech Stack */}
        {projectData.architecture && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h2 className="text-3xl font-bold">
                  {t("projects.navigation.architecture")}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {projectData.architecture.backend &&
                  projectData.architecture.backend.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg text-blue-400 mb-4">
                        Backend
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {Array.isArray(projectData.architecture.backend) &&
                          projectData.architecture.backend.map(
                            (tech: string) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full border border-blue-600/30"
                              >
                                {tech}
                              </span>
                            ),
                          )}
                      </div>
                    </div>
                  )}
                {projectData.architecture.aws &&
                  projectData.architecture.aws.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg text-orange-400 mb-4">
                        AWS
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {Array.isArray(projectData.architecture.aws) &&
                          projectData.architecture.aws.map((tech: string) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-orange-600/20 text-orange-300 rounded-full border border-orange-600/30"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>
                  )}
                {projectData.architecture.frontend &&
                  projectData.architecture.frontend.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg text-green-400 mb-4">
                        Frontend
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {Array.isArray(projectData.architecture.frontend) &&
                          projectData.architecture.frontend.map(
                            (tech: string) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full border border-green-600/30"
                              >
                                {tech}
                              </span>
                            ),
                          )}
                      </div>
                    </div>
                  )}
                {projectData.architecture.platform &&
                  projectData.architecture.platform.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg text-purple-400 mb-4">
                        Platform
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {projectData.architecture.platform.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Cost Optimization (GB Rastreio only) */}
        {projectData.costOptimization && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h2 className="text-3xl font-bold">
                  {t("projects.navigation.costOptimization")}
                </h2>
              </div>
              <div className="space-y-4">
                {projectData.costOptimization.details.map((detail) => (
                  <p
                    key={detail.substring(0, 50)}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Features */}
        {projectData.features && projectData.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-3xl font-bold">
                  {t("projects.navigation.keyFeatures")}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Array.isArray(projectData.features) &&
                  projectData.features.map((feature: string) => (
                    <div
                      key={feature.substring(0, 30)}
                      className="flex items-start"
                    >
                      <span className="text-blue-400 mr-3 mt-1 text-xl">•</span>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Press Coverage (Caixa Autoatendimento only) */}
        {projectData.pressCoverage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📰</span>
                </div>
                <h2 className="text-3xl font-bold">
                  {t("projects.navigation.pressCoverage")}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {projectData.pressCoverage.map((article) => (
                  <a
                    key={article.title}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors"
                  >
                    <h3 className="font-bold text-lg text-blue-400 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400">{article.source}</p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Media Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            {t("projects.navigation.gallery")}
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {projectData.media.map((item) => (
              <div
                key={item.alt}
                className="group cursor-pointer"
                onClick={() => setSelectedMedia(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedMedia(item);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open ${item.alt} in full screen`}
              >
                <div className="relative h-48 rounded-xl overflow-hidden bg-gray-700">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      controls
                      preload="metadata"
                      onClick={(e) => e.stopPropagation()}
                      onError={(e) => {
                        console.error("Video failed to load:", item.src);
                        e.currentTarget.style.display = "none";
                      }}
                      onLoadStart={() =>
                        console.log("Video loading started:", item.src)
                      }
                      onCanPlay={() => console.log("Video can play:", item.src)}
                    >
                      <track kind="captions" />
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.error("Image failed to load:", item.src);
                        e.currentTarget.style.display = "none";
                      }}
                      onLoad={() => console.log("Image loaded:", item.src)}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  {/* Debug info */}
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs p-1 rounded">
                    {item.type}
                  </div>
                  {/* Overlay for click indication */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mt-3 text-center">{item.alt}</p>
                <p className="text-gray-500 mt-1 text-center text-xs">
                  {item.src}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Media content */}
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  className="w-full h-auto max-h-[80vh]"
                  controls
                  autoPlay
                  onError={(e) => {
                    console.error(
                      "Modal video failed to load:",
                      selectedMedia.src,
                    );
                  }}
                >
                  <track kind="captions" />
                </video>
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  onError={(e) => {
                    console.error(
                      "Modal image failed to load:",
                      selectedMedia.src,
                    );
                  }}
                />
              )}

              {/* Media info */}
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {selectedMedia.alt}
                </h3>
                <p className="text-gray-400 text-sm">{selectedMedia.src}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailView;
