import React, { useState } from 'react';
import { Eye, X, Check, MessageSquare } from 'lucide-react';
import { PORTFOLIO_PROJECTS, getWhatsAppUrl } from '../data/agencyData';
import { PortfolioProject } from '../types';
import { soundManager } from '../utils/audio';

type CategoryFilter = 'All' | 'Video Editing' | 'Graphic Designing' | 'Web Development' | 'Social Media Creatives';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Video Editing',
    'Graphic Designing',
    'Web Development',
    'Social Media Creatives',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const handleOpenProject = (project: PortfolioProject) => {
    soundManager.playClickSound();
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    soundManager.playClickSound();
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#080A0F] border-t border-[#222A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-mono text-kicker tracking-[0.2em] text-[#55C8F5] uppercase mb-3">
              <span>SELECTED ARCHIVES</span>
              <span className="text-[#303744]">/</span>
              <span className="text-[#A7B0C0]">CASE STUDIES</span>
            </div>
            <h2 className="text-fluid-section font-extrabold text-[#F8FAFC]">
              Selected Work.{' '}
              <br />
              <span className="text-white">Engineered for </span>
              <span className="text-shine">
                Commercial Impact.
              </span>
            </h2>
          </div>

          {/* Clean Segmented Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#10141C] border border-[#222A36]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  soundManager.playClickSound();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#1D2430] text-[#55C8F5] border border-[#303744] shadow-sm'
                    : 'text-[#A7B0C0] hover:text-[#F8FAFC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-[#171B24] border border-[#222A36] hover:border-[#303744] hover:bg-[#1D2430] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#10141C]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B24] via-transparent to-transparent opacity-80" />

                {/* Key Metric Label */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#080A0F]/85 backdrop-blur-md border border-[#303744] text-[11px] font-mono font-semibold text-[#55C8F5] tabular-nums">
                  {project.metrics}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  {/* Category & Client Type Unboxed */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A7B0C0] mb-2">
                    <span className="text-[#55C8F5] font-semibold">{project.category}</span>
                    <span className="text-[#303744]" aria-hidden="true">·</span>
                    <span>{project.clientType}</span>
                  </div>

                  <h3 className="text-fluid-card font-bold text-[#F8FAFC] mb-2 group-hover:text-[#55C8F5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7B0C0] line-clamp-2 leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>

                  {/* Clean Tags with Separators */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#788597] mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>
                        {tag}{idx < project.tags.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  type="button"
                  onClick={() => handleOpenProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#F8FAFC] bg-[#10141C] hover:bg-[#55C8F5] hover:text-[#080A0F] border border-[#303744] hover:border-[#55C8F5] transition-all cursor-pointer font-sans"
                >
                  <Eye className="w-3.5 h-3.5 text-[#55C8F5] group-hover:text-[#080A0F]" />
                  <span>View Project Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-2xl bg-[#171B24] border border-[#303744] p-6 sm:p-8 shadow-2xl shadow-black/80 overflow-y-auto max-h-[90vh] text-left">
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseProject}
                aria-label="Close project modal"
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#10141C] border border-[#303744] text-[#A7B0C0] hover:text-[#F8FAFC] hover:border-[#55C8F5] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Category & Metadata */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#A7B0C0] mb-3">
                <span className="text-[#55C8F5] font-semibold">{selectedProject.category}</span>
                <span className="text-[#303744]" aria-hidden="true">·</span>
                <span>{selectedProject.clientType}</span>
              </div>

              {/* Title & Metric */}
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#F8FAFC] tracking-tight mb-2">
                {selectedProject.title}
              </h3>
              <div className="inline-block px-3 py-1 rounded-lg bg-[#10141C] border border-[#303744] text-xs font-mono text-[#55C8F5] font-semibold mb-6 tabular-nums">
                Measured Result: {selectedProject.metrics}
              </div>

              {/* Project Preview Image */}
              <div className="rounded-xl overflow-hidden border border-[#303744] aspect-[16/9] mb-6 relative bg-[#10141C]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detailed Description */}
              <p className="text-sm text-[#A7B0C0] leading-relaxed mb-6 font-normal">
                {selectedProject.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-kicker text-[#55C8F5] mb-3">
                  Delivered Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#F8FAFC]">
                      <Check className="w-3.5 h-3.5 text-[#55C8F5] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Call to Action for Similar Project */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-[#222A36]">
                <a
                  href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I checked out the "${selectedProject.title}" project on your website and would like a similar solution for my brand.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClickSound()}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#080A0F] bg-[#55C8F5] hover:bg-[#72D3F7] glow-cyan-button transition-all cursor-pointer font-sans"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Similar Project</span>
                </a>

                <button
                  type="button"
                  onClick={handleCloseProject}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-[#A7B0C0] hover:text-[#F8FAFC] border border-[#303744] bg-[#10141C] transition-colors cursor-pointer font-sans"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
