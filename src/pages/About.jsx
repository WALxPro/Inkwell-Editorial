import { Link } from "react-router-dom";
import { FiX, FiArrowRight } from "react-icons/fi";
import { PageHero, SectionHead, Icon, CTA } from "../components/UI.jsx";
import { SITE, GENRES, AUTHORS, NEVER_DO, EXPECT, APPROACH } from "../data/site.js";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>An editor who believes the book <em>belongs to you.</em></>}
        lead="Inkwell Editorial is a one-editor studio. That means the person who reads your sample is the person who edits your book, answers your emails and delivers your files."
      />

      <section>
        <div className="container about-intro">
          <div className="portrait">
            <span>I</span>
            <p className="small">Add your photo here</p>
          </div>
          <div>
            <p className="eyebrow">About the editor</p>
            <h2>Hello — I'm {SITE.editor}.</h2>
            <p className="lead-sm mt-2">I edit fiction for independent authors: developmental feedback, line editing, copy editing, proofreading and ebook formatting.</p>
            <p>I've spent years inside other people's sentences, and the most important thing I've learned is that good editing is mostly restraint. The goal is never to make a book sound like its editor. It's to remove everything standing between the reader and the story the author meant to tell.</p>
            <p>I work across romance, fantasy, science fiction, mystery, thriller, historical, literary and young adult fiction, and I format ebooks for Kindle, Apple Books, Kobo and every major retailer.</p>
            <p className="signature">— {SITE.editor}, Founder & Editor</p>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Why Inkwell Editorial exists</p>
            <h2>Independent authors deserve a <em>real editorial partner.</em></h2>
          </div>
          <div>
            <p>Self-publishing gives authors extraordinary freedom — and a long list of jobs publishers used to do. Editing is the most important of them and often the hardest to buy with confidence. Prices are opaque, services are vaguely named, and it's hard to know what you're getting until it's too late.</p>
            <p>Inkwell exists to make professional editing understandable: clear services, visible pricing, real examples of the work, and an edit that teaches you something about your own writing.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead eyebrow="Editorial philosophy" title={<>What guides <em>every decision.</em></>} />
          <div className="grid-3">
            <div className="card"><h4>On author voice</h4><p>Your voice is a set of choices — rhythm, vocabulary, what you notice and what you leave out. Before I change anything, I learn those choices. Intentional fragments, unconventional punctuation and dialect are recorded in the style sheet and protected, not corrected.</p></div>
            <div className="card"><h4>On quality</h4><p>Every manuscript receives a full read before editing begins, a style sheet built as I work, and a final review pass of my own changes before delivery. Nothing leaves the studio that I haven't checked twice.</p></div>
            <div className="card"><h4>On communication</h4><p>Plain language, no editorial jargon. Replies within one business day, a halfway update, and batched questions so you aren't interrupted constantly. If a deadline is at risk, you'll hear early — never on the due date.</p></div>
          </div>
          <div className="principles light mt-6">
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

      <section className="section-dark">
        <div className="container split">
          <div>
            <p className="eyebrow">Promises</p>
            <h2>Things I will <em>never</em> do.</h2>
            <p className="mt-2">Trust matters more than anything in an editorial relationship. These are the lines I don't cross.</p>
          </div>
          <ul className="never-list">
            {NEVER_DO.map((n) => <li key={n}><FiX />{n}</li>)}
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHead eyebrow="Working together" title={<>What you can <em>expect from me.</em></>} />
          <div className="grid-3">
            {EXPECT.map((e) => (
              <div className="card" key={e.title}>
                <span className="icon-wrap"><Icon name={e.icon} /></span>
                <h4>{e.title}</h4>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <SectionHead eyebrow="Authors & genres" title={<>Who I edit for, <em>and what.</em></>} />
          <div className="grid-3">
            {AUTHORS.map((a) => (
              <div className="mini" key={a.title}><Icon name={a.icon} size={18} /><div><strong>{a.title}</strong><p>{a.text}</p></div></div>
            ))}
          </div>
          <ul className="tag-list mt-4">{GENRES.map((g) => <li key={g.name}>{g.name}</li>)}</ul>
          <Link className="text-link" to="/confidentiality">How your manuscript is kept confidential <FiArrowRight /></Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
