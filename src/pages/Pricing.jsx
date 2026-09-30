import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiInfo, FiCheck } from "react-icons/fi";
import { PageHero, SectionHead, CTA, Icon } from "../components/UI.jsx";
import { SERVICES } from "../data/services.js";

const money = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const num = (n) => n.toLocaleString("en-US");

export function estimate(s, w) {
  if (s.rate) return s.rate * w;
  if (s.tiers) return s.tiers.find((t) => w <= t.max).price;
  return s.flat || 0;
}

const FACTORS = [
  { icon: "file", title: "Manuscript condition", text: "A clean, self revised draft takes less time per page than an early draft. The sample shows me which you have." },
  { icon: "book", title: "Genre", text: "Invented worlds, technical detail or historical accuracy require more checking and a more detailed style sheet." },
  { icon: "layers", title: "Editing depth", text: "Developmental, line, copy and proofreading involve very different amounts of work per word." },
  { icon: "edit", title: "Word count", text: "The main driver. Editing is priced per word, so the quote scales fairly with your book." },
  { icon: "tablet", title: "Formatting complexity", text: "Letters, poems, text messages, images or unusual layouts inside an ebook take extra build time." },
  { icon: "clock", title: "Deadline", text: "Standard scheduling is included. Rush timelines, when available, may carry a surcharge of up to 25%." }
];

