import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { SectionHead, Divider, Icon, Markup, Accordion, CTA } from "../components/UI.jsx";
import { NEEDS, COMPARE, WHY_MATTERS, APPROACH, PROCESS, AUTHORS, GENRES, TESTIMONIALS } from "../data/site.js";
import { SERVICES } from "../data/services.js";
import { CASES } from "../data/caseStudies.js";
import { FAQS } from "../data/faqs.js";

export default function Home() {
  const hero = CASES[0];
  const preview = CASES[2];

  return (
    <>
      {/* 1. HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="fade">
            <p className="eyebrow">Manuscript editing · Ebook formatting</p>
            <h1>Your story, <em>clearer.</em><br />Your voice, <em>intact.</em></h1>
            <p className="lead">Inkwell Editorial is an independent editorial studio helping debut, indie and self-published authors turn finished drafts into polished, publication-ready books — from big-picture story feedback to the final EPUB file.</p>
            <div className="btn-row">
              <Link className="btn btn-primary" to="/contact">Request a Free Sample Edit <FiArrowRight /></Link>
              <Link className="btn btn-ghost" to="/editing">See real edits</Link>
            </div>
            <ul className="hero-facts">
              <li><strong>1,000</strong>words edited free</li>
              <li><strong>3 days</strong>sample turnaround</li>
              <li><strong>100%</strong>confidential</li>
            </ul>
          </div>
          <div className="paper">
            <span className="paper-label">{hero.title} · {hero.service}</span>
            <p className="excerpt"><Markup text={hero.markup} /></p>
            <div className="margin-note"><strong>Editor's note — </strong>Filler cut, the discovery moved forward, and the sentence split in two. Nothing of the author's meaning was lost.</div>
          </div>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Welcome to Inkwell</p>
            <h2>An editorial studio built for <em>independent</em> authors.</h2>
          </div>
          <div>
            <p className="lead-sm">Traditionally published authors have an entire editorial team behind them. Independent authors deserve the same care — without losing control of their book.</p>
            <p>Inkwell Editorial offers every stage of professional editing, from developmental feedback on structure and character to line editing, copy editing and a final proofread, plus ebook formatting that makes your book look at home on any Kindle, phone or tablet.</p>
            <p>Every edit is done in Track Changes, every significant decision is explained, and every manuscript is treated as confidential. You stay the author. I help the book become the version you imagined.</p>
            <Link className="text-link" to="/about">More about the editor <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* 3. WHAT I CAN HELP WITH */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="What I can help with"
            title={<>Something about your manuscript <em>isn't quite right.</em></>}
            lead="Most authors arrive with a feeling rather than a diagnosis. These are the problems I hear about most often — and every one of them is fixable."
          />
          <div className="grid-4">
            {NEEDS.map((n) => (
              <div className="need" key={n.title}>
                <span className="icon-wrap"><Icon name={n.icon} /></span>
                <h4>{n.title}</h4>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Services"
            title={<>Every stage, from <em>first draft</em> to finished ebook.</>}
            lead="Choose a single service or combine stages. Each one has a clear scope, a clear price and a clear delivery date."
          />
          <div className="grid-4">
            {SERVICES.map((s) => (
              <Link to="/services" className="card svc-card" key={s.id}>
                <span className="icon-wrap"><Icon name={s.icon} /></span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <div className="svc-card-foot"><span>{s.price}</span><FiArrowRight /></div>
              </Link>
            ))}
            <Link to="/contact" className="card svc-card svc-card-dark">
              <span className="icon-wrap"><Icon name="help" /></span>
              <h3>Not sure yet?</h3>
              <p>Send a free sample and I'll recommend the right service — honestly.</p>
              <div className="svc-card-foot"><span>Free</span><FiArrowRight /></div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHICH SERVICE */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Which editing service do you need?"
            title={<>Different problems need <em>different edits.</em></>}
            lead="Buying the wrong level of edit is the most common — and most expensive — mistake authors make. Here's how the stages compare."
          />
          <div className="compare">
            {COMPARE.map((c) => (
              <div className="compare-col" key={c.service}>
                <h4>{c.service}</h4>
                <span className="small upper">Best for</span>
                <p className="best">{c.bestFor}</p>
                <dl>
                  <dt>Focus</dt><dd>{c.focus}</dd>
                  <dt>It asks</dt><dd>{c.question}</dd>
                  <dt>When</dt><dd>{c.stage}</dd>
                </dl>
              </div>
            ))}
          </div>
          <p className="small mt-3 center">Still unsure? <Link className="inline-link" to="/contact">Send a sample</Link> and I'll recommend the right starting point.</p>
        </div>
      </section>

      {/* 6. BEFORE & AFTER */}
      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Before & after"
            title={<>See the edit, <em>not just the promise.</em></>}
            lead={preview.title + " · " + preview.genre + " · " + preview.service + ". An action scene rebuilt around strong verbs — with every change visible."}
          />
          <div className="ba">
            <div className="ba-panel"><h5>The original</h5><p className="excerpt">{preview.original}</p></div>
            <div className="ba-panel markup"><h5>Editorial markup</h5><p className="excerpt"><Markup text={preview.markup} /></p></div>
            <div className="ba-panel after"><h5>The polished version</h5><p className="excerpt">{preview.polished}</p></div>
          </div>
          <div className="center mt-4"><Link className="btn btn-ghost" to="/editing">Explore nine full editing case studies <FiArrowRight /></Link></div>
        </div>
      </section>

      {/* 7. WHY EDITING MATTERS */}
      <section>
        <div className="container split sticky-left">
          <div>
            <p className="eyebrow">Why professional editing matters</p>
            <h2>A good story can still <em>lose its readers.</em></h2>
            <p className="mt-2">Readers rarely put a book down because of one big problem. They put it down because of a slow accumulation of small ones — each moment of friction pulling them a little further out of the story.</p>
            <p className="pull mt-4">Editing improves the reading experience without taking ownership away from the author.</p>
          </div>
          <ol className="why-list">
            {WHY_MATTERS.map((w, i) => (
              <li key={w.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{w.title}</h4><p>{w.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. APPROACH */}
      <section className="section-dark">
        <div className="container">
          <SectionHead
            eyebrow="The Inkwell approach"
            title={<>Five principles behind <em>every edit.</em></>}
            lead="Whether it's a 60,000-word romance or a 140,000-word fantasy epic, the same commitments apply."
          />
          <div className="principles">
            {APPROACH.map((a, i) => (
              <div className="principle" key={a.title}>
                <span>{"0" + (i + 1)}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROCESS */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="The process"
            title={<>Four clear steps, <em>no surprises.</em></>}
            lead="You'll always know what's happening, what it costs and when it will be delivered."
          />
          <div className="steps">
            {PROCESS.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>{s.details.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHO I WORK WITH */}
      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Who I work with"
            title={<>For authors who are <em>serious</em> about their books.</>}
          />
          <div className="grid-3">
            {AUTHORS.map((a) => (
              <div className="card" key={a.title}>
                <span className="icon-wrap"><Icon name={a.icon} /></span>
                <h4>{a.title}</h4>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. GENRES */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Genres"
            title={<>Fluent in the genres <em>readers love.</em></>}
            lead="Every genre carries its own conventions and promises to readers. Your edit respects them."
          />
          <div className="grid-5">
            {GENRES.map((g) => (
              <div className="genre" key={g.name}>
                <h4>{g.name}</h4>
                <p>{g.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS */}
      <section className="section-alt">
        <div className="container">
          <SectionHead eyebrow="Kind words" title={<>What authors say about <em>the edit.</em></>} center />
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <figure className="quote" key={i}>
                <span className="quote-mark">“</span>
                <p>{t.quote}</p>
                <cite><strong>{t.name}</strong>{t.role}</cite>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQ PREVIEW */}
      <section>
        <div className="container split">
          <div>
            <p className="eyebrow">Questions</p>
            <h2>Frequently <em>asked.</em></h2>
            <p className="mt-2">The questions authors ask most before booking. There are many more on the full FAQ page.</p>
            <Link className="text-link" to="/faq">Read all FAQs <FiArrowRight /></Link>
          </div>
          <Accordion items={FAQS.slice(0, 6)} />
        </div>
      </section>

      {/* 14. CTA */}
      <CTA />
    </>
  );
}
