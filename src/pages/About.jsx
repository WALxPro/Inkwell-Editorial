import { Link } from "react-router-dom";
import {
  FiX, FiArrowRight, FiMessageSquare, FiClock, FiFileText,
  FiShield, FiEdit3, FiBookOpen, FiUsers, FiSmartphone,
} from "react-icons/fi";
import { PageHero, SectionHead, CTA } from "../components/UI.jsx";
import { SITE } from "../data/site.js";

const PHILOSOPHY = [
  {
    title: "Your Voice Matters",
    text: "Every author has a unique writing style. Our approach focuses on improving clarity and readability while preserving the author's original voice.",
  },
  {
    title: "Quality Comes First",
    text: "Every manuscript receives careful attention to consistency, structure, and detail to help authors prepare their work for publication.",
  },
  {
    title: "Clear Communication",
    text: "Straightforward feedback, clear expectations, and helpful updates keep authors informed throughout the editing process.",
  },
];

const PROCESS = [
  {
    title: "Submit Your Sample",
    text: "Share your manuscript details and project goals to get started.",
    points: ["Tell us your genre and goals", "Share your target publish date"],
  },
  {
    title: "Get a Recommendation",
    text: "Receive a suitable service recommendation and quotation for your manuscript.",
    points: ["Choose the services you need", "Understand the cost upfront"],
  },
  {
    title: "Editing Begins",
    text: "Your manuscript is reviewed and edited with care, consistency, and constructive feedback.",
    points: ["Clear editorial comments", "Consistent editing approach"],
  },
  {
    title: "Final Delivery",
    text: "Receive your edited files and relevant documentation according to the agreed service.",
    points: ["Organised project files", "Helpful editorial guidance"],
  },
];

const NEVER = [
  "Rewrite your book to impose another writing style.",
  "Change your story or characters without your approval.",
  "Share your manuscript without written permission.",
  "Use your work to train AI tools.",
  "Hand your manuscript to an unauthorised subcontractor.",
  "Change the agreed price without approval.",
  "Leave you uninformed about significant deadline changes.",
];

const EXPECT = [
  {
    icon: FiMessageSquare,
    title: "Clear Communication",
    text: "Straightforward feedback and helpful project updates.",
  },
  {
    icon: FiClock,
    title: "Reliable Timelines",
    text: "Clear delivery expectations and timely communication.",
  },
  {
    icon: FiEdit3,
    title: "Thoughtful Editing",
    text: "Careful improvements that preserve your unique voice.",
  },
  {
    icon: FiFileText,
    title: "Professional Files",
    text: "Organised deliverables tailored to your selected service.",
  },
  {
    icon: FiShield,
    title: "Confidentiality",
    text: "Your manuscript is treated with care and discretion.",
  },
  {
    icon: FiSmartphone,
    title: "Ebook Formatting",
    text: "Professional formatting for major ebook reading platforms.",
  },
];

const WHO = [
  {
    icon: FiBookOpen,
    title: "First-Time Authors",
    text: "Get guidance on improving your first manuscript and preparing it for publication.",
  },
  {
    icon: FiUsers,
    title: "Independent Authors",
    text: "Access professional editing while retaining creative control of your work.",
  },
  {
    icon: FiEdit3,
    title: "Returning Authors",
    text: "Maintain consistency across multiple books, series, and recurring characters.",
  },
];

const GENRES = [
  "Romance",
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Historical",
  "Literary",
  "Young Adult",
  "Christian Fiction",
  "LGBTQ+ Fiction",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Helping authors bring their stories to <em>life.</em></>}
        lead="Inkwell Editorial provides professional editing and ebook formatting services to help independent authors prepare their manuscripts for publication."
      />

      {/* 1. About Inkwell */}
      <section>
        <div className="container split">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2>Professional editing with a <em>personal touch.</em></h2>
          </div>
          <div>
            <p className="lead-sm">
              Inkwell Editorial helps independent authors refine their
              manuscripts through professional editing and ebook formatting.
            </p>
            <p>
              Our focus is on clarity, consistency, and preserving each
              author's unique voice. Every project is approached with care
              so authors can move forward with confidence.
            </p>
            {/* <p className="signature">
              {SITE.editor}, Founder & Editor
            </p> */}
          </div>
        </div>
      </section>

      {/* 2. Why Inkwell Editorial */}
      <section className="section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Our Purpose</p>
            <h2>Every author deserves a <em>trusted partner.</em></h2>
          </div>
          <div>
            <p>
              Publishing a book takes creativity, dedication, and attention
              to detail. Finding the right editorial support should be simple.
            </p>
            <p>
              Inkwell Editorial offers clearly defined services and
              personalised guidance to help authors improve their work
              while keeping control of their creative vision.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Editorial Philosophy */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="Our Philosophy"
            title={<>The principles behind <em>every edit.</em></>}
          />
          <div className="grid-3">
            {PHILOSOPHY.map((item) => (
              <div className="card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Process */}
      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="How It Works"
            title={<>From first sample to <em>finished manuscript.</em></>}
          />
          <div className="steps">
            {PROCESS.map((step, index) => (
              <div className="step" key={step.title}>
                <span className="step-num">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <ul>
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link className="text-link" to="/services">
            Explore Our Services <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* 5. Our Commitments */}
      <section className="section-dark">
        <div className="container split">
          <div>
            <p className="eyebrow">Our Commitments</p>
            <h2>Your story stays <em>yours.</em></h2>
            <p className="mt-2">
              Trust, confidentiality, and respect for every author's
              creative vision are central to our approach.
            </p>
          </div>
          <ul className="never-list">
            {NEVER.map((item) => (
              <li key={item}>
                <FiX />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. What to Expect */}
      <section>
        <div className="container">
          <SectionHead
            eyebrow="The Inkwell Experience"
            title={<>Professional support at <em>every stage.</em></>}
          />
          <div className="grid-3">
            {EXPECT.map(({ icon: Icon, title, text }) => (
              <div className="card" key={title}>
                <span className="icon-wrap">
                  <Icon size={20} />
                </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Authors and Genres */}
      <section className="section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Authors & Genres"
            title={<>Supporting every author's <em>journey.</em></>}
          />
          <div className="grid-3">
            {WHO.map(({ icon: Icon, title, text }) => (
              <div className="mini" key={title}>
                <Icon size={18} />
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="tag-list mt-4">
            {GENRES.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>

          <Link className="text-link" to="/confidentiality">
            Learn About Our Confidentiality Practices <FiArrowRight />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}