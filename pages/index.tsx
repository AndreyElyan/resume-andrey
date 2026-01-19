import { useState } from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSectionNew from "../components/sections/ProjectsSectionNew";
import SkillsSection from "../components/sections/SkillsSection";
import CertificationsSection from "../components/sections/CertificationsSection";
import ContactSection from "../components/sections/ContactSection";
import Terminal, { TerminalButton } from "../components/Terminal";

const Home = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 overflow-x-hidden">
      <Navbar />

      <main className="overflow-x-hidden">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSectionNew />
        <SkillsSection />
        {/* <ExperienceSection /> */}
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Interactive Terminal */}
      <TerminalButton onClick={() => setIsTerminalOpen(true)} />
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
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
