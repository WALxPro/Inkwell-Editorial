import { useState } from "react";
import { FiSend, FiCheckCircle, FiLock, FiMail } from "react-icons/fi";
import { PageHero } from "../components/UI.jsx";
import { SITE, PROCESS } from "../data/site.js";
import { SERVICES } from "../data/services.js";

/*
  This form has no backend yet. To receive submissions, connect it to a form service
  (e.g. Formspree, Netlify Forms or EmailJS) inside handleSubmit below.
*/
export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHero
        eyebrow="Free sample edit"
        title={<>Send 1,000 words. <em>See the difference.</em></>}
        lead="You'll receive your sample back edited in Track Changes, with comments explaining the changes, a recommended service and a fixed quote   usually within three business days."
      />
      <section>
        <div className="container contact-grid">
          {sent ? (
            <div className="sent">
              <FiCheckCircle size={40} />
              <h2>Thank you   your sample is on its way.</h2>
              <p>You'll hear back within three business days with your edited sample, a recommendation and a quote. If you don't see a reply, check your spam folder or write to {SITE.email}.</p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field"><label htmlFor="n">Your name</label><input id="n" required /></div>
                <div className="field"><label htmlFor="e">Email</label><input id="e" type="email" required /></div>
              </div>
              <div className="form-row">
                <div className="field"><label htmlFor="t">Book title (optional)</label><input id="t" /></div>
                <div className="field"><label htmlFor="g">Genre</label><input id="g" placeholder="e.g. Contemporary romance" required /></div>
              </div>
              <div className="form-row">
                <div className="field"><label htmlFor="w">Approximate word count</label><input id="w" type="number" placeholder="80000" required /></div>
                <div className="field">
                  <label htmlFor="s">Service you're interested in</label>
                  <select id="s" defaultValue="unsure">
                    <option value="unsure">I'm not sure   please recommend</option>
                    {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="field"><label htmlFor="d">Ideal deadline (optional)</label><input id="d" type="date" /></div>
              <div className="field"><label htmlFor="m">Tell me about your book and your goals</label><textarea id="m" rows="4" placeholder="Where are you in the process? What worries you most about the manuscript?" /></div>
              <div className="field"><label htmlFor="x">Paste your sample (up to 1,000 words)</label><textarea id="x" rows="10" required placeholder="Paste the opening of your manuscript here." /></div>
              <p className="small"><FiLock /> Your manuscript stays confidential. It's never shared, quoted, or used anywhere without your permission.</p>
              <button className="btn btn-primary" type="submit">Send my sample <FiSend /></button>
            </form>
          )}

          <aside className="contact-side">
            <h3>What happens next</h3>
            <ol className="side-steps">
              {PROCESS.map((p, i) => <li key={p.title}><span>{i + 1}</span><div><strong>{p.title}</strong><p>{p.text}</p></div></li>)}
            </ol>
            <div className="side-box">
              <h4>Tips for your sample</h4>
              <ul>
                <li>Send your opening pages   they matter most to readers.</li>
                <li>Send the manuscript as it is now, without last-minute polishing.</li>
                <li>Mention any intentional style choices.</li>
              </ul>
            </div>
            <a className="text-link" href={"mailto:" + SITE.email}><FiMail /> Prefer email? {SITE.email}</a>
          </aside>
        </div>
      </section>
    </>
  );
}
