import React, { useState } from 'react';
import { Eye, X, Check, MessageSquare, Play, ArrowRight, Star } from 'lucide-react';
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
    <section id="portfolio" className="relative py-20 sm:py-28 bg-[#03070D] border-t border-[#1E344A] overflow-hidden">
      {/* Background Cyan Glow */}
      <div className="cyan-ambient-glow w-[36rem] h-[36rem] top-10 left-1/3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#080E18] border border-[#1E344A] text-xs font-mono font-bold tracking-wider text-[#00D9FF] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
              <span>SELECTED WORK / ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC]">
              Selected <span className="text-cyan-glow">Work.</span>
            </h2>
          </div>

          {/* Clean Segmented Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#080E18] border border-[#1E344A]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  soundManager.playClickSound();
                  setActiveCategory(cat);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#101B2A] text-[#00D9FF] border border-[#00D9FF]/60 shadow-[0_0_15px_rgba(0,217,255,0.3)]'
                    : 'text-[#B7C4D5] hover:text-[#F8FAFC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid with Reference Card Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="reference-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#03070D]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E18] via-transparent to-transparent opacity-80" />

                {/* Key Metric Label */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#080E18]/90 backdrop-blur-md border border-[#1E344A] text-[11px] font-mono font-bold text-[#00D9FF] shadow-[0_0_12px_rgba(0,217,255,0.25)]">
                  {project.metrics}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  {/* Category & Client */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#B7C4D5] mb-2">
                    <span className="text-[#00D9FF] font-bold">{project.category}</span>
                    <span className="text-[#1E344A]" aria-hidden="true">·</span>
                    <span>{project.clientType}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight mb-2 group-hover:text-[#00D9FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B7C4D5] line-clamp-2 leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>

                  {/* Clean Tags with Separators */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#8493A8] mb-6">
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
                  className="btn-inquire-pill w-full py-2.5 px-4 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#00D9FF]" />
                  <span>View Project Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl reference-card p-6 sm:p-8 overflow-y-auto max-h-[90vh] text-left">
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseProject}
                aria-label="Close project modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#101B2A] border border-[#1E344A] text-[#B7C4D5] hover:text-[#00D9FF] hover:border-[#00D9FF] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Category & Metadata */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#B7C4D5] mb-3">
                <span className="text-[#00D9FF] font-bold">{selectedProject.category}</span>
                <span className="text-[#1E344A]" aria-hidden="true">·</span>
                <span>{selectedProject.clientType}</span>
              </div>

              {/* Title & Metric */}
              <h3 className="text-2xl sm:text-3xl font-black text-[#F8FAFC] tracking-tight mb-2">
                {selectedProject.title}
              </h3>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101B2A] border border-[#1E344A] text-xs font-mono text-[#00D9FF] font-bold mb-6">
                <Star className="w-3.5 h-3.5 text-[#00D9FF] fill-[#00D9FF]" />
                <span>Result: {selectedProject.metrics}</span>
              </div>

              {/* Project Preview Image */}
              <div className="rounded-2xl overflow-hidden border border-[#1E344A] aspect-[16/9] mb-6 relative bg-[#03070D]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detailed Description */}
              <p className="text-sm text-[#B7C4D5] leading-relaxed mb-6 font-normal">
                {selectedProject.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold text-[#00D9FF] uppercase tracking-wider mb-3">
                  Delivered Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#F8FAFC]">
                      <Check className="w-3.5 h-3.5 text-[#00D9FF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Call to Action for Similar Project */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-[#1E344A]">
                <a
                  href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I checked out the "${selectedProject.title}" project on your website and would like a similar solution for my brand.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClickSound()}
                  className="btn-primary-cyan w-full sm:w-auto flex-1 py-3 px-6 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Similar Project</span>
                </a>

                <button
                  type="button"
                  onClick={handleCloseProject}
                  className="btn-inquire-pill w-full sm:w-auto px-5 py-3 text-xs sm:text-sm cursor-pointer"
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
