
import React, { useState } from 'react';
import { getADURecommendations } from '../services/geminiService';
import { RecommendationResponse } from '../types';

const AIAssistant: React.FC = () => {
  const [lotSize, setLotSize] = useState('');
  const [budget, setBudget] = useState('');
  const [goals, setGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = await getADURecommendations(lotSize, budget, goals);
    setResult(data);
    setLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
            Meet Aura.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Your personal AI architectural assistant. Tell us about your property, and we'll design the perfect ADU strategy.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Lot Size (sq ft)</label>
                <input 
                  type="number" 
                  value={lotSize}
                  onChange={(e) => setLotSize(e.target.value)}
                  placeholder="e.g. 6000"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Estimated Budget</label>
                <input 
                  type="text" 
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. $150,000"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Your Goals</label>
              <textarea 
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="Rental income, home office, guest suite for parents..."
                className="w-full bg-gray-50 border-none rounded-xl p-4 h-32 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                required
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all disabled:opacity-50"
            >
              {loading ? 'Analyzing LA Zoning Data...' : 'Generate My ADU Strategy'}
            </button>
          </form>

          {result && (
            <div className="mt-12 space-y-8 animate-in fade-in duration-700">
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-2xl font-bold mb-6">Your Personalized Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {result.plans.map((plan, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                          {plan.type}
                        </span>
                        <span className="text-sm font-medium text-gray-400">{plan.sqft} sqft</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2">{plan.type} Concept</h4>
                      <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Cost</p>
                          <p className="text-sm font-semibold">{plan.estimatedCost}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Timeline</p>
                          <p className="text-sm font-semibold">{plan.timeline}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {plan.pros.map((pro, pi) => (
                          <div key={pi} className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="w-1 h-1 bg-green-500 rounded-full" /> {pro}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-sm font-bold text-blue-800 uppercase mb-2">LA Zoning Insights</h4>
                <p className="text-sm text-blue-900 leading-relaxed">{result.zoningAdvice}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Your Next Steps</h4>
                <ul className="space-y-3">
                  {result.nextSteps.map((step, si) => (
                    <li key={si} className="flex gap-4 items-start">
                      <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] shrink-0">
                        {si + 1}
                      </span>
                      <p className="text-sm text-gray-600">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
