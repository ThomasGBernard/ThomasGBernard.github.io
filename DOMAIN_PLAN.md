# Website plans

- **Part A: custom `.eu` domain.** Planned, not started (decided 27 Oct 2026).
- **Part B: short arrival story on the home page.** Idea, not started (added 27 Oct 2026).

---

# Part A: custom .eu domain

Goal: move the site from `thomasgbernard.github.io` to my own `.eu` domain, keeping free hosting on GitHub Pages.

---

## 1. Choose and buy the domain

- [ ] Pick the name. Ideas: `thomasbernard.eu`, `thomas-bernard.eu`, `bernard-geo.eu`. Check availability at the registrar.
- [ ] Choose a registrar. Compare the **renewal** price, not just the first-year offer. Expect about €8–15/year.
  - Cloudflare Registrar: sells at cost and includes free email routing. Check that it offers `.eu`.
  - Porkbun or OVH: both sell `.eu`, and OVH is European.
- [ ] Eligibility: a `.eu` domain requires residence (or citizenship) in the EU/EEA. Living in Italy qualifies.
- [ ] Turn on **auto-renew** so the domain never expires while clients are using the link.
- [ ] Use an email address I check often as the registrar's contact email (expiry warnings go there).

## 2. Professional email (optional but recommended)

- [ ] Set up email forwarding at the registrar, for example `thomas@<domain>` → `thomas.bernard.consulting@gmail.com`.
- [ ] Optional: configure Gmail "Send mail as" so replies come from the new address.
- [ ] If I change the address clients write to, update the `workWithMe.email` value in `src/portfolio.js`. FormSubmit then asks for a **new activation** (click the link in the first email again).

## 3. DNS records (at the registrar)

Delete any default "parking" records first, then add:

| Type  | Name / host | Value                      |
| ----- | ----------- | -------------------------- |
| A     | `@`         | `185.199.108.153`          |
| A     | `@`         | `185.199.109.153`          |
| A     | `@`         | `185.199.110.153`          |
| A     | `@`         | `185.199.111.153`          |
| CNAME | `www`       | `thomasgbernard.github.io` |

Optional IPv6 (AAAA, `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

## 4. Changes in the website project

- [ ] Create `public/CNAME` containing only the domain, e.g. `thomasbernard.eu`.
      **Important:** `npm run deploy` overwrites the published branch each time. Without this file, the custom domain is removed on every deploy.
- [ ] Replace `https://thomasgbernard.github.io` with the new domain in:
  - `package.json` → `"homepage"`
  - `public/index.html` → `og:url` meta tag
  - `src/portfolio.js` → `seo.og.url`
  - `public/robots.txt` → `Sitemap:` line
  - `public/sitemap.xml` → every `<loc>`
  - Also search `public/oso/index.html` for any link to the old address.
- [ ] Run `npm run deploy`.

## 5. GitHub settings

- [ ] In the repository on GitHub, open **Settings → Pages → Custom domain**, enter the domain and click **Save**.
- [ ] Wait for the DNS check to pass (up to 24 h).
- [ ] Tick **Enforce HTTPS** (the option can take up to 24 h to appear).
- [ ] Optional, for security: verify the domain under GitHub **account Settings → Pages**, so nobody else can claim it for their own Pages site.

## 6. Check and announce

- [ ] Open the new domain, both `https://<domain>` and `https://www.<domain>`, and check every page, including `/oso/`.
- [ ] Check that `thomasgbernard.github.io` redirects to the new domain (GitHub does this automatically).
- [ ] Send one test message through **Work with me**.
- [ ] Update the link on LinkedIn, the CV (`public/Thomas_Bernard_Resume.pdf`), Google Scholar, the GitHub profile and the email signature.
- [ ] Optional: add the domain to Google Search Console and submit `sitemap.xml`.

---

Reference: GitHub Docs, "Managing a custom domain for your GitHub Pages site":
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
