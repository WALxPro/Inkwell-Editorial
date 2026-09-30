# Inkwell Editorial

A content-rich editorial studio website built with React, Vite, React Router and React Icons.

## Run locally

    npm install
    npm run dev

## Build for production

    npm run build

The static site is output to the dist folder. It uses a HashRouter, so it works on any static host
(Netlify, Vercel, GitHub Pages, cPanel) without server rewrite rules.

## Where to edit content

All text lives in src/data:

- site.js         — studio name, editor name, email, needs, genres, process, testimonials, principles
- services.js     — every service: description, inclusions, exclusions, rates, turnaround
- caseStudies.js  — the editing examples on "The Edit" page (markup syntax: [-deleted-] {+inserted+})
- portfolio.js    — portfolio projects and case-study pages
- faqs.js         — all FAQs
- resources.js    — Author Resources articles

## Before you go live

1. Replace "Your Name" and the email address in src/data/site.js.
2. Replace the sample testimonials with real, approved client quotes.
3. Replace the sample portfolio projects with approved client work (or keep them clearly labelled as samples).
4. Connect the contact form in src/pages/Contact.jsx to a form service (Formspree, Netlify Forms, EmailJS...).
