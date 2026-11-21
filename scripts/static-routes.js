/*
 * Post-build step for GitHub Pages.
 *
 * The site is a single-page React app. Without this script, GitHub Pages
 * has no file for /services, /about, etc., answers with its 404 page and
 * the spa-github-pages trick redirects the browser. Visitors see the page,
 * but crawlers and link previews (LinkedIn, Google) get an HTTP 404.
 *
 * This script writes one copy of build/index.html per route
 * (build/services.html, build/about.html, ...). GitHub Pages serves
 * /services from services.html with HTTP 200, and React Router renders the
 * right page. Each copy gets its own title, description and og:url, so
 * link previews show the page that was shared.
 */
const fs = require("fs");
const path = require("path");

const SITE = "https://thomasgbernard.github.io";
const BUILD = path.join(__dirname, "..", "build");

const routes = [
  {
    route: "home",
    title:
      "Thomas Bernard | Alpine Hydromorphology, River Restoration & Flood Risk",
  },
  {
    route: "services",
    title: "Services | Thomas Bernard, Alpine Hydromorphology",
    description:
      "River change monitoring from repeat lidar, hydromorphological trajectory diagnosis and hydraulic compatibility studies for river restoration and flood risk projects in Italy, France and Switzerland.",
  },
  {
    route: "work-with-me",
    title: "Work with me | Thomas Bernard, Alpine Hydromorphology",
    description:
      "Tell me about your river reach, project or dataset and what you need to find out. I reply within two working days, in English, French or Italian.",
  },
  {
    route: "about",
    title: "About | Thomas Bernard, Alpine Hydromorphologist",
    description:
      "Eight years of research in fluvial geomorphology, from repeat lidar to 2D hydraulics, now applied to river restoration and flood risk projects across the Alps.",
  },
  {
    route: "portfolio",
    title: "Portfolio | Thomas Bernard, Alpine Hydromorphology",
    description:
      "Case studies, peer-reviewed research and science communication on rivers, sediment, lidar and 2D hydraulics.",
  },
  {
    route: "contact",
    title: "Contact | Thomas Bernard, Alpine Hydromorphology",
    description:
      "Tell me about your river reach, project or dataset. I reply within two working days, in English, French or Italian.",
  },
  {
    route: "legal",
    title: "Terms & Privacy | Thomas Bernard",
    description: "Terms of use and privacy policy of thomasgbernard.github.io.",
  },
];

// Old URLs that React Router redirects to a current page: same file content,
// og:url pointing to the target page.
const aliases = {
  terms: "legal",
  privacy: "legal",
  experience: "about",
  education: "about",
  publications: "portfolio",
  outreach: "portfolio",
};
for (const [alias, target] of Object.entries(aliases)) {
  const page = routes.find((r) => r.route === target);
  routes.push({ ...page, route: alias, canonical: target });
}

const escapeHtml = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) {
    throw new Error(`meta ${attr}="${key}" not found in build/index.html`);
  }
  return html.replace(re, `$1${escapeHtml(value)}$2`);
}

const indexPath = path.join(BUILD, "index.html");
const index = fs.readFileSync(indexPath, "utf8");

for (const page of routes) {
  let html = index.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(page.title)}</title>`
  );
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(
    html,
    "property",
    "og:url",
    `${SITE}/${page.canonical || page.route}`
  );
  if (page.description) {
    html = setMeta(html, "name", "description", page.description);
    html = setMeta(html, "property", "og:description", page.description);
  }
  fs.writeFileSync(path.join(BUILD, `${page.route}.html`), html);
  console.log(`static route: /${page.route} -> ${page.route}.html`);
}
