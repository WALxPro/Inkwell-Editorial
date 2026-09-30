import { Link } from "react-router-dom";
import {
  FiX, FiArrowRight, FiMessageSquare, FiClock, FiFileText,
  FiShield, FiEdit3, FiBookOpen, FiUsers, FiSmartphone,
} from "react-icons/fi";
import { PageHero, SectionHead, CTA } from "../components/UI.jsx";
import { SITE } from "../data/site.js";

/* ---------- Page content ---------- */

const PHILOSOPHY = [
  {
    title: "Your voice comes first",
    text: "Your voice is a set of choices: rhythm, vocabulary, what you notice and what you leave out. Before I change anything, I learn those choices. Deliberate fragments, unusual punctuation and dialect go into your style sheet and are protected, not corrected.",
  },
  {
    title: "Every manuscript gets a full read",
    text: "I read the whole book before I make a single change. Then I edit, build your style sheet as I go, and review my own changes before delivery. Nothing leaves the studio unchecked.",
  },
  {
    title: "Plain-language communication",
    text: "No editorial jargon. You get a reply within one business day, a halfway update, and questions batched together so you aren't interrupted constantly. If a deadline is at risk, you hear early, never on the due date.",
  },
];

const PROCESS = [
  {
    title: "Send a sample",
    text: "Send the first 1,000 words through the contact form. It's free and there's no commitment.",
    points: ["Tell me your genre and goals", "Share your target publish date"],
  },
  {
    title: "Get a recommendation",
    text: "Within three business days you receive a sample edit, an honest view of which service your book needs, and a fixed quote.",
    points: ["Only the stages you need", "No surprise costs"],
  },
  {
    title: "The edit",
    text: "I read the full manuscript, edit it in tracked changes and keep a running style sheet. You get a halfway update.",
    points: ["Comments explain the why", "Queries batched, not scattered"],
  },
  {
    title: "Delivery and follow-up",
    text: "You receive your files and a short summary of patterns worth watching in your writing. I answer follow-up questions after delivery.",
    points: ["Tracked and clean copies", "Style sheet included"],
  },
];

const NEVER = [
  "Rewrite your book in my own voice.",
  "Change your story, plot or characters without asking you first.",
  "Share, quote or reuse your manuscript, including in my portfolio, without your written permission.",
  "Use your work to train AI tools.",
  "Hand your manuscript to a subcontractor. Every edit is done by me.",
  "Quote a price that changes after you've accepted.",
  "Miss a deadline without telling you well in advance.",
];

const EXPECT = [
  { icon: FiMessageSquare, title: "Clear communication", text: "Replies within one business day and a halfway update on every project, in plain language." },
  { icon: FiClock, title: "Honest timelines", text: "You'll get a realistic delivery date before you commit, and early warning if anything shifts." },
  { icon: FiEdit3, title: "Edits that teach", text: "Comments explain the reasoning behind changes, so you improve as a writer with each book." },
  { icon: FiFileText, title: "Clean, usable files", text: "Tracked and clean manuscripts, plus a style sheet you can hand to any future editor or proofreader." },
  { icon: FiShield, title: "Real confidentiality", text: "Your manuscript is private from the moment it arrives. Nothing is shared or used without your say-so." },
  { icon: FiSmartphone, title: "Ebook-ready finishing", text: "Formatting for Kindle, Apple Books, Kobo and other major retailers, so editing and publishing stay in one place." },
];

const WHO = [
  { icon: FiBookOpen, title: "First-time authors", text: "Finished a first draft and unsure what it needs? I'll tell you plainly and explain what to fix first." },
  { icon: FiUsers, title: "Independent and self-publishing authors", text: "You run your own publishing process and want professional quality without a publisher's gatekeeping." },
  { icon: FiEdit3, title: "Series and returning authors", text: "A consistent editor who knows your style sheet, your world and your recurring characters." },
];

