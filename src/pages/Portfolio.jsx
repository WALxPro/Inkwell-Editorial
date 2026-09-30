import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { PageHero, Cover, CTA, CoverImage } from "../components/UI.jsx";
import { PROJECTS, FILTERS } from "../data/portfolio.js";

export default function Portfolio() {
  const [f, setF] = useState("All");
  const list = f === "All" ? PROJECTS : PROJECTS.filter((p) => p.filters.includes(f));

  return (
    <>
      <PageHero
        eyebrow="Portfolio · Sample case studies"
        title={<>Books, problems, <em>and how they were solved.</em></>}
        lead="Each project shows the author's challenge, the editorial approach, the result and a short before and after excerpt. Open any project for the full case study."
      />

      <section className="portfolio-section">
        <div className="container">
          <div className="filters">
            {FILTERS.map((x) => (
              <button key={x} className={f === x ? "on" : ""} onClick={() => setF(x)}>
                {x}
                <span>{x === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.filters.includes(x)).length}</span>
              </button>
            ))}
          </div>

          {list.map((p) => (
            <article className="proj" key={p.id}>
         <Link to={"/portfolio/" + p.id}>
  {p.image ? <CoverImage p={p} /> : <Cover p={p} />}
</Link>
              <div>
                <p className="eyebrow">{p.service}</p>
                <h2 className="proj-title"><Link to={"/portfolio/" + p.id}>{p.title}</Link></h2>
                <p className="lead-sm">{p.summary}</p>
                <div className="proj-facts">
                  <div className="fact"><span>Genre</span><strong>{p.genre}</strong></div>
                  <div className="fact"><span>Author</span><strong>{p.author}</strong></div>
                  <div className="fact"><span>Length</span><strong>{p.words} words</strong></div>
                </div>
                <div className="proj-cols">
                  <div><span className="label">Challenge</span><p>{p.challenge}</p></div>
                  <div><span className="label">Approach</span><p>{p.approach}</p></div>
                  <div><span className="label">Result</span><p>{p.result}</p></div>
                </div>
                <div className="mini-ba">
                  <div><span className="label muted-label">Before</span>{p.before}</div>
                  <div className="after"><span className="label">After</span>{p.after}</div>
                </div>
                <Link className="text-link" to={"/portfolio/" + p.id}>Read the full case study <FiArrowRight /></Link>
              </div>
            </article>
          ))}
          {list.length === 0 && <p className="center">No projects in this category yet.</p>}
        </div>
      </section>

      <CTA title="Your book could be the next case study." text="Every project starts with a free 1,000-word sample edit. (And it only appears here if you say yes.)" />
    </>
  );
}
