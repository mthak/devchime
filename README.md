# DevChime

A responsive, static website for DevChime, an angel investment firm focused on healthtech, fintech, and AI infrastructure.

## Files

- `index.html` — page content and search/social metadata.
- `styles.css` — responsive design and illustration styling.
- `script.js` — current footer year and keyboard-accessible founder-support tabs.
- `favicon.svg` — DevChime chime icon.
- `_headers` — HTTP headers for Cloudflare Pages.

Open `index.html` in a browser to preview. No installation or build step is required. Google Fonts is the only external resource; the site falls back to system fonts when unavailable.

## Current deployment

The owner deployed this site through GitHub to the Cloudflare Worker `devchime`. Publish these updated source files through that same repository and deployment workflow. Keep any existing Cloudflare configuration in the repository. This local update does not commit, push, change DNS, or deploy.

## Alternative: Cloudflare Pages

The site is ready for static hosting on Cloudflare Pages. Upload the site folder's contents as the deployment assets, with `index.html` at the root, or connect this folder through a source repository with no build command. The asset/output directory is the folder containing `index.html`.

After a successful Pages deployment, associate `devchime.us` with that Pages project through its custom domain settings. Domain registration or DNS hosting alone does not publish these website files. This project does not change DNS or deploy automatically.

All contact links use `contact@devchime.us` and open the visitor's email application. The mailbox must already exist or be configured separately; the website does not create email hosting or process form submissions.

## Content

- Portfolio: ITLook.ai, Jinn Labs, and RiseWise.ai, included as portfolio companies at the owner's direction.
- Investment criteria: a working product, initial traction, business potential, and partnership fit.
- Founder support: product and technical strategy, go-to-market, customer acquisition, and retention.
- Visuals: original diagrams built directly in HTML, CSS, and SVG. Portfolio diagrams are conceptual illustrations, not product screenshots.
- Contact: email links include an editable introduction outline; no form data is collected by this website.

Company descriptions draw on the companies' own sites:
- https://itlook.ai/ — agentic AI security.
- https://www.jinnlabs.ai/demo — AI store manager for retail.
- https://risewise.ai/ — financial literacy and virtual investing practice for teens and young adults.

No investment amounts, performance metrics, named team biographies, or guaranteed growth outcomes are asserted.
