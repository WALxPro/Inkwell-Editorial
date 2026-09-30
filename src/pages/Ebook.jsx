import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowDown, FiCheck, FiFileText } from "react-icons/fi";
import { PageHero, SectionHead, CTA } from "../components/UI.jsx";

const ELEMENTS = [
  ["Chapter titles", "Consistent heading styles for every chapter, linked to navigation so readers can jump straight to them."],
  ["Scene breaks", "A centred ornament or blank-line break that survives every screen size   no more drifting asterisks."],
  ["Paragraph spacing", "First-line indents with no gaps, or block paragraphs   applied consistently, never with tabs or spaces."],
  ["Italics", "Thoughts, letters, emphasis and foreign words converted to true italic styling that readers' fonts respect."],
  ["Bold text", "Used sparingly and consistently   for text messages, signs or headings   never as manual formatting."],
  ["Special characters", "Em dashes, ellipses, curly quotes, accented names and symbols that display correctly on every device."],
  ["Table of contents", "A generated, linked table of contents at the front of the book   never typed by hand."],
  ["Clickable navigation", "The device-level menu that lets readers jump between chapters from anywhere in the book."],
  ["Front matter", "Title page, copyright page, dedication, epigraph and content notes   in the right order."],
  ["Back matter", "Also-by page, newsletter sign-up, next-book preview and links to your website or series."],
  ["Author bio", "A short, styled About the Author page, with an optional photo and links."],
  ["Acknowledgments", "Placed in the back matter so readers reach chapter one faster in the sample."],
  ["Copyright page", "Copyright notice, rights statement, edition, ISBN (if you have one) and credits for cover and editing."]
];

const TYPES = [
  { name: "Manuscript formatting", purpose: "For editors, agents and beta readers", layout: "Double-spaced, 12pt standard font, simple styles", pages: "Page numbers and header with title/author", output: "DOCX file" },
  { name: "Print formatting", purpose: "For paperbacks and hardbacks", layout: "Fixed pages: trim size, margins, gutters, typography", pages: "Page numbers, running heads, no widows", output: "Print-ready PDF" },
  { name: "Ebook formatting", purpose: "For Kindle, Apple Books, Kobo and phone apps", layout: "Reflowable text that adapts to the reader's settings", pages: "No fixed pages; linked navigation instead", output: "EPUB / KDP-ready file" }
];

