import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { PageHero, Accordion, CTA } from "../components/UI.jsx";
import { FAQS } from "../data/faqs.js";

const CATS = ["Services", "Pricing", "Process", "Ebooks", "Privacy"];

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions authors ask <em>before booking.</em></>}
        lead="Straight answers about services, pricing, timelines, ebook files and confidentiality. If your question isn't here, send it with your sample — I'm happy to answer."
      />
      <section>
        <div className="container">
          {CATS.map((c) => (
            <div className="faq-group" key={c}>
              <div><p className="eyebrow">{c}</p><h3>{FAQS.filter((f) => f.cat === c).length} questions</h3></div>
              <Accordion items={FAQS.filter((f) => f.cat === c)} startOpen={-1} />
            </div>
          ))}
          <div className="center mt-6">
            <Link className="btn btn-ghost" to="/contact">Ask your own question <FiArrowRight /></Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
