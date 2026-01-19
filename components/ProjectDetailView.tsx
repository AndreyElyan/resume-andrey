import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useProjectData } from "../hooks/useProjectData";
import ProjectHeader from "./projects/shared/ProjectHeader";
import ChallengeSection from "./projects/shared/ChallengeSection";
import ContributionsSection from "./projects/shared/ContributionsSection";
import ImpactSection from "./projects/shared/ImpactSection";
import ArchitectureSection from "./projects/shared/ArchitectureSection";
import FeaturesSection from "./projects/shared/FeaturesSection";
import CostOptimizationSection from "./projects/shared/CostOptimizationSection";
import PressCoverageSection from "./projects/shared/PressCoverageSection";
import MediaGallery from "./projects/shared/MediaGallery";
import ProjectNavigation from "./projects/shared/ProjectNavigation";

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
  const [isMobile, setIsMobile] = useState(false);
  const projectData = useProjectData(project.id);
  const projectContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (projectContentRef.current) {
      projectContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [project.id]);

  // Aurora Background Component
  const AuroraBackground = () => (
    <div className="fixed inset-0 bg-slate-900 -z-10">
      {/* Aurora blobs */}
      <motion.div
        className="absolute top-20 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-[120px]"
        animate={{
          scale: [1, 0.9, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );

  if (isMobile) {
    return (
      <div className="min-h-screen bg-slate-900 text-white relative">
        <AuroraBackground />
        <ProjectNavigation
          onBackToProjects={onBackToProjects}
          onNextProject={onNextProject}
          onPreviousProject={onPreviousProject}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          isMobile={isMobile}
        />

        <div className="relative z-10 px-4 pb-24 pt-4">
          <div ref={projectContentRef}>
            <ProjectHeader
              project={project}
              heroImage={projectData.heroImage}
              demoUrl={projectData.demoUrl}
              isMobile={isMobile}
            />
          </div>

          <ChallengeSection
            challenge={projectData.challenge}
            scale={projectData.scale}
            isMobile={isMobile}
          />

          <ContributionsSection
            contributions={projectData.contributions}
            isMobile={isMobile}
          />

          <ImpactSection
            impact={projectData.impact}
            isMobile={isMobile}
          />

          <ArchitectureSection
            architecture={projectData.architecture}
            isMobile={isMobile}
          />

          {projectData.costOptimization && (
            <CostOptimizationSection
              costOptimization={projectData.costOptimization}
              isMobile={isMobile}
            />
          )}

          <FeaturesSection
            features={projectData.features}
            isMobile={isMobile}
          />

          {projectData.pressCoverage && (
            <PressCoverageSection
              pressCoverage={projectData.pressCoverage}
              isMobile={isMobile}
            />
          )}

          <MediaGallery
            media={projectData.media}
            isMobile={isMobile}
          />
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <AuroraBackground />
      <ProjectNavigation
        onBackToProjects={onBackToProjects}
        onNextProject={onNextProject}
        onPreviousProject={onPreviousProject}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        isMobile={isMobile}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div ref={projectContentRef}>
          <ProjectHeader
            project={project}
            heroImage={projectData.heroImage}
            demoUrl={projectData.demoUrl}
            isMobile={isMobile}
          />
        </div>

        <ChallengeSection
          challenge={projectData.challenge}
          scale={projectData.scale}
          isMobile={isMobile}
        />

        <ContributionsSection
          contributions={projectData.contributions}
          isMobile={isMobile}
        />

        <ImpactSection
          impact={projectData.impact}
          isMobile={isMobile}
        />

        <ArchitectureSection
          architecture={projectData.architecture}
          isMobile={isMobile}
        />

        {projectData.costOptimization && (
          <CostOptimizationSection
            costOptimization={projectData.costOptimization}
            isMobile={isMobile}
          />
        )}

        <FeaturesSection
          features={projectData.features}
          isMobile={isMobile}
        />

        {projectData.pressCoverage && (
          <PressCoverageSection
            pressCoverage={projectData.pressCoverage}
            isMobile={isMobile}
          />
        )}

        <MediaGallery
          media={projectData.media}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default ProjectDetailView;
