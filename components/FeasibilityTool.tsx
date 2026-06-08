
import React, { useEffect, useMemo, useState } from 'react';

/**
 * SB 1211 feasibility calculator + multi-step lead-generation form.
 * Replaces the old AI-planning assistant. The calculator math comes from
 * §§66313(e) and 66323: detached ADUs equal the number of existing units,
 * capped at 8; interior conversions add 1 or 25% of units, whichever is greater.
 */

// ---------- shared math ----------

const calcDetached = (units: number, hasLot: boolean, existing: boolean): number => {
  if (!hasLot) return 0;
  return existing ? Math.min(units, 8) : 2;
};

const calcInterior = (units: number, hasInterior: boolean): number =>
  hasInterior ? Math.max(1, Math.floor(units * 0.25)) : 0;

// ---------- inline calculator ----------

interface ToggleProps {
  value: boolean;
  onChange: (v: boolean) => void;
  on: string;
  off: string;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange, on, off }) => (
  <div className="inline-flex bg-gray-100 rounded-full p-1 text-xs font-semibold">
    <button
      type="button"
      onClick={() => onChange(true)}
      className={`px-4 py-1.5 rounded-full transition-all ${value ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
    >
      {on}
    </button>
    <button
      type="button"
      onClick={() => onChange(false)}
      className={`px-4 py-1.5 rounded-full transition-all ${!value ? 'bg-white shadow-sm text-black' : 'text-gray-400'}`}
    >
      {off}
    </button>
  </div>
);

const Calculator: React.FC<{ onOpenReport: () => void }> = ({ onOpenReport }) => {
  const [units, setUnits] = useState(8);
  const [hasLot, setHasLot] = useState(true);
  const [existing, setExisting] = useState(true);
  const [hasInterior, setHasInterior] = useState(true);

  const detached = calcDetached(units, hasLot, existing);
  const interior = calcInterior(units, hasInterior);
  const total = detached + interior;
  const oldMax = 2 + calcInterior(units, hasInterior);

  return (
    <div className="grid md:grid-cols-2 gap-8 glass-card p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
      {/* controls */}
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex justify-between items-baseline">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Existing units on the lot</label>
            <span className="text-2xl font-bold tabular-nums">{units}</span>
          </div>
          <input
            type="range"
            min={2}
            max={40}
            value={units}
            onChange={(e) => setUnits(+e.target.value)}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Buildable yard / parking?</label>
          <Toggle value={hasLot} onChange={setHasLot} on="Yes" off="No" />
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Existing or proposed building?</label>
          <Toggle value={existing} onChange={setExisting} on="Existing" off="Proposed" />
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Non-habitable interior space?</label>
          <Toggle value={hasInterior} onChange={setHasInterior} on="Yes" off="No" />
        </div>
      </div>

      {/* output */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 flex flex-col justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Your lot can add up to</p>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-7xl font-bold tracking-tight">{total}</span>
            <span className="text-gray-400 text-lg">new homes</span>
          </div>
          <div className="space-y-3 text-sm border-t border-white/10 pt-5">
            <div className="flex justify-between">
              <span className="text-gray-400">Detached ADUs</span>
              <span className="font-semibold">{detached}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Interior conversions</span>
              <span className="font-semibold">{interior}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-white/10">
              <span className="text-gray-400">vs. pre-SB-1211 maximum</span>
              <span className="font-semibold text-orange-400">{oldMax}</span>
            </div>
          </div>
        </div>
        <button
          onClick={onOpenReport}
          className="mt-8 w-full py-3.5 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all"
        >
          Get my full feasibility report →
        </button>
      </div>
    </div>
  );
};

// ---------- lead-gen modal ----------

interface OptionDef {
  v: string;
  t: string;
  d: string;
}

const PROP_OPTS: OptionDef[] = [
  { v: 'duplex', t: 'Duplex / Triplex', d: '2–3 existing units' },
  { v: 'small_apt', t: 'Small apartment', d: '4–7 existing units' },
  { v: 'mid_apt', t: 'Mid-size apartment', d: '8–32 existing units' },
  { v: 'large_apt', t: 'Large complex', d: '33+ units' },
  { v: 'sfr', t: 'Single-family', d: "Different rules — we'll route" },
  { v: 'shopping', t: 'Just exploring', d: 'Pre-acquisition' },
];

const LOT_OPTS: OptionDef[] = [
  { v: 'big_lot', t: 'Surface parking + yard', d: 'Best case for SB 1211' },
  { v: 'parking', t: 'Surface parking only', d: 'Parking-lot conversion' },
  { v: 'yard', t: 'Yard / open space', d: 'Backyard infill' },
  { v: 'tight', t: 'Tight, mostly built-out', d: 'Interior conversion only' },
];

const JURIS_OPTS: OptionDef[] = [
  { v: 'la', t: 'Los Angeles County', d: 'High demand, strong tailwinds' },
  { v: 'sd', t: 'San Diego region', d: 'Bonus ADU program' },
  { v: 'bay', t: 'Bay Area', d: 'Highest rents in state' },
  { v: 'oc', t: 'Orange County', d: 'Mixed local treatment' },
  { v: 'valley', t: 'Central Valley', d: 'Lower cost basis' },
  { v: 'other', t: 'Elsewhere in CA', d: 'Statewide rules apply' },
];

const RENT_MONTHLY: Record<string, number> = { la: 2400, sd: 2300, bay: 2900, oc: 2500, valley: 1700, other: 2000 };
const PROP_LABEL: Record<string, string> = {
  duplex: 'duplex/triplex', small_apt: 'small apartment', mid_apt: 'mid-size apartment',
  large_apt: 'large apartment complex', sfr: 'single-family property', shopping: 'pre-acquisition target',
};
const JURIS_LABEL: Record<string, string> = {
  la: 'Los Angeles County', sd: 'San Diego region', bay: 'Bay Area',
  oc: 'Orange County', valley: 'Central Valley', other: 'California',
};

interface LeadState {
  prop: string;
  units: number;
  lot: string;
  juris: string;
}

const OptionGrid: React.FC<{ opts: OptionDef[]; selected: string; onSelect: (v: string) => void }> = ({ opts, selected, onSelect }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {opts.map((o) => (
      <button
        key={o.v}
        type="button"
        onClick={() => onSelect(o.v)}
        className={`text-left p-4 rounded-2xl border transition-all ${
          selected === o.v ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
      >
        <span className="block text-lg font-bold leading-tight">{o.t}</span>
        <span className="block text-[10px] uppercase tracking-widest text-gray-400 mt-1">{o.d}</span>
      </button>
    ))}
  </div>
);

const LeadModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [step, setStep] = useState(1);
  const [lead, setLead] = useState<LeadState>({ prop: '', units: 8, lot: '', juris: '' });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addr, setAddr] = useState('');
  const [phone, setPhone] = useState('');
  const [ref, setRef] = useState('');

  // reset when reopened
  useEffect(() => {
    if (open) {
      setStep(1);
      setLead({ prop: '', units: 8, lot: '', juris: '' });
      setName(''); setEmail(''); setAddr(''); setPhone('');
    }
  }, [open]);

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const report = useMemo(() => {
    const u = lead.units;
    const isSFR = lead.prop === 'sfr';
    const isShopping = lead.prop === 'shopping';
    let detached: number, interior: number;
    if (isSFR) {
      detached = 1; interior = 1;
    } else {
      const hasYardOrParking = lead.lot !== 'tight';
      detached = hasYardOrParking ? Math.min(u, 8) : 0;
      interior = lead.lot === 'parking' ? 0 : Math.max(1, Math.floor(u * 0.25));
    }
    const total = detached + interior;
    const rentMonthly = RENT_MONTHLY[lead.juris] || 2200;
    const annualRent = Math.round((total * rentMonthly * 12) / 1000);
    const parkingApplies =
      lead.lot === 'parking' || lead.lot === 'big_lot'
        ? 'Yes — unlocks scale'
        : lead.lot === 'yard'
        ? 'N/A — no parking removed'
        : 'Limited — mostly built out';
    const propLabel = PROP_LABEL[lead.prop] || 'multifamily property';
    const jurisLabel = JURIS_LABEL[lead.juris] || 'California';
    const headline = isShopping
      ? `A typical multifamily lot in ${jurisLabel} could add up to ${total} new homes.`
      : `Your lot can build up to ${total} new homes.`;
    return { detached, interior, total, annualRent, parkingApplies, propLabel, jurisLabel, headline };
  }, [lead]);

  if (!open) return null;

  const canAdvance = (() => {
    if (step === 1) return !!lead.prop;
    if (step === 2) return lead.units > 0;
    if (step === 3) return !!lead.lot;
    if (step === 4) return !!lead.juris;
    if (step === 5) return name.trim().length > 1 && /.+@.+\..+/.test(email);
    return true;
  })();

  const submitLead = () => {
    try {
      const record = { ...lead, name, email, addr, phone, ts: Date.now() };
      console.log('LEAD CAPTURED', record);
      const all = JSON.parse(localStorage.getItem('lumina_leads') || '[]');
      all.push(record);
      localStorage.setItem('lumina_leads', JSON.stringify(all));
      // best-effort POST to a backend if one exists; harmless otherwise
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...record, page: location.pathname }),
      }).catch(() => {});
    } catch {
      /* localStorage may be unavailable */
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else if (step === 5) {
      submitLead();
      setRef('LUMINA-' + Math.random().toString(36).slice(2, 6).toUpperCase() + '-' + new Date().getFullYear());
      setStep(6);
    }
  };

  const firstName = name.split(' ')[0]?.trim();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
            <span className="w-2 h-2 bg-blue-500 rounded-full" /> Lumina ADU · SB 1211 Feasibility Report
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full text-gray-400 hover:bg-gray-100 hover:text-black transition-colors text-xl leading-none">×</button>
        </div>

        {/* body */}
        <div className="px-6 md:px-10 py-8 overflow-y-auto">
          {step === 1 && (
            <>
              <h3 className="text-2xl font-bold mb-2">What kind of property do you own?</h3>
              <p className="text-sm text-gray-500 mb-6">SB 1211's expanded 8-ADU cap applies to <i>existing</i> multifamily lots only. We use this to apply the right math.</p>
              <OptionGrid opts={PROP_OPTS} selected={lead.prop} onSelect={(v) => setLead({ ...lead, prop: v })} />
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-2xl font-bold mb-2">How many units does the building have today?</h3>
              <p className="text-sm text-gray-500 mb-8">Detached ADUs are capped at the lesser of 8 or your existing unit count. Drag to your number.</p>
              <div className="text-center">
                <div className="text-7xl font-bold tracking-tight text-blue-600">{lead.units}<span className="text-lg text-gray-400 font-normal ml-2">units</span></div>
                <input
                  type="range"
                  min={1}
                  max={60}
                  value={lead.units}
                  onChange={(e) => setLead({ ...lead, units: +e.target.value })}
                  className="w-full accent-blue-600 mt-8 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-2 tracking-widest">
                  <span>1</span><span>15</span><span>30</span><span>45</span><span>60</span>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="text-2xl font-bold mb-2">What does the lot look like?</h3>
              <p className="text-sm text-gray-500 mb-6">The new parking provision is what makes most projects pencil. Be honest about what's there now.</p>
              <OptionGrid opts={LOT_OPTS} selected={lead.lot} onSelect={(v) => setLead({ ...lead, lot: v })} />
            </>
          )}

          {step === 4 && (
            <>
              <h3 className="text-2xl font-bold mb-2">Where's the property?</h3>
              <p className="text-sm text-gray-500 mb-6">Cities can permit <i>more</i> than SB 1211 — not less. We'll flag local overlays in your report.</p>
              <OptionGrid opts={JURIS_OPTS} selected={lead.juris} onSelect={(v) => setLead({ ...lead, juris: v })} />
            </>
          )}

          {step === 5 && (
            <>
              <p className="text-[10px] uppercase tracking-widest text-blue-600 font-bold mb-2">Preliminary result</p>
              <h3 className="text-2xl font-bold mb-1">{report.headline}</h3>
              <p className="text-sm text-gray-500 mb-6">Based on a {lead.units}-unit {report.propLabel} in {report.jurisLabel}.</p>

              <div className="bg-gray-900 text-white rounded-2xl p-6 flex flex-wrap justify-between items-center gap-4 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold">{report.total}</span>
                  <span className="text-gray-400">units</span>
                </div>
                <div className="text-sm text-gray-300 space-y-0.5">
                  <div><b className="text-white">{report.detached}</b> detached · SB 1211</div>
                  <div><b className="text-white">{report.interior}</b> interior conversions</div>
                  <div>~$<b className="text-white">{report.annualRent}K</b> est. annual rent</div>
                </div>
              </div>

              <div className="space-y-2 text-sm mb-8">
                <div className="flex justify-between"><span className="text-gray-500">Parking provision applies</span><b>{report.parkingApplies}</b></div>
                <div className="flex justify-between"><span className="text-gray-500">Approval pathway</span><b>Ministerial · §66314</b></div>
                <div className="flex justify-between"><span className="text-gray-500">Est. timeline to permit</span><b>60–120 days</b></div>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-6">
                <h4 className="text-xl font-bold mb-1">Want the full report?</h4>
                <p className="text-sm text-gray-500 mb-4">We'll email you a 4-page PDF with jurisdiction-specific overlays, a real pro-forma, and a permit-ready next-steps checklist. No sales calls unless you ask.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Your name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Hernandez" className="w-full mt-1 bg-gray-50 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="jane@example.com" className="w-full mt-1 bg-gray-50 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Property address (optional)</label>
                    <input value={addr} onChange={(e) => setAddr(e.target.value)} placeholder="1234 Oak St, Los Angeles" className="w-full mt-1 bg-gray-50 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Phone (optional)</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(310) 555-0142" className="w-full mt-1 bg-gray-50 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 6 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
              <h3 className="text-2xl font-bold mb-2">Report on the way.</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Thanks{firstName ? ' ' + firstName : ''} — Lumina ADU will deliver your full SB 1211 feasibility report to {email} within 24 hours.
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-block mt-8 px-6 py-3.5 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
              >
                Book a free consultation now →
              </a>
              <p className="mt-6 text-[10px] uppercase tracking-widest text-gray-400">Ref · {ref}</p>
            </div>
          )}
        </div>

        {/* footer */}
        {step !== 6 && (
          <div className="flex items-center justify-between gap-4 px-6 py-4 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className={`w-2 h-2 rounded-full transition-colors ${n === step ? 'bg-blue-600' : n < step ? 'bg-gray-400' : 'bg-gray-200'}`} />
              ))}
              <span className="text-xs text-gray-400 ml-2">Step {step} of 5</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step <= 1}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canAdvance}
                className="px-5 py-2 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 disabled:opacity-30 transition-colors"
              >
                {step === 5 ? 'Send my report' : 'Next'} →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ---------- section wrapper ----------

const FeasibilityTool: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="feasibility" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">SB 1211 Calculator</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 mt-3 text-gradient">
            How many can you build?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Drag the controls to see your buildable cap under California's SB 1211. Then get a personalized feasibility report for your property.
          </p>
        </div>

        <Calculator onOpenReport={() => setModalOpen(true)} />

        <div className="text-center mt-10">
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg"
          >
            Run my feasibility check →
          </button>
          <p className="text-xs text-gray-400 mt-3">Three minutes, four questions. No sales calls unless you ask.</p>
        </div>
      </div>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default FeasibilityTool;
