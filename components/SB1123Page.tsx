
import React, { useEffect } from 'react';

interface SB1123PageProps {
  onBack: () => void;
}

const SB1123Page: React.FC<SB1123PageProps> = ({ onBack }) => {
  useEffect(() => {
    document.title = "SB 1123 Guide | Building on Vacant Lots in Los Angeles | Lumina ADU";
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
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              The Vacant Land Initiative
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              SB 1123: The <br />
              <span className="text-gradient">Infill Revolution.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
              Senate Bill 1123 removes the barriers to building high-quality, small-scale housing on vacant residential lots. This is the first time California has provided a truly ministerial path for small "Starter Homes" on previously unbuildable parcels.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive Information */}
      <section className="py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Why SB 1123 Changes Everything</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Historically, Los Angeles was filled with "orphaned" lots—parcels too small for a massive estate but strictly zoned for one. SB 1123 forces local jurisdictions to allow for small homes (up to 1,200 sq ft) on these vacant lots with streamlined approvals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold mb-2">Ministerial Approval</h4>
                  <p className="text-sm text-gray-500">No public hearings. No CEQA. No neighbor vetoes if you meet state standards.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold mb-2">Max Floor Area</h4>
                  <p className="text-sm text-gray-500">Allows for homes up to 1,200 sq. ft., perfect for a high-end 2-bed/2-bath layout.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80" className="rounded-[3rem] shadow-2xl" alt="Modern small home" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">Impact</p>
                <p className="text-2xl font-bold text-blue-600">+45,000</p>
                <p className="text-sm font-medium">Eligible LA Lots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 1: Technical Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">Technical Standards & Height Limits</h2>
            <p className="text-gray-600 text-lg mb-12">
              Building on a small lot requires precision. SB 1123 mandates that cities apply "Objective Design Standards," which means the rules must be clear and non-discretionary.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Setback Relief", desc: "Cities are restricted from imposing excessive side and rear yard setbacks that make small lots unbuildable." },
              { title: "Height Limits", desc: "Allows for multi-story vertical builds to maximize square footage on narrow or shallow parcels." },
              { title: "FAR Exemptions", desc: "Floor Area Ratio requirements cannot be used to prevent a home of at least 800-1,200 sq. ft." },
              { title: "Parking Waivers", desc: "In many transit-rich areas of LA, parking requirements are significantly reduced or eliminated." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-3xl">
                <h4 className="font-bold text-lg mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section 2: Infrastructure & Utilities */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Powering Your Parcel: <br /><span className="text-blue-400">Utilities & Infrastructure</span></h2>
              <div className="space-y-6 text-gray-400">
                <p>Vacant lots often lack active connections. Lumina ADU handles the complex logistics of LADWP power drops, sewer lateral inspections, and gas line extensions.</p>
                <div className="flex gap-4">
                  <div className="w-1 bg-blue-500 rounded-full"></div>
                  <p className="italic">"We don't just build the home; we ensure it's fully integrated into the city's grid with modern, high-efficiency systems."</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
                <h4 className="font-bold text-white mb-2">Solar Ready</h4>
                <p className="text-xs text-gray-400">Integrated micro-grids for energy independence.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
                <h4 className="font-bold text-white mb-2">Smart Sewer</h4>
                <p className="text-xs text-gray-400">Non-invasive lateral mapping for old LA parcels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Case Study: The Echo Park Infill</h2>
            <p className="text-gray-500 text-lg">Converting a "non-conforming" vacant lot into a $950k asset.</p>
          </div>
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2 space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">The Challenge</h3>
                <p className="text-gray-600">A homeowner in Echo Park owned a 2,800 sq ft vacant parcel adjacent to their primary residence. Local zoning required a 5,000 sq ft minimum for new home construction, leaving the land useless for 30 years.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">The Lumina Solution</h3>
                <p className="text-gray-600">Using SB 1123, we designed a modern 1,150 sq ft two-story "jewel box" home. We bypassed the lot size restriction and secured permits in 4 months via the ministerial pathway.</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Project Cost</p>
                  <p className="text-2xl font-bold">$425,000</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Market Appraisal</p>
                  <p className="text-2xl font-bold text-green-600">$985,000</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-900 rounded-3xl p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-6">Investment ROI Breakdown</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Land Acquisition Cost</span>
                      <span className="font-medium">$0 (Inherited)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Architecture & Soft Costs</span>
                      <span className="font-medium">$45,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Construction & Landscaping</span>
                      <span className="font-medium">$380,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <span className="font-bold">Total Equity Created</span>
                      <span className="text-2xl font-bold text-green-400">$560,000</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <p className="text-sm text-gray-400 italic">"SB 1123 allowed us to monetize land that was previously just a property tax liability."</p>
                  <p className="text-sm font-bold mt-2">— Sarah G., Property Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 3: Financing & Taxes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-blue-600 p-12 rounded-[3rem] text-white">
                <h3 className="text-3xl font-bold mb-6">Financing the Build</h3>
                <p className="mb-8 text-blue-100">Most traditional mortgages won't cover construction on a vacant lot. Lumina partners with specialized lenders to offer:</p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-blue-300">★</span>
                    <span>Construction-to-Permanent Loans (Single Closing)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-300">★</span>
                    <span>Hard Money for Infill Developers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-300">★</span>
                    <span>Home Equity conversion on adjacent properties</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Tax Benefits & Long-Term Gains</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Under SB 1123, your property tax basis will likely be reassessed based on the new construction value. However, the income potential and equity growth far outweigh the incremental tax cost.
              </p>
              <div className="p-8 border border-gray-100 rounded-3xl">
                <h4 className="font-bold mb-2">Pro Tip</h4>
                <p className="text-sm text-gray-500">Consider placing the new build under a separate LLC to manage liability and tax reporting if you plan to use it as a rental asset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Use Case Bento */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Who is SB 1123 for?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-blue-50 rounded-[2.5rem] flex flex-col justify-between h-80">
              <h4 className="text-xl font-bold text-blue-900">The "Inherited Land" Owner</h4>
              <p className="text-blue-800/70 text-sm">Finally build a home on that small family parcel that was deemed "unbuildable" by the city in the 90s.</p>
              <div className="text-blue-600 font-bold">130% Potential ROI</div>
            </div>
            <div className="p-10 bg-purple-50 rounded-[2.5rem] flex flex-col justify-between h-80">
              <h4 className="text-xl font-bold text-purple-900">The Infill Developer</h4>
              <p className="text-purple-800/70 text-sm">Target under-utilized urban lots for premium "Starter Homes" with high resale demand from first-time buyers.</p>
              <div className="text-purple-600 font-bold">18-Month Exit Strategy</div>
            </div>
            <div className="p-10 bg-green-50 rounded-[2.5rem] flex flex-col justify-between h-80">
              <h4 className="text-xl font-bold text-green-900">The Portfolio Diversifier</h4>
              <p className="text-green-800/70 text-sm">Convert a vacant lot into a cash-flowing rental asset that out-performs traditional multi-family cap rates.</p>
              <div className="text-green-600 font-bold">6.5% Cap Rate Target</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Unlock Your Lot's Value.</h2>
          <p className="text-xl text-gray-500 mb-10">Our SB 1123 specialists offer a free parcel analysis to determine buildability and projected ROI.</p>
          <a href="#contact" className="px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all">Start My Free Audit</a>
        </div>
      </section>
    </div>
  );
};

export default SB1123Page;
