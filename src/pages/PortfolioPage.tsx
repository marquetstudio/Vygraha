import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/siteData';
import { ProjectCategory } from '../types';
import { PageId } from '../components/Navbar';
import { ArrowRight, MapPin } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-builds', label: 'Full Builds' },
    { id: 'residential-interiors', label: 'Residential Interiors' },
    { id: 'commercial', label: 'Commercial Spaces' },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <div className="space-y-16 pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Beautified Hero Section: Portfolio with Appropriate Copy */}
        <section className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4952B] bg-[#E5A93C]/10 px-3 py-1 rounded-md">
                Selected Works
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.18]">
                Portfolio
              </h1>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl">
                A curation of bespoke turnkey residences, refined interior transformations, and commercial spaces delivered across Bengaluru. Crafted with single-point accountability from groundwork to fine detail.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-neutral-600 border-t border-neutral-200 pt-4">
                <div>
                  <span className="font-bold text-neutral-900 text-sm block">Turnkey Builds</span>
                  <span className="text-neutral-500">Foundation to Finish</span>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div>
                  <span className="font-bold text-neutral-900 text-sm block">Interior Curation</span>
                  <span className="text-neutral-500">Bespoke Living &amp; Dining</span>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div>
                  <span className="font-bold text-neutral-900 text-sm block">Commercial Fit-Outs</span>
                  <span className="text-neutral-500">Agile Workspaces &amp; PMC</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Villa in Bengaluru"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Category Filters: [ All Projects ] | [ Full Builds ] | [ Residential Interiors ] | [ Commercial Spaces ] */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            Filter by Category
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap border ${
                    isActive
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  [ {tab.label} ]
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Case Study Structure Grid (Clean Photography Showcase without Comparison Toggle) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm flex flex-col justify-between hover:border-neutral-300 transition-colors"
            >
              {/* High-Resolution Project Photography */}
              <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                <img
                  src={project.completedImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                />

                {/* Location Badge */}
                <div className="absolute top-3.5 right-3.5 bg-neutral-900/85 backdrop-blur-xs text-white text-xs font-medium px-2.5 py-1 rounded-md flex items-center gap-1 shadow-xs">
                  <MapPin className="w-3 h-3 text-[#E5A93C]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Project Case Study Structure from PDF */}
              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-neutral-900">
                    {project.title}
                  </h3>
                  {/* Scope of Work */}
                  <div className="text-xs font-semibold text-[#D4952B] mt-1">
                    Scope of Work: {project.scopeOfWork}
                  </div>
                </div>

                {/* Project Metrics: Plot Area | Completion Timeframe | Style Theme */}
                <div className="grid grid-cols-3 gap-3 p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs">
                  <div>
                    <div className="text-neutral-500 text-[11px] font-medium">Plot Area</div>
                    <div className="font-semibold text-neutral-900 mt-0.5">{project.metrics.plotArea}</div>
                  </div>
                  <div>
                    <div className="text-neutral-500 text-[11px] font-medium">Completion Timeframe</div>
                    <div className="font-semibold text-neutral-900 mt-0.5">{project.metrics.completionTimeframe}</div>
                  </div>
                  <div>
                    <div className="text-neutral-500 text-[11px] font-medium">Style Theme</div>
                    <div className="font-semibold text-neutral-900 mt-0.5 truncate" title={project.metrics.styleTheme}>
                      {project.metrics.styleTheme}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {project.summary}
                </p>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-semibold text-neutral-900 hover:text-[#D4952B] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inquire About Similar Build</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-xs text-neutral-500">
                    Handover Photography
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <section className="bg-neutral-900 text-white p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Have a Project in Mind?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              Connect with our principal team for turnkey house construction or bespoke interior design in Bengaluru.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-sm font-semibold text-neutral-900 bg-[#E5A93C] hover:bg-[#F0B84D] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};
