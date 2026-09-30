import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiFileText } from "react-icons/fi";
import { Cover, CoverImage, CTA } from "../components/UI.jsx";
import { PROJECTS } from "../data/portfolio.js";

export default function PortfolioDetail() {
  const { id } = useParams();
  const i = PROJECTS.findIndex((p) => p.id === id);
  const p = PROJECTS[i];

  if (!p) {
    return (
      <section className="page-hero"><div className="container">
        <h1>Project not found.</h1>
        <Link className="text-link" to="/portfolio"><FiArrowLeft /> Back to portfolio</Link>
      </div></section>
    );
  }
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <>
      <section className="page-hero">
        <div className="container detail-hero">
          <div>
            <Link className="text-link back" to="/portfolio"><FiArrowLeft /> All projects</Link>
            <p className="eyebrow mt-3">{p.service} · Sample case study</p>
            <h1>{p.title}</h1>
            <p className="lead">{p.summary}</p>
            <div className="proj-facts wide">
              <div className="fact"><span>Genre</span><strong>{p.genre}</strong></div>
              <div className="fact"><span>Author</span><strong>{p.author}</strong></div>
              <div className="fact"><span>Length</span><strong>{p.words} words</strong></div>
              <div className="fact"><span>Timeline</span><strong>{p.timeline}</strong></div>
            </div>
          </div>
            {p.image ? <CoverImage p={p} /> : <Cover p={p} />}
          
        </div>
      </section>

      <section>
        <div className="container narrow">
          <div className="detail-block"><span className="label">The project challenge</span><p className="lead-sm">{p.challenge}</p></div>
          <div className="detail-block"><span className="label">The editorial approach</span><p className="lead-sm">{p.approach}</p></div>
          <div className="detail-block"><span className="label">The result</span><p className="lead-sm">{p.result}</p></div>

          <div className="detail-block">
            <span className="label">Before & after</span>
            <div className="ba two">
              <div className="ba-panel"><h5>Before</h5><p className="excerpt">{p.before}</p></div>
              <div className="ba-panel after"><h5>After</h5><p className="excerpt">{p.after}</p></div>
            </div>
          </div>

          <div className="detail-block">
            <span className="label">Delivered files</span>
            <ul className="file-list">{p.deliverables.map((d) => <li key={d}><FiFileText />{d}</li>)}</ul>
          </div>

          <div className="next-proj">
            <span className="small upper">Next project</span>
            <Link to={"/portfolio/" + next.id}><h3>{next.title} <FiArrowRight /></h3></Link>
            <p>{next.genre} · {next.service}</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
