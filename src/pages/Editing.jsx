import { Link } from "react-router-dom";
import { FiArrowRight, FiInfo } from "react-icons/fi";
import { PageHero, Markup, CTA, SectionHead } from "../components/UI.jsx";
import { CASES } from "../data/caseStudies.js";

export default function Editing() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageHero
        eyebrow="The Edit"
        title={<>See the edit, <em>not just the promise.</em></>}
        lead="Anyone can say they'll make your writing better. This page shows exactly what that means   the original passage, what I noticed, every tracked change, the reasoning behind it, and the polished result."
      />

      <section className="section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Why show examples?</p>
            <h2>Because editing is <em>invisible</em> when it's done well.</h2>
          </div>
          <div>
            <p>A finished, well-edited book doesn't look edited   it just reads smoothly. That makes it hard for authors to judge what an editor actually does. So instead of describing the work, this page shows it, stage by stage, exactly as you'd see it in your own manuscript.</p>
            <p>Each case study focuses on one common problem: wordiness, repetition, weak verbs, dialogue, description, pacing, grammar, continuity and ebook formatting. Read them in order, or jump to the problem you recognise in your own writing.</p>
            <p className="note mt-3"><FiInfo /> To protect client confidentiality, the passages on this page were written for demonstration. Real client work is only ever shown with written permission.</p>
          </div>
        </div>
      </section>

      <section className="legend-section">
        <div className="container">
          <div className="legend">
            <span><del className="mk-del">Deleted text</del>   removed</span>
            <span><ins className="mk-ins">Inserted text</ins>   added</span>
            <span className="legend-q">Author query   a question, not a change</span>
          </div>
          <div className="case-index mt-4">
            {CASES.map((c, i) => (
              <button key={c.id} onClick={() => go(c.id)}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{c.focus}</strong>
                <em>{c.title}</em>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        {CASES.map((c, i) => (
          <article className="case" id={c.id} key={c.id}>
            <div className="case-head">
              <div>
                <p className="eyebrow">Case study {String(i + 1).padStart(2, "0")} · {c.focus}</p>
                <h2>{c.title}</h2>
              </div>
              <div className="case-meta">
                <span>{c.genre}</span><span>{c.service}</span><span>{c.size}</span>
              </div>
            </div>

            <div className="case-body">
              <div className="case-label">The challenge</div>
              <div className="case-content"><p>{c.challenge}</p></div>

              <div className="case-label">The original</div>
              <div className="case-content"><div className={"panel" + (c.format ? " mono" : "")}><p className="excerpt">{c.original}</p></div></div>

              <div className="case-label">What I noticed</div>
              <div className="case-content"><p>{c.noticed}</p></div>

              <div className="case-label">Editorial markup</div>
              <div className="case-content">
                <div className={"panel markup" + (c.format ? " mono" : "")}><p className="excerpt"><Markup text={c.markup} /></p></div>
                {c.query && <div className="query-box">{c.query}</div>}
              </div>

              <div className="case-label">Editor's note</div>
              <div className="case-content"><p className="editor-note">{c.note}</p></div>

              <div className="case-label">The polished version</div>
              <div className="case-content"><div className={"panel polished" + (c.format ? " ebook-view" : "")}><p className="excerpt">{c.polished}</p></div></div>

              <div className="case-label">What changed</div>
              <div className="case-content">
                <ul className="changed-list">{c.changed.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>

              <div className="case-label">Editorial takeaway</div>
              <div className="case-content"><p className="takeaway">{c.takeaway}</p></div>
            </div>
          </article>
        ))}
      </div>

      <section>
        <div className="container narrow center">
          <SectionHead
            center
            eyebrow="Your turn"
            title={<>Want to see this done to <em>your</em> writing?</>}
            lead="The free sample edit uses exactly this approach on your first 1,000 words   tracked changes, margin comments and an explanation of the patterns I found."
          />
          <div className="btn-row center">
            <Link className="btn btn-primary" to="/contact">Request a Free Sample Edit <FiArrowRight /></Link>
            <Link className="btn btn-ghost" to="/portfolio">View the portfolio</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
