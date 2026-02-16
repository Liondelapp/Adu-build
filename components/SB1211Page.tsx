
import React, { useEffect } from 'react';

interface SB1211PageProps {
  onBack: () => void;
}

const SB1211Page: React.FC<SB1211PageProps> = ({ onBack }) => {
  useEffect(() => {
    document.title = "SB 1211 Guide | Multi-family ADU Solutions in LA | Lumina ADU";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen pb-24">
      {/* Header / Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="text-sm font-medium text-blue-600 mb-8 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
          >
            ← Back to Home
          </button>
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              The Portfolio Multiplier
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              SB 1211: Density <br />
              <span className="text-gradient">By Design.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
              Senate Bill 1211 unlocks the true potential of multi-family properties. It now allows for up to 8 detached ADUs on multi-family lots, creating massive scalability for apartment owners and real estate investors.
            </p>
          </div>
        </div>
      </section>

      {/* Investor Features Bento */}
      <section className="py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-gray-50 rounded-[3rem] space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold">No Parking Replacement</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Crucial update: Converting carports or garages into ADUs no longer requires you to replace those parking spaces. Build density without land constraints.
              </p>
            </div>
            <div className="p-10 bg-green-50 rounded-[3rem] space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold">Up to 8 Units</h3>
              <p className="text-sm text-green-800/70 leading-relaxed">
                Detach unit caps have been expanded. Most R-2 and R-3 lots in Los Angeles can now accommodate significantly more detached housing units.
              </p>
            </div>
            <div className="p-10 bg-gray-900 rounded-[3rem] space-y-4 text-white">
              <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-2xl text-green-400">⚡</span>
              </div>
              <h3 className="text-xl font-bold">Faster Cash Flow</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                By utilizing existing non-habitable space (basements, attics, boiler rooms), you can create "Conversion ADUs" with lower construction costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 1: The 25% Rule Explained */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Conversion ADUs: <br />The 25% Rule</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Under SB 1211, multi-family owners can build attached ADUs in non-habitable areas of their building (like laundry rooms or basements) up to a quantity of 25% of the existing primary units.
              </p>
              <div className="p-8 bg-green-50 rounded-[2.5rem] border border-green-100">
                <h4 className="font-bold text-green-900 mb-2">Example Calculation</h4>
                <p className="text-sm text-green-800">For a 20-unit building: 20 units x 0.25 = 5 new attached ADUs permitted within the building's footprint, PLUS your detached unit allowance.</p>
              </div>
            </div>
            <div className="relative aspect-square">
               <img src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover rounded-[3rem]" alt="Modern apartment interior" />
            </div>
          </div>
        </div>
      </section>

      {/* New Section 2: Fire Safety & Technical */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Technical Integrity & Fire Safety</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100">
              <h4 className="font-bold text-lg mb-4">Fire Separation</h4>
              <p className="text-sm text-gray-500 leading-relaxed">When adding ADUs to multi-family structures, we implement advanced fire-rated wall assemblies (Type V-A construction) to ensure full compliance with LAFD standards without compromising architectural aesthetics.</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100">
              <h4 className="font-bold text-lg mb-4">Title 24 Energy Modeling</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Multi-unit complexes require sophisticated energy modeling. Our engineers optimize HVAC zoning and insulation to meet California's stringent Title 24 efficiency mandates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: The Koreatown Expansion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border border-gray-100 shadow-sm">
            <div className="lg:w-1/2 p-12 md:p-20 space-y-8">
              <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Case Study</span>
              <h2 className="text-4xl font-bold">Koreatown 12-Unit Expansion</h2>
              <p className="text-gray-600 text-lg">An investor owned a classic 12-unit brick building with a large underutilized rear carport area.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-1">1</div>
                  <p className="text-sm text-gray-600">Converted 4 carports into 2 Studio ADUs.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-1">2</div>
                  <p className="text-sm text-gray-600">Built 2 new detached 2-story ADUs in the remaining backyard space.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-1">3</div>
                  <p className="text-sm text-gray-600">Bypassed all parking replacement requirements thanks to SB 1211.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Total Cost</p>
                  <p className="text-2xl font-bold">$780,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Monthly Rent Add</p>
                  <p className="text-2xl font-bold text-green-600">+$11,500/mo</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative bg-gray-200">
               <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover" alt="Multi-family building" />
               <div className="absolute top-12 right-12 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-xl">
                 <p className="text-xs font-bold text-gray-400 uppercase">Cash-on-Cash Return</p>
                 <p className="text-3xl font-bold text-green-600">17.6%</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 3: Tenant Retention & Operations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">Tenant-First Construction</h2>
            <p className="text-gray-600 text-lg mb-12">
              Building on an occupied lot requires sensitive project management. Lumina's operational protocols minimize disruption to your existing tenant base.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-3xl">
              <h5 className="font-bold mb-2">Noise Abatement</h5>
              <p className="text-xs text-gray-400">Strict work-hour adherence and acoustic barriers for active sites.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-3xl">
              <h5 className="font-bold mb-2">Dust Mitigation</h5>
              <p className="text-xs text-gray-400">HEPA-shielded build zones to maintain air quality for current residents.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-3xl">
              <h5 className="font-bold mb-2">Phased Delivery</h5>
              <p className="text-xs text-gray-400">Modular off-site construction where possible to reduce on-site build time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 4: Zoning Overlays & TOC */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur">
                <h3 className="text-3xl font-bold mb-6 text-green-400">Advanced Synergies</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We specialize in combining SB 1211 with LA's "Transit Oriented Communities" (TOC) overlays. This allows for stacking density bonuses and maximizing the unit count beyond basic state law.
                </p>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                   <span className="text-3xl">🚆</span>
                   <p className="text-xs text-gray-300">"If your building is within 1/2 mile of a major transit stop, the ROI potential effectively triples."</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Navigating the Overlay Maze</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Los Angeles has some of the most complex zoning overlays in the nation. Our planning team uses proprietary spatial analysis to find the "Hidden Yield" in your building's specific location.
              </p>
              <button className="px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors">Analyze My Site Overlay</button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 italic text-gray-900">"The fastest way to add 20%+ to your building's Cap Rate."</h2>
          <p className="text-gray-500 text-lg mb-12">
            SB 1211 isn't just about housing—it's about financial engineering. By adding units to an existing asset, you increase the Net Operating Income (NOI) without the risk of new land acquisition.
          </p>
          <div className="inline-grid grid-cols-1 sm:grid-cols-3 gap-12 text-left bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
            <div>
              <p className="text-green-600 font-bold text-xs uppercase mb-2">Build Cost/Unit</p>
              <p className="text-2xl font-bold">$180k - $240k</p>
            </div>
            <div>
              <p className="text-green-600 font-bold text-xs uppercase mb-2">Avg LA Rent</p>
              <p className="text-2xl font-bold">$2,800+</p>
            </div>
            <div>
              <p className="text-green-600 font-bold text-xs uppercase mb-2">Payback Period</p>
              <p className="text-2xl font-bold">~5.5 Yrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Scale Your Portfolio.</h2>
          <p className="text-xl text-gray-500 mb-10">Our investment team will model the specific yield increase for your multi-family property.</p>
          <a href="#contact" className="px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all">Request Portfolio Analysis</a>
        </div>
      </section>
    </div>
  );
};

export default SB1211Page;
