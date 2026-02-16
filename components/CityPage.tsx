
import React, { useEffect } from 'react';

interface CityPageProps {
  city: string;
  onBack: () => void;
}

const CityPage: React.FC<CityPageProps> = ({ city, onBack }) => {
  // Update document title for SEO when the city changes
  useEffect(() => {
    document.title = `${city} ADU Builders | Lumina ADU - Los Angeles Premier`;
    window.scrollTo(0, 0);
  }, [city]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* City Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="text-sm font-medium text-blue-600 mb-8 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
          >
            ← All Los Angeles Areas
          </button>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              ADU Construction in <br />
              <span className="text-gradient">{city}, CA.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
              Unlock the full potential of your {city} property. We specialize in navigating the specific local building codes and zoning requirements of the {city} planning department.
            </p>
          </div>
        </div>
      </section>

      {/* Local Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold">Property Value</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Homeowners in {city} are seeing a significant return on investment by adding detached rental units, often increasing total property valuation by 20-30%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold">Zoning Compliance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our team handles all permitting with the {city} Building and Safety department, ensuring your ADU meets all setback and height requirements specific to your neighborhood.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold">Fast-Track Build</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Utilizing pre-approved floor plans tailored for {city} lots, we can reduce the design and approval phase by up to 40%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project in City (Simulated) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover" 
                alt={`${city} ADU Project`} 
              />
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4">Case Study</span>
              <h3 className="text-3xl font-bold mb-6">Modern Detached ADU in {city}</h3>
              <p className="text-gray-500 mb-8">
                A 750 sq. ft. guest house featuring floor-to-ceiling glass, custom cabinetry, and a private patio space designed to blend seamlessly with the existing {city} landscape.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Square Feet</p>
                  <p className="text-lg font-semibold">750</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Build Time</p>
                  <p className="text-lg font-semibold">5 Months</p>
                </div>
              </div>
              <a href="#contact" className="text-blue-600 font-bold hover:underline">Request a site visit in {city} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Call to Action */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to start your {city} project?</h2>
          <p className="text-xl text-gray-500 mb-10">
            Our specialized {city} planning team is available for a complimentary site assessment this week.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all transform hover:scale-105"
          >
            Book My {city} Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
