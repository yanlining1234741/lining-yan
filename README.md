# Lining Yan — Personal Homepage

The homepage leads with the research question — when the evidence is incomplete, what should the agent do — and the three decisions Look, Carry, and Ask. It is a static site, not a template with a portrait card.

Live site: **https://yanlining1234741.github.io/lining-yan/**

Local path: `Desktop/Personal Project/lining-yan`

| Page | File |
|------|------|
| About | `index.html` |
| Background | `background.html` |
| Research | `research.html` |
| Personal | `personal.html` |
| CV | `assets/Lining_Yan-CV.pdf` |

## Preview locally

```bash
cd ~/Desktop/Personal\ Project/lining-yan
python3 -m http.server 8080
```

## Publish updates

```bash
cd ~/Desktop/Personal\ Project/lining-yan
git add -A
git commit -m "Update site"
git push
```

## Make it findable on Google

1. Open [Google Search Console](https://search.google.com/search-console)
2. Add property → **URL prefix** → `https://yanlining1234741.github.io/lining-yan/`
3. Verify ownership (HTML tag or Google account that owns the GitHub Pages site)
4. Go to **Sitemaps** → submit: `https://yanlining1234741.github.io/lining-yan/sitemap.xml`
5. Use **URL Inspection** on the homepage → **Request indexing**

Indexing often takes days to a few weeks. Searching `Lining Yan Yale` or `site:yanlining1234741.github.io/lining-yan` helps check progress.
