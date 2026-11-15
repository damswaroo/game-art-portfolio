import React, { useState, useEffect } from 'react';
import { projectsData } from './data/portfolioData';
import { Project } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SelectedWorksSection } from './components/SelectedWorksSection';
import { ProjectDetailView } from './components/ProjectDetailView';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArtworkViewerModal } from './components/ArtworkViewerModal';
import { ScrollDirectionProvider } from './context/ScrollDirectionContext';

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  // Sync hash routing for shareable project URLs and browser back/forward support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const slug = hash.replace('#project/', '');
        const found = projectsData.find((p) => p.slug === slug || p.id === slug);
        if (found) {
          setActiveProject(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash === '' || hash === '#' || hash === '#hero' || hash === '#about' || hash === '#works' || hash === '#contact') {
        setActiveProject(null);
        if (hash.length > 1) {
          const el = document.getElementById(hash.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      setActiveProject(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (project: Project) => {
    window.location.hash = `project/${project.slug}`;
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWorks = () => {
    window.location.hash = 'works';
    setActiveProject(null);
    setTimeout(() => {
      const el = document.getElementById('works');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleNavigateHome = (sectionId?: string) => {
    if (activeProject) {
      setActiveProject(null);
    }
    if (sectionId) {
      window.location.hash = sectionId;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    if (activeProject) {
      setActiveProject(null);
    }
    window.location.hash = 'contact';
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredProject = projectsData.find((p) => p.isFeatured) || projectsData[0];

  return (
    <ScrollDirectionProvider>
      <div className="min-h-screen bg-[#101114] text-[#F5F4F0] selection:bg-[#C5FA59] selection:text-[#101114]">
        {/* Top Navbar adhering to the strict Top Bar Contract */}
        <Navbar
          activeView={activeProject ? 'project' : 'home'}
          onNavigateHome={handleNavigateHome}
          onOpenContact={handleOpenContact}
        />

        <main>
          {activeProject ? (
            /* Project Detail Independent View */
            <ProjectDetailView
              project={activeProject}
              allProjects={projectsData}
              onBackToWorks={handleBackToWorks}
              onSelectProject={handleSelectProject}
              onQuickView={(proj) => setLightboxProject(proj)}
            />
          ) : (
            /* Main One-Page Portfolio Layout */
            <>
              {/* Section 01: Hero / Intro */}
              <HeroSection
                onExploreClick={() => {
                  const el = document.getElementById('works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onOpenFeaturedProject={() => handleSelectProject(featuredProject)}
              />

              {/* Section 02: About Me */}
              <AboutSection />

              {/* Section 03: Selected Works */}
              <SelectedWorksSection
                projects={projectsData}
                onSelectProject={handleSelectProject}
                onQuickView={(proj) => setLightboxProject(proj)}
              />

              {/* Section 04: Contact */}
              <ContactSection onScrollToTop={handleScrollToTop} />
            </>
          )}
        </main>

        {/* Minimal Footer */}
        <Footer onScrollToTop={handleScrollToTop} />

        {/* Lightbox / Artwork Viewer Modal */}
        <ArtworkViewerModal
          project={lightboxProject}
          onClose={() => setLightboxProject(null)}
        />
      </div>
    </ScrollDirectionProvider>
  );
}
