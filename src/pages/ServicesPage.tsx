import React from 'react';
import { SERVICES_DATA } from '../data/siteData';
import { PageId } from '../components/Navbar';
import { ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Beautified Hero Section: Services */}
        <section className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4952B] bg-[#E5A93C]/10 px-3 py-1 rounded-md">
                Disciplines &amp; Execution
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.18]">
                Services
              </h1>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl">
                Complete architectural construction, interior design, furnishing, and consulting services. Engineered for single-point accountability and transparent BOQ execution across Bengaluru.
              </p>

              {/* Discipline Quick Jump / Overview Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {SERVICES_DATA.map((service) => (
                  <span
                    key={service.id}
                    className="px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs font-semibold text-neutral-800 shadow-2xs"
                  >
                    {service.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                  alt="Vygraha services overview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 4 Distinct Disciplines: All Sub-Services as Image + Text Cards */}
        <div className="space-y-16">
          
          {/* Discipline 1: Interiors */}
          <section className="space-y-6">
            <div className="border-b border-neutral-200 pb-3 flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Interiors
              </h2>
              <span className="text-xs font-semibold text-[#D4952B] uppercase">Discipline 1</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES_DATA.find((s) => s.id === 'interiors')?.subServices.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-neutral-300 transition-colors"
                >
                  <div className="aspect-[16/10] w-full bg-neutral-100 overflow-hidden">
                    <img
                      src={sub.image}
                      alt={sub.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {sub.name}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed mt-2">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Discipline 2: Furnishing */}
          <section className="space-y-6">
            <div className="border-b border-neutral-200 pb-3 flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Furnishing
              </h2>
              <span className="text-xs font-semibold text-[#D4952B] uppercase">Discipline 2</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES_DATA.find((s) => s.id === 'furnishing')?.subServices.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-neutral-300 transition-colors"
                >
                  <div className="aspect-[16/10] w-full bg-neutral-100 overflow-hidden">
                    <img
                      src={sub.image}
                      alt={sub.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <h3 className="text-lg font-bold text-neutral-900">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Discipline 3: Consulting Services */}
          <section className="space-y-6">
            <div className="border-b border-neutral-200 pb-3 flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Consulting Services
              </h2>
              <span className="text-xs font-semibold text-[#D4952B] uppercase">Discipline 3</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES_DATA.find((s) => s.id === 'consulting')?.subServices.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-neutral-300 transition-colors"
                >
                  <div className="aspect-[16/10] w-full bg-neutral-100 overflow-hidden">
                    <img
                      src={sub.image}
                      alt={sub.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <h3 className="text-lg font-bold text-neutral-900">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Discipline 4: Construction Services */}
          <section className="space-y-6">
            <div className="border-b border-neutral-200 pb-3 flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Construction Services
              </h2>
              <span className="text-xs font-semibold text-[#D4952B] uppercase">Discipline 4</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES_DATA.find((s) => s.id === 'construction')?.subServices.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-neutral-300 transition-colors"
                >
                  <div className="aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
                    <img
                      src={sub.image}
                      alt={sub.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-neutral-900">
                        {sub.name}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed mt-1.5">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Call to Action (CTA) from Document */}
        <section className="bg-neutral-900 text-white p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            {/* Headline: Plan Your Space with Vygraha */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Plan Your Space with Vygraha
            </h2>
            {/* Body: From ground-up turnkey construction to custom interior execution, get a transparent BOQ with zero hidden fees. */}
            <p className="text-sm sm:text-base text-neutral-300">
              From ground-up turnkey construction to custom interior execution, get a transparent BOQ with zero hidden fees.
            </p>
          </div>

          {/* Button: [Schedule Consultation] */}
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