export default function Pricing() {
  const priced = SERVICES.filter((s) => s.rate || s.tiers);
  const [words, setWords] = useState(80000);
  const [id, setId] = useState("line");
  const svc = SERVICES.find((s) => s.id === id);
  const total = estimate(svc, words);
  const formula = svc.rate
    ? num(words) + " words × $" + svc.rate + " per word"
    : "Flat fee for a manuscript of " + num(words) + " words";

  const example = [
    { label: "Line edit", w: 75000, rate: 0.016 },
    { label: "Proofread", w: 75000, rate: 0.008 }
  ];
  const exampleSum = example.reduce((a, e) => a + e.w * e.rate, 0) + 199;

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Transparent pricing, <em>based on your word count.</em></>}
        lead="No hidden fees, no vague packages. You can estimate the cost of your edit right now, and you'll receive a fixed quote after I review your sample."
      />

      {/* WHY WORD COUNT */}
      <section>
        <div className="container split">
          <div>
            <p className="eyebrow">Why price by word?</p>
            <h2>Fair for short books. <em>Fair for long ones.</em></h2>
          </div>
          <div>
            <p className="lead-sm">Per word pricing is the most transparent way to price editing, because the work grows with the length of the book.</p>
            <p>An hourly rate makes it hard to know what you'll pay until the edit is done. A flat “package” price often hides assumptions about length. A per word rate lets you calculate an estimate before we've even spoken   and compare quotes fairly.</p>
            <p>Ebook formatting is different: the work depends more on structure than on words, so it's priced as a flat fee based on manuscript length.</p>
            <p className="note mt-3"><FiInfo /> Starting prices are estimates. A final quote is provided after reviewing your sample.</p>
          </div>
        </div>
      </section>

      {/* RATES */}
      <section className="section-alt">
        <div className="container">
          <SectionHead eyebrow="Starting rates" title={<>Rates by <em>service.</em></>} />
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Service</th><th>Starting price</th><th>Turnaround</th><th>Best for</th></tr></thead>
              <tbody>
                {SERVICES.map((s) => (
                  <tr key={s.id}>
                    <td><strong>{s.name}</strong></td>
                    <td>{s.price}</td>
                    <td>{s.turnaround}</td>
                    <td className="muted">{s.bestFor.replace("Best for ", "")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="small mt-2">Ebook formatting: $149 up to 60,000 words · $199 up to 120,000 words · $249 above 120,000 words.</p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section>
        <div className="container">
          <SectionHead eyebrow="Estimate your project" title={<>How an estimate is <em>calculated.</em></>} lead="Choose a service and enter your word count. The formula is simple: word count × per-word rate." />
          <div className="calc">
            <div className="calc-in">
              <div className="field">
                <label htmlFor="svc">Service</label>
                <select id="svc" value={id} onChange={(e) => setId(e.target.value)}>
                  {priced.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="wc">Word count</label>
                <input id="wc" type="number" min="1000" step="1000" value={words} onChange={(e) => setWords(Math.max(0, Number(e.target.value) || 0))} />
              </div>
              <input type="range" min="10000" max="200000" step="1000" value={words} onChange={(e) => setWords(Number(e.target.value))} aria-label="Word count slider" />
              <p className="small">Tip: your word processor shows the word count at the bottom of the window (or under Tools → Word count).</p>
            </div>
            <div className="calc-out">
              <span className="small upper light">Estimated project price</span>
              <span className="big">{money(total)}</span>
              <span className="formula">{formula}</span>
              <span className="small light mt-2">Turnaround: {svc.turnaround}</span>
              <Link className="btn btn-light mt-3" to="/contact">Get an exact quote <FiArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* WORD COUNT EXAMPLES */}
      <section className="section-alt">
        <div className="container">
          <SectionHead eyebrow="Word-count examples" title={<>What typical manuscripts <em>cost.</em></>} lead="Estimated starting prices for three common manuscript lengths." />
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Service</th><th>50,000 words</th><th>75,000 words</th><th>100,000 words</th></tr></thead>
              <tbody>
                {priced.map((s) => (
                  <tr key={s.id}>
                    <td><strong>{s.name}</strong></td>
                    {[50000, 75000, 100000].map((w) => <td key={w}>{money(estimate(s, w))}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="worked mt-6">
            <div>
              <p className="eyebrow">Worked example</p>
              <h3>A 75,000 word contemporary romance needing a line edit, a proofread and ebook formatting.</h3>
            </div>
            <ul className="calc-lines">
              {example.map((e) => (
<li key={e.label}><span>{e.label}: {num(e.w)} × \${e.rate}</span><strong>{money(e.w * e.rate)}</strong></li>              ))}
              <li><span>Ebook formatting (60,001–120,000 words)</span><strong>{money(199)}</strong></li>
              <li className="total"><span>Estimated total</span><strong>{money(exampleSum)}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* FACTORS */}
      <section>
        <div className="container">
          <SectionHead eyebrow="What affects your final quote" title={<>Six factors that shape <em>the price.</em></>} lead="Your final quote is fixed before work begins. These are the factors I consider when reviewing your sample." />
          <div className="grid-3">
            {FACTORS.map((f) => (
              <div className="card" key={f.title}>
                <span className="icon-wrap"><Icon name={f.icon} /></span>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Booking & payment</p>
            <h2>Simple terms, <em>in writing.</em></h2>
          </div>
          <div>
            <ul className="check-list big-list">
              <li><FiCheck />A fixed quote   the price you're quoted is the price you pay.</li>
              <li><FiCheck />A 50% deposit reserves your editing slot; the balance is due on delivery.</li>
              <li><FiCheck />Projects under $300 are paid in full at booking.</li>
              <li><FiCheck />Payment plans are available for projects over $1,500.</li>
              <li><FiCheck />30 days of follow-up questions included with every edit.</li>
              <li><FiCheck />Author consultations are $95 per 60-minute session.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container narrow center">
          <p className="eyebrow">Not sure which service you need?</p>
          <h2>Send a sample. <em>Get a recommendation.</em></h2>
          <p className="mt-2">You don't need to diagnose your manuscript yourself. Send up to 1,000 words and I'll edit them for free, explain what I found, and recommend the level of edit your book needs   with a fixed quote. Sometimes the answer is a lighter service than you expected.</p>
          <div className="btn-row center"><Link className="btn btn-primary" to="/contact">Request a Free Sample Edit <FiArrowRight /></Link></div>
        </div>
      </section>

      <CTA />
    </>
  );
}
