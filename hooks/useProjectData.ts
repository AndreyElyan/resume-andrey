import { useTranslation } from "next-i18next";

export interface ProjectData {
  heroImage: string;
  challenge: string;
  scale: string;
  description: string;
  contributions: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  impact: Array<{
    value: string;
    label: string;
    icon: string;
  }>;
  costOptimization?: {
    title: string;
    details: string[];
  };
  architecture: {
    title: string;
    backend?: string[];
    aws?: string[];
    platform?: string[];
    frontend?: string[];
    mobile?: string[];
    auth?: string[];
    payment?: string[];
    hardware?: string[];
    integration?: string[];
  };
  features: string[];
  pressCoverage?: Array<{
    title: string;
    url: string;
    source: string;
  }>;
  media: Array<{
    src: string;
    alt: string;
    type: string;
  }>;
  demoUrl?: string;
}

export const useProjectData = (projectId: string): ProjectData => {
  const { t } = useTranslation("common");

  switch (projectId) {
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
            label: t("projects.gbRastreio.results.impactLabels.rfidTagsMonth"),
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
          aws: Array.isArray(t("projects.gbRastreio.technologies.cloud.items"))
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
          platform: ["GitHub Actions", "Argo CD", "New Relic", "OpenTelemetry"],
          frontend: ["React", "Next.js", "RBAC", "Telemetry hooks"],
        },
        features: [],
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
            label: t("projects.vendaUnificada.impactLabels.shoppingExperience"),
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
          title: t("projects.vendaUnificada.technologies.title"),
          mobile: ["React Native", "GraphQL", "Keycloak", "Mobile UI/UX"],
          backend: ["Node.js", "Arquitetura BFF", "GraphQL", "REST APIs"],
          hardware: [
            "Bluebird RFR900",
            "Tags RFID",
            "Dispositivos Pinpad",
            "Sled Mobile",
          ],
        },
        features: Array.isArray(t("projects.vendaUnificada.features"))
          ? (t("projects.vendaUnificada.features") as unknown as string[])
          : [],
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
          title: t("projects.caixaAutoatendimento.technologies.title"),
          frontend: [
            "Interface Touchscreen",
            "React",
            "UI de Pagamento",
            "Experiência do Cliente",
          ],
          backend: [
            "Node.js",
            "APIs de Pagamento",
            "Middleware RFID",
            "Gestão de Estoque",
          ],
          hardware: [
            "Leitores RFID",
            "Terminais de Pagamento",
            "Quiosques de Autoatendimento",
            "Sistemas de Alarme",
          ],
        },
        features: Array.isArray(t("projects.caixaAutoatendimento.features"))
          ? (t("projects.caixaAutoatendimento.features") as unknown as string[])
          : [],
        pressCoverage: [
          {
            title: t(
              "projects.caixaAutoatendimento.press.articles.mercadoeconsumo.title",
            ),
            url: "https://mercadoeconsumo.com.br/15/03/2023/noticias-varejo/renner-acelera-implantacao-de-caixas-de-autoatendimento/",
            source: t(
              "projects.caixaAutoatendimento.press.articles.mercadoeconsumo.source",
            ),
          },
          {
            title: t(
              "projects.caixaAutoatendimento.press.articles.renner.title",
            ),
            url: "https://www.lojasrennersa.com.br/imprensa-destaques/renner-acelera-implantacao-de-caixas-de-autoatendimento-com-tecnologia-rfid/",
            source: t(
              "projects.caixaAutoatendimento.press.articles.renner.source",
            ),
          },
        ],
        media: [
          {
            src: "/images/renner-totem.jpeg",
            alt: t("projects.caixaAutoatendimento.mediaAlt.selfCheckoutKiosk"),
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
        heroImage: "",
        challenge: "",
        scale: "",
        description: "",
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
