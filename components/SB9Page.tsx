
import React, { useEffect } from 'react';

interface SB9PageProps {
  onBack: () => void;
}

const SB9Page: React.FC<SB9PageProps> = ({ onBack }) => {
  useEffect(() => {
    document.title = "SB 9 Guide | Urban Lot Splits & Duplexes in Los Angeles | Lumina ADU";
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
            <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              The Homeowners Opportunity Act
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              SB 9: Double Your <br />
              <span className="text-gradient">Wealth & Density.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
              Senate Bill 9 provides the legal power to split a single residential lot into two, or build two primary homes on one lot. It is the most significant zoning change in Los Angeles history.
            </p>
          </div>
        </div>
      </section>

      {/* Two Paths Breakdown */}
      <section className="py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-purple-50 p-12 rounded-[3rem]">
              <h3 className="text-3xl font-bold mb-6 text-purple-900">Path 1: The Lot Split</h3>
              <p className="text-purple-800/70 mb-8 leading-relaxed">
                Take one 10,000 sq ft lot and split it into two 5,000 sq ft lots. Sell the new vacant lot for immediate profit or build an entirely separate home with its own title and address.
              </p>
              <ul className="space-y-4 mb-8">
                {["Separate deeds and addresses", "Highest resale value", "Great for liquidating equity", "Build up to 2 units per lot"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-purple-900 font-medium">
                    <span className="text-purple-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 p-12 rounded-[3rem] text-white">
              <h3 className="text-3xl font-bold mb-6">Path 2: The Two-Unit Build</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Keep your lot as one but build two full-sized primary residences. This "Duplex Style" approach is faster and avoids the legal complexity of a full parcel split while doubling your rental units.
              </p>
              <ul className="space-y-4 mb-8">
                {["Faster permitting timeline", "Maximized rental yield", "Ideal for family compounds", "Lower utility connection costs"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300 font-medium">
                    <span className="text-purple-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 1: Objective Design Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">What Cities Can & Can't Require</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">Under SB 9, local governments are limited in their ability to block your project. They must follow "Objective Standards."</p>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold mb-2">The "No Subjectivity" Rule</h4>
                <p className="text-sm text-gray-500 italic">"The city cannot say your design doesn't 'fit the character' of the neighborhood. If it meets the written rules, they MUST approve it."</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 border border-gray-100 rounded-2xl">
                <h5 className="font-bold text-sm mb-2">Setbacks</h5>
                <p className="text-xs text-gray-400">Restricted to a maximum of 4 feet for side and rear yards.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl">
                <h5 className="font-bold text-sm mb-2">Square Footage</h5>
                <p className="text-xs text-gray-400">The city must allow at least 800 sq. ft. per unit regardless of FAR.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl">
                <h5 className="font-bold text-sm mb-2">Parking</h5>
                <p className="text-xs text-gray-400">Maximum of 1 spot per unit; zero if near high-quality transit.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl">
                <h5 className="font-bold text-sm mb-2">Impact Fees</h5>
                <p className="text-xs text-gray-400">Often significantly lower than traditional single-family builds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 2: SB 9 vs. ADU */}
      <section className="py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-900">SB 9 Units vs. Standard ADUs</h2>
            <p className="text-purple-800/70">Understanding the difference in property rights and valuation.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white rounded-3xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-purple-100 text-purple-900">
                  <th className="p-6 font-bold">Feature</th>
                  <th className="p-6 font-bold">Standard ADU</th>
                  <th className="p-6 font-bold">SB 9 Primary Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-50">
                <tr>
                  <td className="p-6 font-bold text-sm">Ownership</td>
                  <td className="p-6 text-sm">Tied to main house deed</td>
                  <td className="p-6 text-sm font-bold text-purple-600">Can be on its own deed (Split)</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-sm">Size Limit</td>
                  <td className="p-6 text-sm">Usually 1,200 sq. ft. max</td>
                  <td className="p-6 text-sm">Can be full-sized (Zoning permitting)</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-sm">Valuation</td>
                  <td className="p-6 text-sm">Income-based / Ancillary</td>
                  <td className="p-6 text-sm font-bold text-purple-600">Full Comp-based Primary Residence</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-sm">Financing</td>
                  <td className="p-6 text-sm">HELOC / Renovation Loan</td>
                  <td className="p-6 text-sm">Full Traditional Mortgage eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Case & ROI Analysis */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">Case Study: The Sherman Oaks Equity Play</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-gray-50 rounded-[3rem] p-12">
              <h4 className="text-2xl font-bold mb-6">The Project</h4>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                A homeowner with a 12,000 sq ft lot in Sherman Oaks split their property into two 6,000 sq ft lots. They kept their existing home and sold the newly created rear lot to a developer.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Pre-Split Value</p>
                  <p className="text-xl font-bold">$1.8M</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Split Costs</p>
                  <p className="text-xl font-bold text-red-500">$65k</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Land Sale Price</p>
                  <p className="text-xl font-bold text-green-600">$850k</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Remaining Home</p>
                  <p className="text-xl font-bold">$1.4M</p>
                </div>
              </div>
              <div className="mt-12 p-8 bg-white rounded-3xl border border-gray-100">
                <p className="text-3xl font-bold text-gradient">Total Wealth Gain: $450,000</p>
                <p className="text-gray-500 mt-2">Plus a significantly reduced property tax liability for the remaining primary residence.</p>
              </div>
            </div>
            <div className="bg-purple-600 rounded-[3rem] p-12 text-white flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-6">Who is this for?</h4>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold">Multigenerational Families</p>
                    <p className="text-purple-100 text-sm">Build a separate home for aging parents or adult children on the same lot.</p>
                  </div>
                  <div>
                    <p className="font-bold">Retirement Planners</p>
                    <p className="text-purple-100 text-sm">Sell half your lot to fund retirement without ever moving house.</p>
                  </div>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80" className="rounded-2xl mt-8" alt="Sherman Oaks Home" />
            </div>
          </div>
        </div>
      </section>

      {/* New Section 3: The Mapping Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">The Engineering of a Split</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Splitting a lot isn't just about drawing a line. It's a complex legal and engineering workflow that Lumina manages from end-to-end.
              </p>
              <div className="space-y-4">
                {[
                  { step: "Parcel Map Prep", desc: "Our surveyors create the official documents for the County Recorder." },
                  { step: "Easement Drafting", desc: "Ensuring utilities and driveways are legally shared between parcels." },
                  { step: "LADBS Submission", desc: "Navigating the building safety clearances for two independent sites." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <span className="text-purple-600 font-bold">{i + 1}</span>
                    <div>
                      <h5 className="font-bold text-sm">{item.step}</h5>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-[3rem] aspect-square flex items-center justify-center relative overflow-hidden">
               <div className="w-48 h-48 border-2 border-purple-500/30 rounded-full animate-pulse absolute"></div>
               <div className="w-32 h-32 bg-purple-500/10 rounded-full flex items-center justify-center">
                 <span className="text-4xl text-purple-400">🗺️</span>
               </div>
               <p className="absolute bottom-12 text-center text-xs text-gray-500 max-w-xs uppercase tracking-widest font-bold">Digital Parcel Simulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 4: Future Proofing */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Future-Proofing Your Home</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Even if you aren't ready to sell today, performing an SB 9 split increases your property's "Option Value." You are essentially creating a second tradable asset that remains dormant until the market hits your target price.
          </p>
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100">
             <div className="flex flex-col md:flex-row justify-center gap-12 text-left">
               <div>
                 <h4 className="font-bold text-purple-600 mb-2">Resale Liquidity</h4>
                 <p className="text-sm text-gray-500">Easier to sell a 5k sq ft lot than a 10k sq ft one in many LA markets.</p>
               </div>
               <div>
                 <h4 className="font-bold text-purple-600 mb-2">Flexibility</h4>
                 <p className="text-sm text-gray-500">Rent one, live in one, or sell both—the choice is permanently yours.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Maximize Your Land.</h2>
          <p className="text-xl text-gray-500 mb-10">Lumina handles the complex engineering, mapping, and recording required for a successful SB 9 lot split.</p>
          <a href="#contact" className="px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all">Request SB 9 Consultation</a>
        </div>
      </section>
    </div>
  );
};

export default SB9Page;
