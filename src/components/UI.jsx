import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight, FiPlus, FiMinus, FiScissors, FiClock, FiRepeat, FiCheckCircle,
  FiMessageCircle, FiLayers, FiTablet, FiHelpCircle, FiCompass, FiEdit3, FiFeather,
  FiSearch, FiBookOpen, FiPackage, FiUsers, FiFileText, FiEye, FiShield, FiHeart,
  FiTarget, FiUserCheck, FiBook, FiSend, FiStar, FiZap
} from "react-icons/fi";

export const ICONS = {
  scissors: FiScissors, clock: FiClock, repeat: FiRepeat, check: FiCheckCircle,
  message: FiMessageCircle, layers: FiLayers, tablet: FiTablet, help: FiHelpCircle,
  compass: FiCompass, edit: FiEdit3, feather: FiFeather, search: FiSearch,
  book: FiBookOpen, package: FiPackage, users: FiUsers, file: FiFileText, eye: FiEye,
  shield: FiShield, heart: FiHeart, target: FiTarget, user: FiUserCheck, closed: FiBook,
  send: FiSend, star: FiStar, zap: FiZap
};

export function Icon({ name, size = 22 }) {
  const C = ICONS[name] || FiFeather;
  return <C size={size} />;
}

export function Divider({ light }) {
  return <div className={"divider" + (light ? " light" : "")}><span>✦</span></div>;
}

export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="fade">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead, center }) {
  return (
    <div className={"section-head" + (center ? " center" : "")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

/* Renders editorial markup:  [-deleted text-]  and  {+inserted text+} */
export function Markup({ text }) {
  const parts = text.split(/(\[-[\s\S]*?-\]|\{\+[\s\S]*?\+\})/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("[-") && p.endsWith("-]")) return <del key={i} className="mk-del">{p.slice(2, -2)}</del>;
        if (p.startsWith("{+") && p.endsWith("+}")) return <ins key={i} className="mk-ins">{p.slice(2, -2)}</ins>;
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

export function Accordion({ items, startOpen = 0 }) {
  const [open, setOpen] = useState(startOpen);
  return (
    <div className="accordion">
      {items.map((f, i) => (
        <div key={f.q} className={"acc-item" + (open === i ? " open" : "")}>
          <button className="acc-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{f.q}</span>
            {open === i ? <FiMinus /> : <FiPlus />}
          </button>
          {open === i && <div className="acc-a"><p>{f.a}</p></div>}
        </div>
      ))}
    </div>
  );
}

export function CTA({
  title = "Ready to see what your manuscript could become?",
  text = "Send me the first 1,000 words. I'll edit them free of charge, explain every change, and recommend the level of edit your book actually needs — no obligation, no sales pitch."
}) {
  return (
    <section className="cta-band">
      <div className="container narrow center">
        <Divider light />
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="btn-row center">
          <Link className="btn btn-primary" to="/contact">Request a Free Sample Edit <FiArrowRight /></Link>
          <Link className="btn btn-ghost" to="/services">Explore services</Link>
        </div>
      </div>
    </section>
  );
}

export function Cover({ p, small }) {
  return (
    <div
      className={"cover" + (small ? " small" : "")}
      style={{ background: "linear-gradient(160deg, " + p.colors[0] + " 0%, " + p.colors[1] + " 100%)" }}
    >
      <span className="c-auth">{p.genre}</span>
      <div>
        <span className="c-orn">✦</span>
        <div className="c-title">{p.title}</div>
      </div>
      <span className="c-auth">A Novel</span>
    </div>
  );
}
