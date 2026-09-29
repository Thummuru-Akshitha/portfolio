# Thummuru Akshitha — Personal Portfolio

A responsive, accessible personal portfolio built for the Full Stack Development
(SPC0701CS) Assignment-1 brief: an original portfolio using HTML5, CSS3, Bootstrap
and JavaScript (ES6+).

**Live look:** open `index.html` in any browser, or enable GitHub Pages on this repo
(Settings → Pages → Deploy from branch → main → / (root)).

## Structure

```
.
├── index.html   # Semantic sections: Home, About, Education, Skills, Projects, Contact
├── style.css    # Design tokens, layout, responsive rules, light/dark theme
├── script.js    # Theme toggle, project filtering, contact form validation
└── README.md
```

## Assignment requirements → where they live

| Requirement | Implementation |
|---|---|
| Semantic HTML5 structure | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` in `index.html`, plus a table and a form |
| CSS3 & responsive design | CSS custom properties, Flexbox/Grid layout, mobile-first media queries in `style.css` |
| Bootstrap UI | Navbar, cards, buttons, table, alert, and form controls (Bootstrap 5.3 via CDN) |
| JavaScript interactivity (2+ features) | 1) Light/dark **theme toggle** (persisted in `localStorage`) · 2) **Project filter** by category (All / Cybersecurity / Machine Learning / Web Development) |
| Form validation | Real-time + submit-time validation on name, email, and message fields, with dynamic inline error text and a success/error alert |

## Customising

- **Content:** all copy comes from the résumé — update project descriptions, skills
  or contact details directly in `index.html`.
- **Colours/fonts:** edit the CSS custom properties at the top of `style.css`
  (`:root` for light mode, `html[data-theme="dark"]` for dark mode).
- **Add a project:** duplicate an `<article class="card project-card">` block,
  set `data-category` to `cybersecurity`, `ml`, or `web` so it works with the filter.

## Before you submit

- Replace any placeholder contact details if they've changed.
- Push to a public (or evaluator-accessible) GitHub repository.
- Take the screenshots the report template asks for (home, projects filtered,
  contact form validation states, and dark mode).
