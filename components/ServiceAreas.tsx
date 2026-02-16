
import React from 'react';

const regions = [
  {
    name: "Westside & Central",
    cities: ["Beverly Hills", "Culver City", "Los Angeles", "Malibu", "Santa Monica", "West Hollywood", "Bel Air", "Brentwood", "Pacific Palisades", "Silver Lake", "Echo Park", "Hollywood"]
  },
  {
    name: "San Fernando Valley",
    cities: ["Burbank", "Calabasas", "Glendale", "Hidden Hills", "San Fernando", "Sherman Oaks", "Encino", "Van Nuys", "Northridge", "Woodland Hills", "Studio City", "Chatsworth"]
  },
  {
    name: "South Bay & Beach Cities",
    cities: ["Carson", "El Segundo", "Gardena", "Hawthorne", "Hermosa Beach", "Inglewood", "Lawndale", "Lomita", "Manhattan Beach", "Palos Verdes Estates", "Rancho Palos Verdes", "Redondo Beach", "Torrance"]
  },
  {
    name: "San Gabriel Valley",
    cities: ["Alhambra", "Arcadia", "Azusa", "Baldwin Park", "Claremont", "Covina", "Diamond Bar", "Duarte", "El Monte", "Glendora", "Monrovia", "Monterey Park", "Pasadena", "Pomona", "San Marino", "West Covina"]
  },
  {
    name: "Gateway Cities",
    cities: ["Artesia", "Bell", "Bellflower", "Cerritos", "Commerce", "Compton", "Downey", "Huntington Park", "Lakewood", "La Mirada", "Lynwood", "Montebello", "Norwalk", "Paramount", "Pico Rivera", "Whittier"]
  },
  {
    name: "North County",
    cities: ["Lancaster", "Palmdale", "Santa Clarita", "Agoura Hills", "Westlake Village", "Castaic", "Stevenson Ranch"]
  }
];

interface ServiceAreasProps {
  onCitySelect: (city: string) => void;
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ onCitySelect }) => {
  return (
    <section id="areas" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Serving Every Corner of <span className="text-gradient">Los Angeles.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Lumina ADU provides end-to-end design and construction services across all 88 cities in LA County. Our expertise in local zoning ensures your project is compliant and fast-tracked.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {regions.map((region) => (
            <div key={region.name} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-black border-b border-gray-100 pb-2">
                {region.name}
              </h3>
              <ul className="space-y-2">
                {region.cities.map((city) => (
                  <li key={city}>
                    <button 
                      onClick={() => onCitySelect(city)}
                      className="text-sm text-gray-400 hover:text-blue-600 transition-colors duration-200 block text-left w-full"
                    >
                      {city}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gray-50 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-xl font-bold">Don't see your neighborhood?</h4>
            <p className="text-gray-500 text-sm">We likely build there too. Contact our planning team for a site assessment.</p>
          </div>
          <a href="#contact" className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-all">
            Check My Address
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
