
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FeasibilityTool from './components/FeasibilityTool';
import ServiceAreas from './components/ServiceAreas';
import CityPage from './components/CityPage';
import SB1123Page from './components/SB1123Page';
import SB9Page from './components/SB9Page';
import SB1211Page from './components/SB1211Page';

type View = 'home' | 'sb1123' | 'sb9' | 'sb1211' | { type: 'city'; name: string };

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const goHome = () => {
    setView('home');
    document.title = "Lumina ADU | Los Angeles Premier ADU Builders";
    window.scrollTo(0, 0);
  };

  const goToCity = (city: string) => {
    setView({ type: 'city', name: city });
  };

  const goToSB1123 = () => setView('sb1123');
  const goToSB9 = () => setView('sb9');
  const goToSB1211 = () => setView('sb1211');

  return (
    <div className="min-h-screen">
      <Navbar onHome={goHome} />
      
      {view === 'home' && (
        <>
          {/* Hero Section with Video Background */}
          <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover scale-105"
                poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-house-architecture-under-a-clear-sky-42930-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-[#fbfbfd]"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10 px-6">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-white drop-shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-1000">
                Backyards, <br />
                <span className="text-white opacity-90">Redefined.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-sm">
                Lumina ADU builds premium Accessory Dwelling Units in Los Angeles. From garage conversions to detached suites, we handle design, permitting, and construction.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a href="#feasibility" className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all min-w-[200px] shadow-xl">
                  Check My Property
                </a>
                <a href="#areas" className="px-8 py-4 text-white font-semibold hover:underline flex items-center gap-2 drop-shadow-md">
                  View Areas <span>→</span>
                </a>
              </div>
            </div>
          </section>

          {/* Legislative Bento Grid */}
          <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button 
                  onClick={goToSB1123}
                  className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-all text-left group"
                >
                  <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-4 block">Vacant Lots</span>
                  <h3 className="text-2xl font-bold mb-3">SB 1123</h3>
                  <p className="text-gray-500 text-sm mb-6">Build modern homes on residential vacant land simplified by new state laws.</p>
                  <span className="text-blue-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">Learn more →</span>
                </button>

                <button 
                  onClick={goToSB9}
                  className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-all text-left group"
                >
                  <span className="text-purple-600 font-bold text-[10px] uppercase tracking-widest mb-4 block">Lot Splits</span>
                  <h3 className="text-2xl font-bold mb-3">SB 9</h3>
                  <p className="text-gray-500 text-sm mb-6">Split your single-family lot into two and build up to four units on one property.</p>
                  <span className="text-purple-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">Learn more →</span>
                </button>

                <button 
                  onClick={goToSB1211}
                  className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-all text-left group"
                >
                  <span className="text-green-600 font-bold text-[10px] uppercase tracking-widest mb-4 block">Multi-Family</span>
                  <h3 className="text-2xl font-bold mb-3">SB 1211</h3>
                  <p className="text-gray-500 text-sm mb-6">Expand detached units on multi-family lots and maximize your rental portfolio yield.</p>
                  <span className="text-green-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">Learn more →</span>
                </button>
              </div>
            </div>
          </section>

          {/* Feature Bento Grid */}
          <section id="solutions" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white rounded-3xl p-10 flex flex-col justify-between h-[400px] border border-gray-100 overflow-hidden relative group">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Design First</span>
                    <h3 className="text-3xl font-bold mt-4 max-w-md">Garage Conversions made elegant.</h3>
                    <p className="text-gray-500 mt-4 max-w-sm">Turn your unused garage into a high-yielding rental asset or a designer guest house in as little as 12 weeks.</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="ADU Interior" className="absolute bottom-0 right-0 w-1/2 rounded-tl-3xl shadow-xl transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="bg-black rounded-3xl p-10 flex flex-col justify-between h-[400px] text-white">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Permitting</span>
                    <h3 className="text-3xl font-bold mt-4">Zero stress. Full compliance.</h3>
                    <p className="text-gray-400 mt-4">We handle all LADBS permits and zoning clearances. You just watch the progress.</p>
                  </div>
                  <div className="text-6xl font-light opacity-50">100%</div>
                </div>

                <div className="bg-white rounded-3xl p-10 flex flex-col justify-between h-[400px] border border-gray-100">
                   <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-green-500">Sustainability</span>
                    <h3 className="text-3xl font-bold mt-4">Solar-ready by default.</h3>
                    <p className="text-gray-500 mt-4">Energy-efficient construction that meets Title 24 standards and beyond.</p>
                  </div>
                   <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=400&q=80" alt="Solar ADU" className="rounded-xl mt-4 h-32 object-cover" />
                </div>

                <div className="md:col-span-2 bg-white rounded-3xl p-10 flex flex-col justify-between h-[400px] border border-gray-100 relative overflow-hidden group">
                  <div className="z-10 relative">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-500">Detached ADU</span>
                    <h3 className="text-3xl font-bold mt-4 max-w-md">The modern backyard home.</h3>
                    <p className="text-gray-500 mt-4 max-w-sm">Architectural masterpieces built from the ground up. Customize every finish.</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80" alt="Backyard Home" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>
            </div>
          </section>

          <FeasibilityTool />

          <ServiceAreas onCitySelect={goToCity} />

          <section className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Building across the <br /><span className="text-blue-400">Los Angeles Basin.</span></h2>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    From the hills of Silver Lake to the coast of Santa Monica, we understand the unique building codes of every neighborhood in LA County. Our specialized teams are active in Pasadena, Culver City, West Hollywood, and the San Fernando Valley.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Santa Monica', 'Pasadena', 'Culver City', 'Silver Lake', 'Sherman Oaks', 'West Hollywood'].map(city => (
                      <button key={city} onClick={() => goToCity(city)} className="flex items-center gap-2 text-sm text-left hover:text-blue-400 transition-colors">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {city}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1534430480872-3498386e7a56?auto=format&fit=crop&w=400&h=400&q=80" className="rounded-2xl" alt="LA Architecture" />
                  <img src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&w=400&h=400&q=80" className="rounded-2xl translate-y-8" alt="LA ADU" />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {view === 'sb1123' && <SB1123Page onBack={goHome} />}
      {view === 'sb9' && <SB9Page onBack={goHome} />}
      {view === 'sb1211' && <SB1211Page onBack={goHome} />}

      {typeof view === 'object' && view.type === 'city' && (
        <CityPage city={view.name} onBack={goHome} />
      )}

      {/* Footer */}
      <footer id="contact" className="py-24 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Lumina ADU</h2>
              <p className="text-gray-500 max-w-xs mb-8">Elevating Los Angeles backyards with architectural precision and AI-driven efficiency.</p>
              <div className="space-y-4">
                <p className="text-sm"><strong>HQ:</strong> 1234 Melrose Ave, West Hollywood, CA 90046</p>
                <p className="text-sm"><strong>Email:</strong> build@luminaadu.la</p>
                <p className="text-sm"><strong>Call:</strong> (310) 555-0199</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legislative Guides</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><button onClick={goToSB1123} className="hover:text-black">SB 1123 Vacant Lots</button></li>
                <li><button onClick={goToSB9} className="hover:text-black">SB 9 Urban Lot Splits</button></li>
                <li><button onClick={goToSB1211} className="hover:text-black">SB 1211 Multi-Family</button></li>
                <li><a href="#" className="hover:text-black">LA ADU Ordinances</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black">About Us</a></li>
                <li><a href="#" className="hover:text-black">Our Process</a></li>
                <li><a href="#" className="hover:text-black">Careers</a></li>
                <li><a href="#" className="hover:text-black">Contractor Portal</a></li>
                <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© 2024 Lumina ADU Builders. CSLB License #1098234. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-gray-400">
              <a href="#" className="hover:text-black">Instagram</a>
              <a href="#" className="hover:text-black">LinkedIn</a>
              <a href="#" className="hover:text-black">Zillow</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
