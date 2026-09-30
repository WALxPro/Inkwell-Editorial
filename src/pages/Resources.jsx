import { Link } from "react-router-dom";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { PageHero, CTA } from "../components/UI.jsx";
import { ARTICLES } from "../data/resources.js";

export default function Resources() {
  const [feature, ...rest] = ARTICLES;
  return (
    <>
      <PageHero
        eyebrow="Author resources"
        title={<>Practical guides for <em>independent authors.</em></>}
        lead="Free, plain-language articles on editing, pricing, manuscript preparation and ebook formatting — the things I explain most often, written down once and properly."
      />

      <section>
        <div className="container">
          <Link to={"/resources/" + feature.slug} className="feature-article">
            <div>
              <p className="eyebrow">Featured · {feature.category}</p>
              <h2>{feature.title}</h2>
              <p className="lead-sm">{feature.excerpt}</p>
              <span className="text-link">Read the guide <FiArrowRight /></span>
            </div>
            <div className="feature-num">10</div>
          </Link>

          <div className="grid-3 mt-6">
            {rest.map((a) => (
              <Link to={"/resources/" + a.slug} className="card article-card" key={a.slug}>
                <p className="eyebrow">{a.category}</p>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="small article-foot"><FiClock /> {a.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Prefer personal advice?" text="Send a sample and receive a free edit plus a recommendation tailored to your manuscript." />
    </>
  );
}
