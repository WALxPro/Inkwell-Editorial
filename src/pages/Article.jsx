import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiClock } from "react-icons/fi";
import { CTA } from "../components/UI.jsx";
import { ARTICLES } from "../data/resources.js";

export default function Article() {
  const { slug } = useParams();
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) {
    return (
      <section className="page-hero"><div className="container">
        <h1>Article not found.</h1>
        <Link className="text-link" to="/resources"><FiArrowLeft /> All resources</Link>
      </div></section>
    );
  }
  const related = ARTICLES.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <Link className="text-link back" to="/resources"><FiArrowLeft /> All resources</Link>
          <p className="eyebrow mt-3">{a.category} · <FiClock /> {a.readTime}</p>
          <h1 className="article-title">{a.title}</h1>
          <p className="lead">{a.excerpt}</p>
        </div>
      </section>

      <section>
        <div className="article">
          {a.sections.map((s, i) => (
            <div key={i}>
              {s.h && <h2>{s.h}</h2>}
              {s.p && s.p.map((p, j) => <p key={j}>{p}</p>)}
              {s.list && (s.h === "The ten signs"
                ? <ol className="num-list">{s.list.map((l) => <li key={l}>{l}</li>)}</ol>
                : <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>)}
            </div>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <p className="eyebrow">Keep reading</p>
          <div className="grid-3">
            {related.map((r) => (
              <Link to={"/resources/" + r.slug} className="card article-card" key={r.slug}>
                <p className="eyebrow">{r.category}</p>
                <h3>{r.title}</h3>
                <span className="text-link">Read <FiArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