const GENRES = [
  "Romance", "Fantasy", "Science fiction", "Mystery", "Thriller",
  "Historical", "Literary", "Young adult", "Christian fiction", "LGBTQ+ fiction",
];

/* ---------- Page ---------- */

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>An editor who believes the book <em>belongs to you.</em></>}
        lead="Inkwell Editorial is a one-editor studio. The person who reads your sample is the person who edits your book, answers your emails and delivers your files."
      />

      {/* 1. The editor */}
      <section>
        <div className="container about-intro">
          <div className="portrait">
            <span>I</span>
            <p className="small">Add your photo here</p>
          </div>
          <div>
            <p className="eyebrow">About the editor</p>
            <h2>Hello, I'm {SITE.editor}.</h2>
            <p className="lead-sm mt-2">
              I edit fiction for independent authors: developmental feedback, line editing, copy editing, proofreading and ebook formatting.
            </p>
            <p>
              I've spent years inside other people's sentences, and the most important thing I've learned is that good editing is mostly restraint. The goal is never to make a book sound like its editor. It's to remove everything standing between the reader and the story the author meant to tell.
            </p>
            <p>
              I work across romance, fantasy, science fiction, mystery, thriller, historical, literary and young adult fiction, and I format ebooks for Kindle, Apple Books, Kobo and every major retailer.
            </p>
            <p className="signature">{SITE.editor}, Founder & Editor</p>
          </div>
        </div>
      </section>

      {/* 2. Why the studio exists */}
      <section className="section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Why Inkwell Editorial exists</p>
            <h2>Independent authors deserve a <em>real editorial partner.</em></h2>
          </div>
          <div>
            <p>
              Self-publishing gives authors extraordinary freedom, and a long list of jobs that publishers used to do. Editing is the most important of them and often the hardest to buy with confidence. Prices are unclear, services have vague names, and it's difficult to know what you're getting until it's too late.
            </p>
            <p>
              Inkwell exists to make professional editing understandable: clear services, visible pricing, real examples of the work, and an edit that teaches you something about your own writing.
            </p>
            <p>
              Because it's a one-editor studio, there are no handoffs and no account managers between you and the person working on your manuscript.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Philosophy */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Editorial philosophy"
            title={<>What guides <em>every edit.</em></>}
          />
          <div className="grid-3">
            {PHILOSOPHY.map((p) => (
              <div className="card" key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How a project runs: a true sequence, so numbered steps are appropriate */}
      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="How it works"
            title={<>From first sample to <em>finished book.</em></>}
          />
          <div className="steps">
            {PROCESS.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
          <Link className="text-link" to="/services">See all seven services <FiArrowRight /></Link>
        </div>
      </section>

      {/* 5. Promises */}
      <section className="section-dark">
        <div className="container split">
          <div>
            <p className="eyebrow">Promises</p>
            <h2>Things I will <em>never</em> do.</h2>
            <p className="mt-2">
              Trust matters more than anything in an editorial relationship. These are the lines I don't cross.
            </p>
          </div>
          <ul className="never-list">
            {NEVER.map((n) => <li key={n}><FiX />{n}</li>)}
          </ul>
        </div>
      </section>

      {/* 6. What to expect */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Working together"
            title={<>What you can <em>expect from me.</em></>}
          />
          <div className="grid-3">
            {EXPECT.map(({ icon: Ico, title, text }) => (
              <div className="card" key={title}>
                <span className="icon-wrap"><Ico size={20} /></span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Who and what */}
      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Authors & genres"
            title={<>Who I edit for, <em>and what.</em></>}
          />
          <div className="grid-3">
            {WHO.map(({ icon: Ico, title, text }) => (
              <div className="mini" key={title}>
                <Ico size={18} />
                <div><strong>{title}</strong><p>{text}</p></div>
              </div>
            ))}
          </div>
          <ul className="tag-list mt-4">
            {GENRES.map((g) => <li key={g}>{g}</li>)}
          </ul>
          <Link className="text-link" to="/confidentiality">
            How your manuscript is kept confidential <FiArrowRight />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}