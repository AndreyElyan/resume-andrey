import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <ProjectNavigation
          onBackToProjects={onBackToProjects}
          onNextProject={onNextProject}
          onPreviousProject={onPreviousProject}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          isMobile={isMobile}
        />

        <div className="px-4 pb-20">
          <ProjectHeader
            project={project}
            heroImage={projectData.heroImage}
            demoUrl={projectData.demoUrl}
            isMobile={isMobile}
          />

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
    <div className="min-h-screen bg-gray-900 text-white">
      <ProjectNavigation
        onBackToProjects={onBackToProjects}
        onNextProject={onNextProject}
        onPreviousProject={onPreviousProject}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        isMobile={isMobile}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <ProjectHeader
          project={project}
          heroImage={projectData.heroImage}
          demoUrl={projectData.demoUrl}
          isMobile={isMobile}
        />

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
