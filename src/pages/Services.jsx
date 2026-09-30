import { Link } from "react-router-dom";
import { FiCheck, FiX, FiClock, FiTag, FiFileText, FiArrowRight } from "react-icons/fi";
import { PageHero, Icon, CTA } from "../components/UI.jsx";
import { SERVICES } from "../data/services.js";

export default function Services() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Seven services. One goal: <em>the best version of your book.</em></>}
        lead="Each service below is explained in full   what it is, who needs it, when to book it, exactly what's included and what isn't, how long it takes and what you receive at the end."
      >
        <div className="jump">
          {SERVICES.map((s) => <button key={s.id} onClick={() => go(s.id)}>{s.name}</button>)}
        </div>
      </PageHero>

      <div className="container">
        {SERVICES.map((s, i) => (
          <article id={s.id} className="svc-detail" key={s.id}>
            <div className="svc-top">
              <div>
                <span className="svc-num">{String(i + 1).padStart(2, "0")}   <Icon name={s.icon} size={16} /></span>
                <h2>{s.name}</h2>
                <p className="lead">{s.tagline}</p>
              </div>
              <div className="svc-meta">
                <div><span><FiClock /> Typical turnaround</span><strong>{s.turnaround}</strong></div>
                <div><span><FiTag /> Starting price</span><strong>{s.price}</strong></div>
              </div>
            </div>

            <p className="best-for">{s.bestFor}</p>

            <div className="svc-trio">
              <div><span className="label">What it is</span><p>{s.what}</p></div>
              <div><span className="label">Who needs it</span><p>{s.who}</p></div>
              <div><span className="label">When you need it</span><p>{s.when}</p></div>
            </div>

            <div className="svc-lists">
              <div>
                <span className="label">What I look for</span>
                <ul className="tag-list">{s.looksFor.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div>
                <span className="label">What's included</span>
                <ul className="check-list">{s.included.map((x) => <li key={x}><FiCheck />{x}</li>)}</ul>
              </div>
              <div>
                <span className="label">Not included</span>
                <ul className="x-list">{s.notIncluded.map((x) => <li key={x}><FiX />{x}</li>)}</ul>
              </div>
              <div>
                <span className="label">What you receive</span>
                <ul className="file-list">{s.receive.map((x) => <li key={x}><FiFileText />{x}</li>)}</ul>
              </div>
            </div>

            <div className="btn-row">
              <Link className="btn btn-primary btn-sm" to="/contact">Request a sample for this service <FiArrowRight /></Link>
              {s.id === "ebook" && <Link className="btn btn-ghost btn-sm" to="/ebook-formatting">Full ebook formatting guide</Link>}
              {s.rate && <Link className="btn btn-ghost btn-sm" to="/pricing">Estimate your price</Link>}
            </div>
          </article>
        ))}
      </div>

      <section>
        <div className="container narrow center">
          <p className="eyebrow">Combining services</p>
          <h2>Most books need <em>two or three</em> stages   rarely all of them.</h2>
          <p className="mt-2">A common path is a line edit followed by a proofread and ebook formatting. Strong self-editors often need only a copy edit and proofread. Your free sample edit comes with an honest recommendation so you only pay for what your manuscript needs.</p>
        </div>
      </section>

      <CTA title="Not sure which service you need?" text="Send the first 1,000 words. You'll receive a free sample edit, a recommendation and a fixed quote within three business days." />
    </>
  );
}
