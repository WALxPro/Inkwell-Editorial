import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiLock, FiMail, FiArrowRight } from "react-icons/fi";
import { SITE } from "../data/site.js";

const NAV = [
  ["/services", "Services"],
  ["/pricing", "Pricing"],
  ["/editing", "The Edit"],
  ["/portfolio", "Portfolio"],
  ["/ebook-formatting", "Ebooks"],
  ["/resources", "Resources"],
  ["/about", "About"],
  ["/faq", "FAQ"]
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={"site-header" + (scrolled ? " scrolled" : "")}>
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span className="logo-mark">I</span>
            <span>Inkwell <em>Editorial</em></span>
          </Link>
          <nav className={"nav" + (open ? " open" : "")}>
            {NAV.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : "")}>
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary btn-sm nav-cta">Free Sample Edit</Link>
          </nav>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" className="logo">
                <span className="logo-mark light">I</span>
                <span>Inkwell <em>Editorial</em></span>
              </Link>
              <p className="footer-blurb">{SITE.tagline}. Developmental editing, line editing, copy editing, proofreading and ebook formatting — with your voice kept intact.</p>
              <a className="footer-mail" href={"mailto:" + SITE.email}><FiMail /> {SITE.email}</a>
            </div>
            <div>
              <h5>Services</h5>
              <ul>
                <li><Link to="/services">Developmental Editing</Link></li>
                <li><Link to="/services">Line Editing</Link></li>
                <li><Link to="/services">Copy Editing</Link></li>
                <li><Link to="/services">Proofreading</Link></li>
                <li><Link to="/ebook-formatting">Ebook Formatting</Link></li>
              </ul>
            </div>
            <div>
              <h5>Studio</h5>
              <ul>
                <li><Link to="/about">About the Editor</Link></li>
                <li><Link to="/editing">The Edit (Examples)</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/resources">Author Resources</Link></li>
              </ul>
            </div>
            <div>
              <h5>Help</h5>
              <ul>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/confidentiality">Confidentiality</Link></li>
                <li><Link to="/contact">Request a Sample Edit</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-confidential">
            <FiLock />
            <p>Your manuscript stays confidential. It's never shared, quoted, or used anywhere without your permission.</p>
            <Link to="/confidentiality" className="text-link light">Read the policy <FiArrowRight /></Link>
          </div>
          <div className="footer-note">
            <span>© {new Date().getFullYear()} Inkwell Editorial. All rights reserved.</span>
            <span>Crafted with care for independent authors.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
