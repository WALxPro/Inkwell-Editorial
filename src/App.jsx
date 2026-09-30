import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Pricing from "./pages/Pricing.jsx";
import Editing from "./pages/Editing.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import PortfolioDetail from "./pages/PortfolioDetail.jsx";
import Ebook from "./pages/Ebook.jsx";
import Resources from "./pages/Resources.jsx";
import Article from "./pages/Article.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Confidentiality from "./pages/Confidentiality.jsx";
import Contact from "./pages/Contact.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">Page not found</p>
        <h1>This page seems to have been <em>cut in revision.</em></h1>
        <p className="lead">The page you were looking for doesn't exist. Let's get you back to the manuscript.</p>
        <div className="btn-row"><Link className="btn btn-primary" to="/">Back to home</Link></div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/editing" element={<Editing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/ebook-formatting" element={<Ebook />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/confidentiality" element={<Confidentiality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
