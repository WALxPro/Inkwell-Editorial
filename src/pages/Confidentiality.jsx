import { FiLock, FiShield, FiEyeOff, FiUserX, FiTrash2, FiFileText } from "react-icons/fi";
import { PageHero, CTA } from "../components/UI.jsx";

const POINTS = [
  { icon: <FiLock size={22} />, title: "Manuscripts are private", text: "Your manuscript is read only by me, for the purpose of your edit. It is never shared with other clients, other editors or anyone else." },
  { icon: <FiEyeOff size={22} />, title: "Never shared without permission", text: "Client work is not publicly shared, quoted, or shown in a portfolio unless you give written permission for that specific use." },
  { icon: <FiFileText size={22} />, title: "Examples use approved material only", text: "Before and after examples on this website use passages written for demonstration, or client excerpts approved in writing." },
  { icon: <FiUserX size={22} />, title: "Your name can remain private", text: "Client names and book titles can stay private if you request it — even after your book is published." },
  { icon: <FiShield size={22} />, title: "Secure handling", text: "Files are stored in secure, password-protected storage and are never uploaded to public tools or services." },
  { icon: <FiTrash2 size={22} />, title: "Deletion on request", text: "When your project is finished, you can ask for your files to be permanently deleted. An NDA is available for any project." }
];

export default function Confidentiality() {
  return (
    <>
      <PageHero
        eyebrow="Confidentiality"
        title={<>Your manuscript is <em>yours.</em></>}
        lead="Sending an unpublished book to someone you've never met takes trust. Here's exactly how your work is protected."
      />
      <section>
        <div className="container">
          <blockquote className="statement">
            <FiLock size={28} />
            <p>“Your manuscript stays confidential. It's never shared, quoted, or used anywhere without your permission.”</p>
          </blockquote>
          <div className="grid-3 mt-6">
            {POINTS.map((p) => (
              <div className="card" key={p.title}>
                <span className="icon-wrap">{p.icon}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