export default function Ebook() {
  return (
    <>
      <PageHero
        eyebrow="Ebook formatting"
        title={<>A professional ebook, <em>on every screen.</em></>}
        lead="Your readers will choose their own font, size and screen. Ebook formatting makes sure your book looks deliberate and professional whatever they choose   on Kindle, Apple Books, Kobo, Nook and phone reading apps."
      >
        <div className="btn-row">
          <Link className="btn btn-primary" to="/contact">Get a formatting quote <FiArrowRight /></Link>
          <Link className="btn btn-ghost" to="/pricing">From $149 flat</Link>
        </div>
      </PageHero>

      {/* PIPELINE */}
      <section className="section-alt">
        <div className="container">
          <SectionHead eyebrow="How it works" title={<>From messy manuscript to <em>publication-ready ebook.</em></>} center />
          <div className="pipeline">
            <div className="pipe-card">
              <span className="label">1 · Messy manuscript</span>
              <div className="messy">
                <span className="flag">⇥⇥⇥</span>CHAPTER 1{"\n"}
                <span className="flag">¶ ¶ ¶ ¶</span>{"\n"}
                <span className="flag">⇥</span>The first time I saw Calloway it was raining<span className="flag"> ,</span> and I<span className="flag">··</span>hated it.{"\n\n"}
                <span className="flag">*          *          *</span>{"\n\n"}
                <span className="flag">⇥</span>I wrote <span className="flag">**Dear Nora**</span> at the top.{"\n\n"}
                <span className="flag">Contents ........ 1</span>
              </div>
              <p className="small">Tabs, empty returns, typed contents, stray spaces, markdown bold.</p>
            </div>
            <div className="pipe-arrow"><FiArrowRight size={28} className="arrow-h" /><FiArrowDown size={28} className="arrow-v" /></div>
            <div className="pipe-card">
              <span className="label">2 · Formatting</span>
              <ul className="check-list">
                <li><FiCheck />Manual formatting stripped</li>
                <li><FiCheck />Paragraph & heading styles applied</li>
                <li><FiCheck />Scene breaks styled</li>
                <li><FiCheck />Italics & special characters fixed</li>
                <li><FiCheck />Table of contents generated & linked</li>
                <li><FiCheck />Front & back matter built</li>
                <li><FiCheck />EPUB validated & device-tested</li>
              </ul>
            </div>
            <div className="pipe-arrow"><FiArrowRight size={28} className="arrow-h" /><FiArrowDown size={28} className="arrow-v" /></div>
            <div className="pipe-card">
              <span className="label">3 · Publication-ready ebook</span>
              <div className="device">
                <div className="device-screen">
                  <span className="dev-num">Chapter One</span>
                  <h4>Calloway</h4>
                  <p className="first">The first time I saw Calloway, it was raining, and I hated it.</p>
                  <div className="orn">❦</div>
                  <p className="first">By morning the sky had cleared. I wrote <i>Dear Nora</i> at the top of the page.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section>
        <div className="container">
          <SectionHead eyebrow="What ebook formatting includes" title={<>Thirteen details readers <em>notice</em>   even if they can't name them.</>} />
          <div className="elements">
            {ELEMENTS.map(([t, d], i) => (
              <div className="element" key={t}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{t}</h4><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE TYPES */}
      <section className="section-alt">
        <div className="container">
          <SectionHead eyebrow="Know the difference" title={<>Manuscript, print and ebook formatting <em>are not the same thing.</em></>} lead="A file formatted for an editor, a file formatted for a printer and a file formatted for a Kindle each have different jobs." />
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th></th>{TYPES.map((t) => <th key={t.name}>{t.name}</th>)}</tr></thead>
              <tbody>
                <tr><td><strong>Purpose</strong></td>{TYPES.map((t) => <td key={t.name}>{t.purpose}</td>)}</tr>
                <tr><td><strong>Layout</strong></td>{TYPES.map((t) => <td key={t.name}>{t.layout}</td>)}</tr>
                <tr><td><strong>Pages</strong></td>{TYPES.map((t) => <td key={t.name}>{t.pages}</td>)}</tr>
                <tr><td><strong>Output</strong></td>{TYPES.map((t) => <td key={t.name}>{t.output}</td>)}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* KINDLE / EPUB */}
      <section>
        <div className="container split">
          <div>
            <p className="eyebrow">Kindle & EPUB, in plain language</p>
            <h2>One well-built file. <em>Every major store.</em></h2>
          </div>
          <div>
            <p className="lead-sm">EPUB is the standard ebook format   think of it as a small, carefully organised website packaged into a single file.</p>
            <p>Apple Books, Kobo, Barnes & Noble, Google Play and distributors like Draft2Digital all use EPUB. Amazon KDP accepts EPUB uploads too, and converts them for Kindle devices and apps. That means one clean, validated EPUB can serve every retailer.</p>
            <p>Unlike a PDF, an ebook has no fixed pages. The text reflows when readers change the font size or turn their phone sideways. That's why formatting must be built with styles rather than spaces, tabs and page breaks   and why a document that looks perfect in Word can fall apart on a Kindle.</p>
            <p>Before delivery, every file is validated and checked in Kindle and EPUB previewers at different screen sizes.</p>
          </div>
        </div>
      </section>

      {/* FILES */}
      <section className="section-alt">
        <div className="container">
          <SectionHead eyebrow="What you receive" title={<>Files ready to <em>upload.</em></>} />
          <div className="grid-4">
            {[
              ["EPUB file", "For Apple Books, Kobo, Nook, Google Play and aggregators."],
              ["KDP-ready file", "Prepared and previewed for upload to Amazon KDP."],
              ["PDF preview", "An easy way to review layout and front and back matter."],
              ["Formatting summary", "Styles used, fonts, notes and anything to check before upload."]
            ].map(([t, d]) => (
              <div className="card" key={t}>
                <span className="icon-wrap"><FiFileText size={22} /></span>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="note mt-4">Formatting works best on a final, proofread manuscript. Text changes after formatting are possible, but each round slows publication   the Complete Ebook Package includes a proofread of the formatted file for exactly this reason.</p>
        </div>
      </section>

      <CTA title="Ready to publish a book that looks as good as it reads?" text="Send your manuscript details for a flat-fee formatting quote, or request a free sample edit if the text still needs a final polish." />
    </>
  );
}
